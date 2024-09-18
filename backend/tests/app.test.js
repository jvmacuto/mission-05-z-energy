const request = require("supertest");
const app = require("../index"); // Adjust the path to your app file
const mongoose = require("mongoose");

let server;

beforeAll((done) => {
  server = app.listen(done);
});

//test hello world
describe("GET /hello", () => {
  it("should return 200 OK and 'Hello World'", async () => {
    const res = await request(app).get("/api/hello");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Hello World");
  });
});

//test the controllers
describe("controller checking", () => {
    it("should return 200 OK and 'Gas stations fetched and stored in database'", async () => {
        const res = await request(app).get("/api/fetch-stations");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty(
        "message",
        "Gas stations fetched and stored in database"
        );
    });
    
    it("should return 200 OK and an array of gas stations", async () => {
        const res = await request(app).get("/api/get-stations");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});

afterAll(async () => {
  await mongoose.connection.close(); // Close the database connection
  server.close(); // Close the server
});
