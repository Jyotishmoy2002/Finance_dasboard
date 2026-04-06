import { API_BASE_URL } from "../constants";
import { getToken } from "../utils";

const request = async (endpoint, options = {}) => {
  const token = getToken();

  const config = {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` })
    },
    ...options
  };

  const res = await fetch(`${API_BASE_URL}${endpoint}`, config);
  const data = await res.json();

  if (!data.success) {
    throw new Error(data.message);
  }

  return data.data;
};

export default request;