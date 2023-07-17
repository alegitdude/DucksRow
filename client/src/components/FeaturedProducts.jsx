import { useProductsContext } from "../context/productsContext";
import styled from "styled-components";
import Loading from "./Loading";
import Error from "./Error";
import Product from "./Product";
const FeaturedProducts = () => {
  const {
    productsLoading: isLoading,
    productsError: error,
    featuredProducts,
  } = useProductsContext();
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Newest Creations</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featuredProducts?.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--primary-yellow-dark);
  .underline {
    background-color: var(--primary-orange);
  }
  .featured {
    margin: 4rem auto;
    display: grid;
    /* gap: 2.5rem; */
    img {
      height: 25rem;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;
export default FeaturedProducts;
