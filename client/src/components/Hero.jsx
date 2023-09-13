import { Link } from "react-router-dom";
import styled from "styled-components";
import heroimg from "/hero-rug.avif";
import heroimg2 from "../assets/Logo-inspiration.jpg";
const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>Ducks Row</h1>
        <h2>Handmade Custom Crochet</h2>
        <Link to="/products" className="btn hero-btn">
          Explore
        </Link>
      </article>
      <article className="img-container">
        <img src={heroimg} alt="crochet rug" className="main-img" />
        <img src={heroimg2} alt="crochet shirt" className="accent-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
  .main-img {
    display: none;
  }
  .content {
    margin-top: 5rem;
    text-align: center;
  }
  .accent-img {
    border-radius: var(--radius);
  }
  img {
    width: 20rem;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--color-text-grey);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    .content {
      margin-top: 0rem;
      text-align: start;
    }
    display: grid;
    place-items: center;
    height: calc(100vh - 8rem);
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    padding: 0 2rem;
    .accent-img {
      display: none;
    }
    h1 {
      margin-bottom: 2rem;
    }
    h2 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 2rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      /* height: 550px; */
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
  }
  @media (max-width: 455px) {
    text-align: center;
  }
`;

export default Hero;
