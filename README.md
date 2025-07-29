-REAL-TIME-CHAT-APPLICATION

*COMPANY* : CODTECH IT SOLUTIONS

*NAME* : JANVI TOMAR

*INTERN ID* : CT04DG2359

*DOMAIN* : FRONT END DEVELOPMENT

*DURATION* : 4 WEEKS

*MENTOR* : NEELA SANTOSH

This project is the second task of my internship, aimed at building a real-time chat application using a full-stack development approach. The application is developed using React.js for the frontend and Node.js with Express and Socket.IO for the backend. The primary objective of this task was to understand and implement real-time communication using WebSockets in a scalable and interactive web application.

The real-time chat application allows multiple users to send and receive messages instantly through a live socket connection. When a user sends a message, it is immediately broadcasted to all connected clients, making the chat experience seamless and dynamic. This mimics the core behavior of modern messaging platforms like WhatsApp Web, Slack, or Discord.

🎯 Objective
The core aim of this task was to learn how real-time systems work and how WebSocket technology enables instant two-way communication between clients and a server. Additionally, I gained practical experience in structuring a full-stack project with separated concerns: the client-side (frontend) for user interaction and the server-side (backend) for handling real-time communication and broadcasting logic.

🔧 Technologies Used

🔵 Frontend (React.js)

React.js: A JavaScript library used to build the user interface, ensuring efficient and dynamic rendering of components.

Socket.IO-client: A library to connect the React frontend with the backend via WebSocket protocol.

CSS: Used for styling the chat UI and making it responsive on different screen sizes.

JSX: For defining the structure of components in a readable and maintainable way.

🔴 Backend (Node.js + Express + Socket.IO)

Node.js: The JavaScript runtime environment used to build the backend server.

Express.js: A lightweight framework that simplifies routing and HTTP request handling.

Socket.IO: A library that enables real-time bidirectional communication between the server and clients using WebSockets.

CORS: Used to enable cross-origin requests between the frontend and backend.

📁 Project Structure

chat-app/
├── client/       # Frontend (React)
│   ├── src/
│   │   ├── App.js
│   │   ├── Chat.js
│   │   └── index.js
│   └── package.json
│
├── server/           # Backend (Node.js + Socket.IO)
│   ├── index.js
│   └── package.json

💡 How It Works

When the application is launched, the React client connects to the backend server using Socket.IO. Upon establishing the connection, users can begin sending messages. Each message is emitted to the server via a socket event. The server receives the message and then broadcasts it to all other clients connected to the socket. This ensures that every user sees the message in real-time without reloading the page.

Messages are displayed inside a styled chat window. I maintained the messages using React state hooks and dynamically rendered them as they arrived. The application updates the UI in real-time, providing an interactive experience for users across multiple tabs or devices.

⚙️ How to Run the Project

Clone the Repository

bash

Copy

Edit

git clone https://github.com/your-username/real-time-chat-app.git

cd chat-app

Start the Backend

bash

Copy

Edit

cd server

npm install

node index.js

Start the Frontend

bash

Copy

Edit

cd ../client

npm install

npm start

Test the Chat

Open http://localhost:3000 in two separate tabs or devices. Try sending a message from one tab, and it will instantly appear in the other — demonstrating the real-time communication.

✨ Features Implemented

Real-time messaging using WebSockets

Live broadcast to all connected clients

Responsive chat UI with clean styling

Input field for message entry

Dynamic rendering of messages

Tab-to-tab communication testability

📚 Learning Outcomes

This task significantly improved my understanding of full-stack development, particularly how frontend and backend services work together in real-time systems. I learned how to:

Integrate React.js with Socket.IO

Create and maintain a WebSocket server with Express and Node.js

Use React hooks like useState and useEffect to manage dynamic state

Handle broadcasting and message flow efficiently

Ensure component-based design and folder separation in full-stack applications

Moreover, this project taught me to think about user interaction, performance, and scalability — all crucial for real-world web applications.

##OUTPUT : 

<img width="1876" height="888" alt="Image" src="https://github.com/user-attachments/assets/52c0e157-4899-4cd0-ada7-27551998ecdb" />

<img width="1908" height="890" alt="Image" src="https://github.com/user-attachments/assets/8e377632-8bb6-4c5b-9a31-2cd2c4429ffe" />



