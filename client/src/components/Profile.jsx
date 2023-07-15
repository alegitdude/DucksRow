import { useState } from "react";
import { genericErrorAlert, genericSuccessAlert } from "../Alerts";
import { useUserContext } from "../context/userContext";
import axios from "axios";
import styled from "styled-components";
import TimesIcon from "../assets/TimesIcon";
const Profile = () => {
  const { user } = useUserContext();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newPassObj = Object.fromEntries(formData);
    console.log(newPassObj);
    const { oldPassword, newPassword, confirmNewPassword } = newPassObj;
    if (!oldPassword || !newPassword || !confirmNewPassword) {
      genericErrorAlert("Please Provide All Values");
    }
    if (newPassword !== confirmNewPassword) {
      genericErrorAlert("Confirm New Password must match New Password");
      return;
    }
    try {
      const { data } = await axios.patch(
        "https://ducks-row.onrender.com/api/v1/users/updateUserPassword",
        { oldPassword, newPassword }
      );
      console.log(e);
      genericSuccessAlert(data.msg);
      e.target.reset();
      setIsFlipped(false);
    } catch (error) {
      genericErrorAlert(error.response.data.msg);
    }
    // const { email, password } = newPassObj;
    // if (!email || !password) {
    //   genericErrorAlert("Please Provide All Values");
    //   return;
    // }

    // e.currentTarget.reset();
  };
  return (
    <Wrapper>
      <div className={isFlipped ? "flip profile" : "profile"}>
        <h2>Profile</h2>
        <div className="underline"></div>
        <p>
          <span className="title">Name: </span>
          {user.name}
        </p>
        <p>
          <span className="title">Email: </span>
          {user.email}
        </p>
        <button onClick={() => setIsFlipped(true)} className="btn">
          Update Password
        </button>
      </div>
      <div className={isFlipped ? "update-panel show-panel" : "update-panel"}>
        <button className="times" onClick={() => setIsFlipped(false)}>
          <TimesIcon />
        </button>
        <h3>Update Password</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="form-label">Old Password</label>
            <input
              name="oldPassword"
              type="password"
              id="oldPassword"
              className="form-input"
            ></input>
          </div>
          <div className="form-row">
            <label className="form-label">New Password</label>
            <input
              name="newPassword"
              type="password"
              id="newPassword"
              className="form-input"
            ></input>
          </div>
          <div className="form-row">
            <label className="form-label">Confirm New Password</label>
            <input
              name="confirmNewPassword"
              type="password"
              id="confirmNewPassword"
              className="form-input"
            ></input>
          </div>
          <button type="submit" className="sub-button btn">
            Submit
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 27rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
  .profile {
    transition: var(--transition);
    width: 25rem;
    height: 100%;
  }
  h2 {
    margin: 1rem 0;
  }
  .title {
    font-size: 1.5rem;
  }

  .update-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25rem;

    position: absolute;
    top: 0%;
    right: 0%;
    transform: rotateY(180deg);
    visibility: hidden;
    opacity: 0;
    z-index: -1;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(
      to bottom,
      rgba(255, 236, 153, 0.507),
      rgba(247, 209, 114, 0.507),
      rgba(241, 181, 77, 0.5),
      rgba(235, 151, 42, 0.5),
      rgba(230, 119, 0, 0.507)
    );
    transition: var(--transition);
    border-radius: var(--radius);
    height: 27rem;
    h3 {
      margin-top: 1rem;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      transition: var(--transition);
    }
    .form-row {
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
    .form-label {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    .sub-button {
      font-size: 1.2rem;
      font-weight: 600;
      margin: 1rem 0;
      width: 8rem;
    }
  }
  .times {
    position: absolute;
    right: 2%;
    top: 2%;
    background: none;
    border: none;
    cursor: pointer;

    svg {
      font-size: 2.5rem;
      &hover {
        fill: var(--primary-yellow);
      }
    }
  }
  .flip {
    border: 1px solid black;
    transform: rotateY(180deg);
    visibility: hidden;
    opacity: 0;
    z-index: -1;
  }
  .show-panel {
    visibility: visible;
    opacity: 1;
    z-index: 13;
    transform: rotateY(0deg);
  }
  @media (max-width: 800px) {
    .update-panel {
      right: -59%;
    }
  }
  @media (max-width: 410px) {
    .update-panel {
      width: 20rem;
      right: -38%;
    }
  }
`;
export default Profile;
