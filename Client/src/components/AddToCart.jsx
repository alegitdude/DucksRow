import styled from "styled-components";
import { Link } from "react-router-dom";
import CheckIcon from "../assets/CheckIcon";
import { useState } from "react";
import { nanoid } from "nanoid";
import AmountButtons from "./AmountButtons";
import { useCartContext } from "../context/cartContext";

const AddToCart = ({ product }) => {
  const { id, inventory, colors } = product;
  const { addToCart } = useCartContext();

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > inventory) {
        tempAmount = inventory;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <Wrapper>
      <div className="colors">
        <span>colors :</span>
        <div className="color-selection">
          {colors.map((color) => {
            return (
              <button
                key={nanoid()}
                style={{ background: color }}
                className={
                  mainColor === color ? "color-btn active" : "color-btn"
                }
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? <CheckIcon /> : null}
              </button>
            );
          })}
        </div>
        <div className="btn-container">
          <AmountButtons
            amount={amount}
            increase={increase}
            decrease={decrease}
          />
          <Link
            to="/cart"
            className="btn"
            onClick={() => addToCart(id, mainColor, amount, product)}
          >
            Add To Cart
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 600;
    }
  }

  .color-selection {
    display: flex;
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
    text-align: center;
  }
`;
export default AddToCart;
