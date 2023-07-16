import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import mongoSanitize from "express-mongo-sanitize";
import rateLimiter from "express-rate-limit";
import helmet from "helmet";
import xss from "xss-clean";
import cors from "cors";

const app = express();
dotenv.config();

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
// database
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import reviewRouter from "./routes/reviewRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 1000 * 60 * 15,
    max: 100,
  })
);

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        "script-src": [
          "'self'",
          "https://js.stripe.com/v3",
          "https://hooks.stripe.com",
          "https://js.stripe.com",
          "https://maps.googleapis.com",
        ],
        "default-src": [
          "'self'",
          "https://js.stripe.com/v3/m-outer-93afeeb17bc37e711759584dbfc50d47.html#url=https%3A%2F%2Fducks-row.onrender.com%2F&title=Ducks%20Row&referrer=&muid=6499db9f-bd13-49c4-afd6-5e5b11ec88681fc5b6&sid=35e84f85-efb9-4a7c-8fbc-a408e9c233e3f70c59&version=6&preview=false",
        ],
      },
    },
  })
);
app.use(cors());
app.use(xss());
app.use(mongoSanitize());

// app.use(function (req, res, next) {
//   res.setHeader(
//     "Content-Security-Policy",
//     "default-src 'self' https://fonts.googleapis.com; font-src 'self'; img-src 'self'; script-src 'self' https://js.stripe.com https://js.stripe.com/v3 ; style-src 'self' https://fonts.googleapis.com; frame-src 'self' https://js.stripe.com https://hooks.stripe.com"
//   );
//   next();
// });

if (process.env.NODE !== "production") {
  app.use(morgan("dev"));
}
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "./client/dist")));

app.use(cookieParser(process.env.JWT_SECRET));
// app.use("/api/v1", express.static("./public"));
app.use(fileUpload());

app.get("/api/v1", (req, res) => {
  res.send("e-commerce api");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/orders", orderRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
