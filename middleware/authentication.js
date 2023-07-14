import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
  UnauthorizedError,
} from "../errors/index.js";
import { isTokenValid } from "../utils/jwt.js";

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token;

  if (!token) {
    throw new UnAuthenticatedError("Authentication Invalid");
  }
  try {
    const { name, userId, email, role } = isTokenValid({ token });
    req.user = { name, userId, email, role };
    next();
  } catch (error) {
    console.log(error);
    throw new UnAuthenticatedError("Authentication Invalid");
  }
};

const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError("Unauthorized to access this route");
    }
    next();
  };
};

export { authenticateUser, authorizePermissions };
