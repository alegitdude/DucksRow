import styled from "styled-components";

const ProductImages = ({ image }) => {
  const url = "https://ducks-row.onrender.com/";
  return (
    <Wrapper>
      <img src={url + image} alt="Product Image" className="main" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 550px;
  }
  img {
    width: 100%;
    max-width: 51.5rem;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
`;
export default ProductImages;
