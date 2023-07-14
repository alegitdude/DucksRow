import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>
          {product && <Link to="/products">/ Products</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--primary-yellow);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--primary-text);
  a {
    color: var(--primary-orange-darkest);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--color-text-grey);
  }
`;
export default PageHero;
