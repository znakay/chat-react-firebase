import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer(
  {
    port: 5000,
  },
  () => console.log(`Server started on port 5000`)
);

const clients = new Set();

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const inputMessage = JSON.parse(message);

    switch (inputMessage.event) {
      case 'connection':
        const client = {
          socket: ws,
          id: inputMessage.id,
          username: inputMessage.username,
        };
        
        clients.add(client);   
        broadcast(inputMessage);
        break;
      case 'message':
        broadcast(inputMessage);
        break;
      default:
        break;
    }
  });

  ws.on('close', () => {
    disconnect();
  });
});

function broadcast(message) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  });
}

function disconnect() {
  clients.forEach((client) => {
    if (client.socket.readyState !== WebSocket.OPEN) {
      const message = {
        event: 'close',
        id: client.id,
        username: client.username
      }

      broadcast(message);
      clients.delete(client);
    }
  });
}



