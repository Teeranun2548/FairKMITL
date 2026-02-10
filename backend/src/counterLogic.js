import { sendUpdate, sendEvent } from "./socket.js"

let totalCount = 0

export function resetCount() {
  totalCount = 0
  sendUpdate(totalCount)
  sendEvent("🔄 Counter has been reset")
}

export function setupCounterSocket(io) {
  io.on("connection", (socket) => {
    socket.on("reset", () => {
      resetCount()
    })
  })
}

export function handleCount(data) {
  if (data.direction === "forward") {
    totalCount++
    sendUpdate(totalCount)

    if (totalCount % 50 === 0) {
      sendEvent(`🎉 Congratulations! Visitor #${totalCount}`)
    }
  }
}

export function getCount() {
  return totalCount
}
