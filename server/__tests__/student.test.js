import request from "supertest";
import mongoose from "mongoose";
import app from "../app.js";


import dotenv from "dotenv";

dotenv.config({ path: ".env.test" }); // ✅ make sure test env vars load

let server;

beforeAll(async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_TEST_URI, {});
  }
  server = app.listen(0);
});

// afterAll(async () => {
//   await mongoose.connection.dropDatabase();
//   await mongoose.connection.close();
//   await server.close();
// });

describe("Student API", () => {
  let server;
  let token;
  let testStudent;

  beforeAll(async () => {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_TEST_URI, {});
    }
    server = app.listen(0);

    // Unique email per run
    testStudent = {
      name: "Test User",
      email: `test_${Date.now()}@example.com`,
      password: "Password123",
      phone: "000-000-0000",
      gender: "Not Selected" || "other" || "Male" || "Female",
      role: "student" || "mentor",
    };
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase(); // cleanup
    await mongoose.connection.close();
    await server.close();
  });

  test("POST /api/student/signup → should register a student", async () => {
    const res = await request(app).post("/api/student/signup").send(testStudent);

    expect([200, 201, 409]).toContain(res.statusCode); // allow conflict for duplicates
    expect(res.body).toHaveProperty("success");
  });

  test("POST /api/student/login → should login and return token", async () => {
    const res = await request(app).post("/api/student/login").send({
      email: testStudent.email,
      password: testStudent.password,
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
    token = res.body.token;
  });

  test("GET /api/student/get-profile → should return profile when authenticated", async () => {
    const res = await request(app)
      .get("/api/student/get-profile")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("success", true);
    expect(res.body.studentData).toHaveProperty("email", testStudent.email);
    expect(res.body.studentData).toHaveProperty("name", testStudent.name);
    expect(res.body.studentData).toHaveProperty("phone", testStudent.phone);
    expect(res.body.studentData).toHaveProperty("gender", testStudent.gender);
    expect(res.body.studentData).toHaveProperty("role", testStudent.role);
  });

  test("POST /api/student/update-profile → should update profile", async () => {
    const res = await request(app)
      .post("/api/student/update-profile")
      .set("Authorization", `Bearer ${token}`)
      .field("name", "Updated User")
      .field("phone", "1234567890")
      .field("dob", "2000-01-01")
      .field("gender", "male");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Profile Updated");
  });

  
});
