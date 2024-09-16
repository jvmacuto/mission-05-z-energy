const request = require("supertest");
const app = require("../index"); // Adjust the path to your app file

describe("GET /api/endpoint", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/api/endpoint");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("data");
  });
});
