import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://558f9ebbb4bc4b6b.mokky.dev",
  timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});
