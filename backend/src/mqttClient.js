import mqtt from "mqtt"
import { handleCount } from "./counterLogic.js"

const client = mqtt.connect("mqtt://mqtt:1883")

client.on("connect", () => {
  console.log("MQTT connected")
  client.subscribe("people/counter")
})

client.on("message", (topic, message) => {
  const data = JSON.parse(message.toString())
  handleCount(data)
})
