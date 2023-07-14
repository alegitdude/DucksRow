import styled from "styled-components";

import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <Wrapper className="page-100">
      <LoginForm className="section" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export default Login;
