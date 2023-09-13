import styled from "styled-components";
import { Link } from "react-router-dom";
import { genericErrorAlert } from "../Alerts";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
const RegisterForm = () => {
  const navigation = useNavigate();
  const { registerUser } = useUserContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData);
    const { name, email, password } = newUser;
    if (!name || !email || !password) {
      genericErrorAlert("Please Provide All Values");
      return;
    }
    registerUser(newUser);
    navigation("/login");
    e.currentTarget.reset();
  };
  return (
    <Wrapper>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="Register-form-row">
          <label className="Register-form-label" id="name">
            Name
          </label>
          <input
            name="name"
            className="Register-input"
            type="name"
            id="name"
          ></input>
        </div>
        <div className="Register-form-row">
          <label className="Register-form-label" id="email">
            Email
          </label>
          <input
            name="email"
            className="Register-input"
            type="email"
            id="email"
          ></input>
        </div>
        <div className="Register-form-row">
          <label className="Register-form-label" id="password">
            Password
          </label>
          <input
            name="password"
            className="Register-input"
            type="password"
            id="password"
          ></input>
        </div>
        <button className="Register-submit btn" type="submit">
          Register
        </button>
      </form>
      <hr />
      <span className="forgot">
        Already have an account? Click&nbsp;
        <Link className="here" to="/login">
          HERE
        </Link>
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  height: 30rem;
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

  h2 {
    margin-top: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .Register-form-row {
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
  .Register-form-label {
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
`;
export default RegisterForm;
