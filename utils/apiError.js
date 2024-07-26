// we want to handle errors here

class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message); // now we will override the message
    this.statusCode = statusCode; // we will override the status code
    this.data = null;
    this.message = message; // we will override the message
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor); // constructor ka instance pass krdiya hai humne
    }
  }
}

export { ApiError };
