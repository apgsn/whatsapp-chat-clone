// based off of Flavio Copes' chat tutorial:
// https://github.com/flaviocopes/chat-app-react-redux-saga-websockets
// to launch the app: npm run run-app

const WebSocket = require("ws");
const Chance = require("chance");

const wss = new WebSocket.Server({ port: 8989 });

let users = [];

const broadcast = (data, ws) => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data));
    }
  });
};

wss.on("connection", ws => {
  let userId = new Chance().integer();
  ws.on("message", message => {
    const data = JSON.parse(message);
    switch (data.type) {
      case "ADD_USER": {
        users.push({ name: data.name, id: userId });
        ws.send(
          JSON.stringify({
            type: "USERS_LIST",
            users
          })
        );
        broadcast(
          {
            type: "USERS_LIST",
            users
          },
          ws
        );
        break;
      }
      case "ADD_MESSAGE": {
        broadcast(
          { type: "ADD_MESSAGE", message: data.message, author: data.author },
          ws
        );
        break;
      }
      default:
        break;
    }
  });
  ws.on("close", () => {
    users = users.filter(u => u.id !== userId);
    broadcast(
      {
        type: "USERS_LIST",
        users
      },
      ws
    );
  });
});

console.log("Server running...");
