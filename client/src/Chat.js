import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./Chat.css";

const socket = io.connect("http://localhost:5000");

function Chat() {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

 const sendMessage = () => {
  if (message.trim() !== "") {
    socket.emit("send_message", {
      message,
      time: new Date().toLocaleTimeString(),
    });
    setMessage("");
  }
};
 useEffect(() => {
  socket.on("receive_message", (data) => {
    setMessageList((prev) => [...prev, data]);
  });

  // optional cleanup
  return () => {
    socket.off("receive_message");
  };
}, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>💬 Real-Time Chat</h2>
      <div style={{ height: "300px", overflowY: "scroll", border: "1px solid #ccc", padding: 10 }}>
        {messageList.map((msg, index) => (
          <div key={index}><b>{msg.time}</b>: {msg.message}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        placeholder="Type your message"
        onChange={(e) => setMessage(e.target.value)}
        style={{ marginTop: 10, width: "80%" }}
      />
      <button onClick={sendMessage} style={{ marginLeft: 10 }}>Send</button>
    </div>
  );
}

export default Chat;
