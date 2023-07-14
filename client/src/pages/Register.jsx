import styled from "styled-components";

import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <Wrapper className="page-100">
      <RegisterForm className="section" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export default Register;
