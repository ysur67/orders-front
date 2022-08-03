import axios from "axios";
import camelCaseKeys from "camelcase-keys";

const http = axios.create({
  baseURL: process.env.REACT_APP_API_ADDRESS,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.response.use(function (response) {
  return {
    ...response,
    data: camelCaseKeys(response.data, { deep: true }),
  };
});

export default http;
