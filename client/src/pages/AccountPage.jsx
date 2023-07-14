import styled from "styled-components";
import PageHero from "../components/PageHero";
import { Orders, Profile } from "../components";

const AccountPage = () => {
  return (
    <main>
      <PageHero title={"Account"} />
      <Wrapper className=" section section-center">
        <Profile />
        <Orders />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
export default AccountPage;
