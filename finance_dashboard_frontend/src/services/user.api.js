import request from "./api";
import { API_ENDPOINTS } from "../constants";

export const getUsersAPI = () => {
  return request(API_ENDPOINTS.USERS);
};

export const updateUserRoleAPI = (id, role) => {
  return request(`${API_ENDPOINTS.USERS}/${id}/role`, {
    method: "PATCH",
    body: JSON.stringify({ role })
  });
};

export const updateUserStatusAPI = (id, status) => {
  return request(`${API_ENDPOINTS.USERS}/${id}/status`, {
    method: "PATCH",
    body: JSON.stringify({ status })
  });
};