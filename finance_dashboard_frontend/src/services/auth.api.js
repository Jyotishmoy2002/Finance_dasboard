import request from "./api";
import { API_ENDPOINTS } from "../constants";

export const loginAPI = (payload) => {
  return request(API_ENDPOINTS.LOGIN, {
    method: "POST",
    body: JSON.stringify(payload)
  });
};

export const registerAPI = (payload) => {
  return request(API_ENDPOINTS.REGISTER, {
    method: "POST",
    body: JSON.stringify(payload)
  });
};