import styled from "styled-components";
import StarEmpty from "../assets/StarEmpty";
import StarFull from "../assets/StarFull";
import StarHalf from "../assets/StarHalf";

const Stars = ({ stars, reviews }) => {
  const showStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars > number ? (
          <StarFull />
        ) : stars > index ? (
          <StarHalf />
        ) : (
          <StarEmpty />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <div className="stars">{showStars}</div>
      <p className="reviews">({reviews} customer reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
