import request from "supertest";
import app from "../src/app.js";

describe("User API", () => {
  it("should create a new user", async () => {
    const res = await request(app)
      .post("/api/users")
      .send({
        name: "Jyotishmoy",
        email: "jyotish@test.com",
        password: "123456",
        role: "admin"
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
  });

  it("should get all users", async () => {
    const res = await request(app).get("/api/users");

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });
});