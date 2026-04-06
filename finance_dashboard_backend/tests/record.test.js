import request from "supertest";
import app from "../src/app.js";

describe("Record API", () => {
  it("should create a record", async () => {
    const res = await request(app)
      .post("/api/records")
      .send({
        amount: 1000,
        type: "income",
        category: "salary"
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
  });

  it("should fetch records", async () => {
    const res = await request(app).get("/api/records");

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });
});