import { sendUpdate, sendEvent } from "./socket.js"

let totalCount = 0

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
