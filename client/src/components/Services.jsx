import styled from "styled-components";
import BinocIcon from "../assets/BinocIcon";
import GlobeIcon from "../assets/GlobeIcon";
import HeartIcon from "../assets/HeartIcon";
const Services = () => {
  const services = [
    {
      id: 1,
      icon: <HeartIcon />,
      title: "Passion",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet aperiam laboriosam iusto, commodi voluptatum architecto quod numquam unde eaque temporibus mollitia autem, magni non exercitationem soluta sapiente inventore nulla assumenda.",
    },
    {
      id: 2,
      icon: <BinocIcon />,
      title: "Vision",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet aperiam laboriosam iusto, commodi voluptatum architecto quod numquam unde eaque temporibus mollitia autem, magni non exercitationem soluta sapiente inventore nulla assumenda.",
    },
    {
      id: 3,
      icon: <GlobeIcon />,
      title: "Giving",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet aperiam laboriosam iusto, commodi voluptatum architecto quod numquam unde eaque temporibus mollitia autem, magni non exercitationem soluta sapiente inventore nulla assumenda.",
    },
  ];
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            Custom Crochet <br />
            Stitched With Love
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio et
            placeat consectetur quae, numquam facere ipsam necessitatibus
            veritatis blanditiis expedita?
          </p>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} className="service">
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  h3,
  h4 {
    text-align: center;
    color: var(--background-black);
  }
  padding: 5rem 0;

  background: var(--primary-yellow-light);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--color-text-grey);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--primary-yellow-dark);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--primary-yellow-light);
    color: var(--color-text-grey);
    font-weight: 600;
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;
export default Services;
