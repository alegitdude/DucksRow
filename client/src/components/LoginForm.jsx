import styled from "styled-components";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { genericErrorAlert } from "../Alerts";
import { useEffect } from "react";
const LoginForm = () => {
  const { user } = useUserContext();
  const navigation = useNavigate();
  const { loginUser } = useUserContext();
  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData);
    const { email, password } = newUser;
    if (!email || !password) {
      genericErrorAlert("Please Provide All Values");
      return;
    }
    loginUser(newUser);
    e.currentTarget.reset();
  };

  useEffect(() => {
    if (user) {
      navigation("/products");
    }
  }, [user]);
  return (
    <Wrapper>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="login-form-row">
          <label className="login-form-label" id="email">
            Email
          </label>
          <input
            name="email"
            className="login-input"
            type="email"
            id="email"
          ></input>
        </div>
        <div className="login-form-row">
          <label className="login-form-label" id="password">
            Password
          </label>
          <input
            name="password"
            className="login-input"
            type="password"
            id="password"
          ></input>
        </div>
        <button className="login-submit btn" type="submit">
          Login
        </button>
        <span className="forgot">
          Forgot your password? Click&nbsp;
          <Link className="here" to="/user/forgot-password">
            HERE
          </Link>
        </span>
        <hr />
        <span className="">
          New to Ducks Row? Register&nbsp;
          <Link className="here" to="/register">
            HERE
          </Link>
        </span>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(
    to bottom,
    rgba(255, 236, 153, 0.507),
    rgba(247, 209, 114, 0.507),
    rgba(241, 181, 77, 0.5),
    rgba(235, 151, 42, 0.5),
    rgba(230, 119, 0, 0.507)
  );
  border-radius: var(--radius);
  height: 27rem;
  h2 {
    margin-top: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .login-form-row {
    display: flex;
    flex-direction: column;
    width: 80%;
    padding: 0.5rem 1rem;
    justify-content: center;
    input {
      font-size: 1rem;
      border-radius: var(--radius);
      padding: 0.5rem 1rem;
    }
  }
  .login-form-label {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  button {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 1rem 0;
    width: 8rem;
  }
  hr {
    width: 80%;
    margin: 0.5rem 0;
  }
  .forgot {
    margin-top: 0.5rem;
  }
`;
export default LoginForm;
