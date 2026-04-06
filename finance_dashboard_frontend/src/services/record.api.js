import request from "./api";
import { API_ENDPOINTS } from "../constants";

export const getRecordsAPI = (query = "") => {
  return request(`${API_ENDPOINTS.RECORDS}${query}`);
};

export const createRecordAPI = (payload) => {
  return request(API_ENDPOINTS.RECORDS, {
    method: "POST",
    body: JSON.stringify(payload)
  });
};

export const deleteRecordAPI = (id) => {
  return request(`${API_ENDPOINTS.RECORDS}/${id}`, {
    method: "DELETE"
  });
};