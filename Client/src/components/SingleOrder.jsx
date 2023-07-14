import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { nanoid } from "nanoid";
const SingleOrder = ({ _id, total, orderItems, updatedAt }) => {
  const paidOn = new Date(updatedAt);
  const paid = paidOn.toDateString();
  const url = "https://ducks-row.onrender.com/api/v1";
  return (
    <Wrapper>
      <div className="items">
        {orderItems.map((item) => {
          return (
            <div className="item" key={nanoid()}>
              <div>
                <h4>{item.name}</h4>
                <img src={url + item.image} />
              </div>
              <div className="quantity">
                <h5>Quantity: </h5>
                <p>{item.amount}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="order-info">
        <div className="order-number">
          <h4>Order Number:</h4>
          <p>{_id}</p>
        </div>
        <div>
          <h4>Date:</h4>
          <p>{paid}</p>
        </div>
        <div>
          <h4>Total:</h4>
          <p>{formatPrice(total)}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
  background-color: var(--primary-yellow-light);
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 60rem;
  gap: 1rem;
  padding: 1rem;
  .order-info {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
  .items {
    width: 80%;
  }
  .item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  .quantity {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h5 {
      margin: 0;
    }
  }
  .images {
    display: flex;
    align-items: center;
  }
  img {
    height: 5rem;
    border-radius: var(--radius);
  }
  @media (max-width: 730px) {
    flex-direction: column;
    .order-info {
      justify-content: space-around;
      gap: 0;
    }
    .item {
      gap: 2rem;
    }
  }
  @media (max-width: 500px) {
    .order-info {
      flex-direction: column;
    }
  }
`;
export default SingleOrder;
