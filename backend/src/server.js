import express from "express";
import http from "http";
import { Server } from "socket.io";
import mqttClient from "./mqttClient.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

app.get("/", (req, res) => {
  res.send("People Counter Backend is running 🚀");
});

io.on("connection", (socket) => {
  console.log("Dashboard connected");
});

server.listen(5000, () => {
  console.log("Backend running on port 5000");
});
