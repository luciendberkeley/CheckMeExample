const ws = new WebSocket('ws://localhost:8080/');

ws.onopen = (evnet) => {
  ws.send('something');
};

ws.onmessage = (event) => {
  console.log('received: %s', data);
};