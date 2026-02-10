import { useEffect, useState } from "react"
import { io } from "socket.io-client"
import "./App.css"

// Use the current hostname but port 5000 for the backend
const socket = io(`http://${window.location.hostname}:5000`)

export default function App() {
  const [count, setCount] = useState(0)
  const [event, setEvent] = useState("Waiting for events...")

  useEffect(() => {
    socket.on("count", setCount)
    socket.on("event", (data) => {
      // Assuming data is a string or has a message property, adjust if needed
      setEvent(typeof data === 'string' ? data : JSON.stringify(data))
    })

    // Cleanup on unmount
    return () => {
      socket.off("count")
      socket.off("event")
    }
  }, [])

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset the counter?")) {
      socket.emit("reset")
    }
  }

  return (
    <div className="dashboard-container">
      <div className="card">
        <h1>Real-time Monitoring</h1>

        <div className="counter-container">
          <div className="counter-value">{count}</div>
          <span className="counter-label">Total People</span>
        </div>

        <button className="reset-button" onClick={handleReset}>
          Reset Counter
        </button>

        <div className="event-container">
          <span className="event-text">{event}</span>
        </div>
      </div>
    </div>
  )
}
