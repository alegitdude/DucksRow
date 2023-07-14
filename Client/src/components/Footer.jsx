import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Ducks Row LLC </span>
      </h5>
      <h5>&nbsp; All rights reserved</h5>
    </Container>
  );
};

const Container = styled.footer`
  height: 5rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--background-black);
  text-align: center;
  span {
    color: var(--primary-yellow);
  }
  h5 {
    color: var(--color-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;
export default Footer;
