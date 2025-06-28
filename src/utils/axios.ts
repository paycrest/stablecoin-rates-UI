import axios from "axios";

export const api = axios.create({
  baseURL: `https://api.rates.noblocks.xyz`,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      error.response.status === 401
      // ||
      // error.response.status === 400
    ) {
      console.log("Unauthorized request...");
    }

    return Promise.reject(error);
  }
);
