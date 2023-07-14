import styled from "styled-components";
// import UserIconMinus from "../assets/UserIconMinus";
import UserIconPlus from "../assets/UserIconPlus";
import UserIconMinus from "../assets/UserIconMinus";
import CartIcon from "../assets/CartIcon";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/productsContext";
import { useCartContext } from "../context/cartContext";
import { useUserContext } from "../context/userContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CartButtons = () => {
  const { user, logoutUser } = useUserContext();
  const { closeSidebar } = useProductsContext();
  const { totalItems, clearCart } = useCartContext();
  const [isDropdown, setIsDropdown] = useState(false);
  const navigation = useNavigate();
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        Cart
        <span className="cart-container">
          <CartIcon />
          <span className="cart-value">{totalItems}</span>
        </span>
      </Link>
      {user ? (
        <div className="relative" onMouseLeave={() => setIsDropdown(false)}>
          <button
            className="auth-btn"
            onClick={() => setIsDropdown(!isDropdown)}
          >
            {user.name} <UserIconPlus />
          </button>
          <div className={isDropdown ? "dropdown show-dropdown" : "dropdown"}>
            <li>
              <Link onClick={closeSidebar} to="/account">
                Account
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  logoutUser();
                  clearCart();
                  setIsDropdown(false);
                  navigation("/");
                  closeSidebar();
                }}
                className="logout"
              >
                Logout
              </button>
            </li>
          </div>
        </div>
      ) : (
        <Link className="auth-btn" to="/login" onClick={closeSidebar}>
          Login <UserIconMinus />
        </Link>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 15rem;

  .cart-btn {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: var(--spacing);
    color: var(--primary-text);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    position: relative;
    align-items: center;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--primary-yellow);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1rem;
    font-weight: 600;

    padding: 12px;
  }
  a {
    color: var(--primary-text);
    font-weight: 600;
    &:hover {
      text-decoration: underline;
      text-underline-offset: 15px;
      text-decoration-color: var(--primary-orange);
      text-decoration-thickness: 2px;
    }
  }
  .auth-btn {
    font-family: "Klee One";
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.5rem;
    text-transform: capitalize;
    cursor: pointer;
    color: var(--primary-text);
    letter-spacing: var(--spacing);
    padding: 0.5rem 0;
    background: none;
    border: none;
    position: relative;
    &:hover {
      text-decoration: underline;
      text-underline-offset: 15px;
      text-decoration-color: var(--primary-orange);
      text-decoration-thickness: 2px;
    }

    svg {
      margin-left: 5px;
    }
  }
  .relative {
    position: relative;
  }
  .dropdown {
    position: absolute;
    list-style-type: none;
    font-size: 1.3rem;
    right: -37%;
    background-color: var(--primary-yellow-light);
    width: 8rem;
    text-align: center;
    padding: 1rem 1rem;
    border-radius: var(--radius);

    transform: rotateX(-90deg) translateX(-50%);
    transform-origin: top;
    perspective: 1000px;
    visibility: hidden;
    opacity: 0;

    transition: all 0.3s ease-in-out;
    z-index: -1;
    a {
      &:hover {
        text-decoration: underline;
        text-underline-offset: 6px;
        text-decoration-color: var(--primary-orange);
        text-decoration-thickness: 2px;
      }
    }
  }
  .show-dropdown {
    visibility: visible;
    opacity: 1;
    transform: rotateX(0deg) translateX(-50%);
    z-index: 10;
  }
  .logout {
    font-family: "Klee One";
    font-weight: 600;
    font-size: 1.3rem;
    background: none;
    border: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      text-underline-offset: 6px;
      text-decoration-color: var(--primary-orange);
      text-decoration-thickness: 2px;
    }
  }
`;
export default CartButtons;
