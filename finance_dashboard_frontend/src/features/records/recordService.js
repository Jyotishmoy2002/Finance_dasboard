import { API_BASE_URL, API_ENDPOINTS } from "../../constants";
import { getToken } from "../../utils";

export const recordService = {
  async getRecords(filters = "") {
    const res = await fetch(
      `${API_BASE_URL}${API_ENDPOINTS.RECORDS}${filters}`,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      }
    );

    const data = await res.json();
    return data.data;
  },

  async createRecord(payload) {
    const res = await fetch(
      `${API_BASE_URL}${API_ENDPOINTS.RECORDS}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`
        },
        body: JSON.stringify(payload)
      }
    );

    const data = await res.json();
    return data.data;
  },

  async deleteRecord(id) {
    await fetch(
      `${API_BASE_URL}${API_ENDPOINTS.RECORDS}/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      }
    );
  }
};