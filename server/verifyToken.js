import jwt from "jsonwebtoken";
// import { handleError } from "./error.js";
import { handleError } from "./error.js"; // Assuming you have a createError function defined in your error.js file

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log(token);

  if (!token) {
    return next(handleError(401, "You are not authenticated"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      return next(handleError(403, "Token is invalid"));
    }
    req.user = user; // Attach decoded user information to the request
    next();
  });
};
