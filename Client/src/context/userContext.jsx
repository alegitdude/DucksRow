import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import reducer from "../reducers/userReducer.js";
import {
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  LOGOUT_USER_BEGIN,
  LOGOUT_USER_SUCCESS,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from "../actions.js";
import { genericErrorAlert, genericSuccessAlert } from "../Alerts.js";

const initialState = {
  user: null,
};

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "http://localhost:3000/api/v1";
  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        currentUser,
        {
          withCredentials: true,
        }
      );
      const { user } = data;
      dispatch({ type: LOGIN_USER_SUCCESS, payload: { user } });
      genericSuccessAlert("Login Successful");
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
      genericErrorAlert("Invalid Credentials");
    }
  };

  const logoutUser = async () => {
    dispatch({ type: LOGOUT_USER_BEGIN });
    try {
      await axios(url + "/auth/logout");
      dispatch({ type: LOGOUT_USER_SUCCESS });
    } catch (error) {
      dispatch({ type: LOGOUT_USER_SUCCESS });
    }
  };

  const registerUser = async (newUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      await axios.post(url + "/auth/register", newUser);
      dispatch({ type: REGISTER_USER_SUCCESS });
      genericSuccessAlert("User Created!");
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
      genericErrorAlert(error.response.data.msg);
    }
  };
  const getCurrentUser = async () => {
    dispatch({ type: GET_CURRENT_USER_BEGIN });
    try {
      const { data } = await axios(url + "/users/showMe");
      const { user } = data;
      dispatch({ type: GET_CURRENT_USER_SUCCESS, payload: { user } });
    } catch (error) {
      if (error.response.status === 401) {
        logoutUser();
        return;
      }
      console.log(error.response.data.msg);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        ...state,
        loginUser,
        logoutUser,
        registerUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
