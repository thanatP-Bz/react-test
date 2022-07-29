import CustomAPIError from "./custom-api.js";
import { StatusCodes } from "http-status-codes";

class UnAuthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.StatusCodes = StatusCodes.UNAUTHORIZED;
  }
}

export { UnAuthenticatedError };
