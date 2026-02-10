import { Server } from "socket.io"

let io

export function initSocket(server) {
  io = new Server(server, {
    cors: { origin: "*" }
  })
  return io
}

export function sendUpdate(count) {
  if (io) io.emit("count", count)
}

export function sendEvent(message) {
  if (io) io.emit("event", message)
}
