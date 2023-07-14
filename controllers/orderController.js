import Order from "../models/Order.js";
import Product from "../models/Product.js";
import { StatusCodes } from "http-status-codes";
import Stripe from "stripe";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";
import { checkPermissions } from "../utils/index.js";

const createOrder = async (req, res) => {
  await Order.deleteMany({ user: req.user.userId, status: "pending" });
  const stripe = Stripe(process.env.STRIPE_SECRET);
  const { cart, totalAmount, shippingFee } = req.body;

  if (!cart || cart.length < 1) {
    throw new BadRequestError("No cart items provided");
  }
  if (!totalAmount || !shippingFee) {
    throw new BadRequestError("Please provide total amount and shipping fee");
  }
  const newCart = cart.map((item) => {
    return { ...item, id: item.id.split("#")[0] };
  });

  let orderItems = [];
  let subtotal = 0;

  for (const item of newCart) {
    const dbProduct = await Product.findOne({ _id: item.id });
    if (!dbProduct) {
      throw new NotFoundError(`No product with id : ${item.id}`);
    }
    const { name, price, image, _id } = dbProduct;
    const singleOrderItem = {
      amount: item.amount,
      name,
      price,
      image,
      product: _id,
    };
    // add item to order
    orderItems = [...orderItems, singleOrderItem];
    // calculate subtotal
    subtotal += item.amount * price;
  }
  const tax = Math.floor(subtotal * 0.1);
  //calculate total
  const total = tax + shippingFee + subtotal;
  // getclient secret
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  const order = await Order.create({
    orderItems,
    total,
    subtotal,
    tax,
    shippingFee,
    clientSecret: paymentIntent.client_secret,
    user: req.user.userId,
  });

  res
    .status(StatusCodes.CREATED)
    .json({ order, clientSecret: order.clientSecret });
};
const getAllOrders = async (req, res) => {
  const orders = await Order.find({});
  res.status(StatusCodes.OK).json({ orders, count: orders.length });
};
const getSingleOrder = async (req, res) => {
  const { id: orderId } = req.params;
  const order = await Order.findOne({ _id: orderId });
  if (!order) {
    throw new NotFoundError(`No order with id : ${orderId}`);
  }
  checkPermissions(req.user, order.user);
  res.status(StatusCodes.OK).json({ order });
};
const getCurrentUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.userId, status: "paid" });

  res.status(StatusCodes.OK).json({ orders, count: orders.length });
};
const updateOrder = async (req, res) => {
  const { id: orderId } = req.params;
  const { paymentIntentId } = req.body;

  const order = await Order.findOne({ _id: orderId });
  if (!order) {
    throw new NotFoundError(`No order with id : ${orderId}`);
  }
  checkPermissions(req.user, order.user);

  order.paymentIntentId = paymentIntentId;
  order.status = "paid";
  await order.save();

  res.status(StatusCodes.OK).json({ order });
};

export {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
};
