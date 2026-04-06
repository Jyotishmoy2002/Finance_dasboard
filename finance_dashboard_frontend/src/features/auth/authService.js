import { API_BASE_URL, API_ENDPOINTS } from "../../constants";

export const authService = {
  async login(email, password) {
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.LOGIN}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.message);
    }

    return data.data; // { user, token }
  },

  async register(payload) {
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.REGISTER}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.message);
    }

    return data.data;
  }
};