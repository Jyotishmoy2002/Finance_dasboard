import { API_BASE_URL, API_ENDPOINTS } from "../../constants";
import { getToken } from "../../utils";

export const dashboardService = {
  async getSummary() {
    const res = await fetch(
      `${API_BASE_URL}${API_ENDPOINTS.DASHBOARD_SUMMARY}`,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      }
    );

    const data = await res.json();
    return data.data;
  },

  async getTrends() {
    const res = await fetch(
      `${API_BASE_URL}${API_ENDPOINTS.DASHBOARD_TRENDS}`,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      }
    );

    const data = await res.json();
    return data.data;
  }
};