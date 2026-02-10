import express from "express"
import http from "http"
import { initSocket } from "./socket.js"
import "./mqttClient.js"
import "./timerLogic.js"

const app = express()
const server = http.createServer(app)

initSocket(server)

app.get("/", (req, res) => {
  res.send("People Counter Backend is running 🚀");
});

app.get("/status", (req, res) => {
  res.json({ status: "People Counter Running" })
})

server.listen(5000, () => {
  console.log("Backend running on port 5000")
})
