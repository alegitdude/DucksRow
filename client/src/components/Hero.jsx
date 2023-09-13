import { Link } from "react-router-dom";
import styled from "styled-components";
import heroimg from "/hero-rug.avif";
import heroimg2 from "../assets/crochet-duck.png";
import heroShirt from "/hero-shirt.avif";
const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <div className="header">
          <h1>Ducks Row</h1>
          <h2>Handmade Custom Crochet</h2>
        </div>
        <div className="sale-banner">
          <img src={heroShirt} alt="hero sweater" className="hero-shirt" />
          <span className="sale">
            <h1>20% Off Fall Sale!</h1>
          </span>
          <Link to="/products" className="btn hero-btn sale-btn">
            Explore
          </Link>
        </div>
        <div className="explore-container">
          <Link to="/products" className="btn hero-btn reg-btn">
            Explore
          </Link>
          <img src={heroimg2} alt="crochet shirt" className="accent-img" />
        </div>
      </article>
      <article className="img-container">
        <img src={heroimg} alt="crochet rug" className="main-img" />
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
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main-img {
    display: none;
  }
  .sale-banner {
    width: 100%;
    height: 30rem;
    position: relative;
    border-radius: var(--radius);
  }
  .sale {
    display: block;
    margin-bottom: 20rem;
    position: absolute;
    top: 45%;
    right: 50%;
    transform: translate(50%);
    color: white;
  }
  .hero-shirt {
    height: 30rem;
    width: 100%;
    border-radius: var(--radius);
  }
  .reg-btn {
    display: none;
  }
  .sale-btn {
    position: absolute;
    top: 75%;
    right: 50%;
    transform: translate(50%);
    font-size: 2.5rem;
  }
  .content {
    text-align: center;
    width: 100%;
    position: relative;
  }
  .accent-img {
    border-radius: var(--radius);
    display: none;
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
  .small-display {
    display: block;
  }
  .explore-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  @media (min-width: 992px) {
    .sale-banner {
      display: none;
    }
    .sale-btn {
      display: none;
    }
    .reg-btn {
      display: block;
    }
    .content {
      margin-top: 0rem;
      text-align: center;
    }
    display: grid;
    place-items: center;
    height: calc(100vh - 8rem);
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    padding: 0 2rem;
    .explore-container {
      display: flex;
      align-items: center;
    }
    .accent-img {
      width: 20rem;
      margin-bottom: 1.75rem;
      display: block;
      margin-top: 1rem;
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
