function throwError(message = "no error message", status = 500) {
  const error = new Error(message);
  error.status = status;
  throw error;
}
