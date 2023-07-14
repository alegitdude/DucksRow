import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Loading from "./Loading";
import { nanoid } from "nanoid";
import SingleOrder from "./SingleOrder";
import { useUserContext } from "../context/userContext";

const Orders = () => {
  const [orders, setOrders] = useState(null);
  const { logoutUser } = useUserContext();

  const getAllMyOrders = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/orders/showAllMyOrders"
      );
      setOrders(data.orders);
    } catch (error) {
      if (error.response.status === 401) {
        logoutUser();
        return;
      }
      console.log(error);
    }
  };

  useEffect(() => {
    getAllMyOrders();
  }, []);
  if (!orders) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="orders">
        <h2>Orders</h2>
        {orders.map((order) => {
          return <SingleOrder key={nanoid()} {...order} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;

  width: 100%;
  justify-content: center;
  .orders {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    width: 100%;
  }
`;
export default Orders;
