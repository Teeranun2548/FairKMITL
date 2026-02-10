import { getCount } from "./counterLogic.js"
import { sendEvent } from "./socket.js"

setInterval(() => {
  const count = getCount()
  sendEvent(`⏰ 10-minute report: ${count} people`)
}, 10 * 60 * 1000)
