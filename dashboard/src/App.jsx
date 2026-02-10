import { useEffect, useState } from "react"
import { io } from "socket.io-client"

const socket = io("http://localhost:5000")

export default function App() {
  const [count, setCount] = useState(0)
  const [event, setEvent] = useState("")

  useEffect(() => {
    socket.on("count", setCount)
    socket.on("event", setEvent)
  }, [])

  return (
    <div style={{ padding: 40 }}>
      <h1>People Counter</h1>
      <h2>Total: {count}</h2>
      <h3>{event}</h3>
    </div>
  )
}
