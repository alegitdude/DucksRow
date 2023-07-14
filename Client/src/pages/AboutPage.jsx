import styled from "styled-components";
import PageHero from "../components/PageHero";
import HeroLogo from "../assets/Logo-inspiration.jpg";
const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={HeroLogo} alt="crochet heart" />
        <article>
          <div className="title">
            <h2>Meet Mother Duck</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            dolore omnis dicta incidunt dolores iste unde porro cum aut
            similique at earum tenetur itaque, neque molestiae tempora veritatis
            voluptatibus quam magni. Error at velit quidem nisi molestias,
            asperiores soluta labore delectus deleniti. Sequi harum
            reprehenderit nemo est nam ab rerum.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  img {
    width: 80%;
    max-width: 32rem;
    display: block;
    border-radius: var(--radius);
    /* height: 500px; */
    object-fit: cover;
    border: 1rem dashed var(--primary-yellow);
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    img {
      width: 100%;
    }
  }
`;
export default AboutPage;
