import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchIcon from "../assets/SearchIcon";
import { formatPrice } from "../utils/helpers";

const Product = ({ image, name, price, id }) => {
  const url = "http://localhost:3000/api/v1";
  return (
    <Wrapper>
      <div className="container">
        <img src={url + image} alt={name} />
        <Link to={`/products/${id}`} className="link">
          <SearchIcon />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    border-radius: var(--radius);
  }
  img {
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 2rem;
      color: var(--primary-yellow);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    letter-spacing: var(--spacing);
  }
`;
export default Product;
