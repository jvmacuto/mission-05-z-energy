const request = require("supertest");
const app = require("../backend/server"); // Adjust the path if needed

let server;
let stationId; // To store the created station's ID

beforeAll(() => {
  server = app.listen(5000); // Start the server for testing
});

afterAll((done) => {
  server.close(done); // Close the server when tests finish
});

describe("API Tests", () => {
  it("should return a 404 status code for the root path", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(404);
  });

  it("should return a 200 status code for /api/stations", async () => {
    const res = await request(app).get("/api/stations");
    expect(res.statusCode).toEqual(200);
  });

  it("should return JSON data for /api/stations", async () => {
    const res = await request(app).get("/api/stations");
    expect(res.headers["content-type"]).toMatch(/json/);
  });

  it("should return a 404 for a non-existent station", async () => {
    const res = await request(app).get("/api/stations/invalidId");
    expect(res.statusCode).toEqual(404);
  });

  it("should handle POST requests to create a new station", async () => {
    const newStation = {
      name: "New Station",
      address: "123 New Street",
      fuelPrices: { premium: 3.0, unleaded: 2.7, diesel: 2.5 },
      services: ["Car Wash"],
      hours: [{ day: "Monday", hours: "Open 24 hours" }],
      location: { lat: -37.8136, lng: 144.9631 },
    };
    const res = await request(app).post("/api/stations").send(newStation);
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toEqual("New Station");

    // Store the station ID for later use in update/delete tests
    stationId = res.body._id;
  });

  it("should return a 400 for an invalid POST request", async () => {
    const invalidStation = { address: "Missing name" };
    const res = await request(app).post("/api/stations").send(invalidStation);
    expect(res.statusCode).toEqual(400);
  });

  it("should update an existing station with PUT request", async () => {
    const updatedStation = { name: "Updated Station" };
    const res = await request(app)
      .put(`/api/stations/${stationId}`) // Use the stored station ID
      .send(updatedStation);
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual("Updated Station");
  });

  it("should return a 404 for updating a non-existent station", async () => {
    const updatedStation = { name: "Doesn't exist" };
    const res = await request(app)
      .put("/api/stations/invalidId")
      .send(updatedStation);
    expect(res.statusCode).toEqual(404);
  });

  it("should delete an existing station with DELETE request", async () => {
    const res = await request(app).delete(`/api/stations/${stationId}`); // Use the stored station ID
    expect(res.statusCode).toEqual(204);
  });

  it("should return a 404 for deleting a non-existent station", async () => {
    const res = await request(app).delete("/api/stations/invalidId");
    expect(res.statusCode).toEqual(404);
  });
});
