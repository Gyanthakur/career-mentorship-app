// app.js
import express from "express";
import cors from "cors";
import studentRouter from "./routes/studentRoutes.js";
import chatRouter from "./routes/chatRoutes.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// API endpoints
app.use("/api/student", studentRouter);
app.use("/api/chat", chatRouter);

// Default Route
app.get("/", (req, res) => {
  res.send("Career Mentorship Platform App working fine....");
});

export default app;
