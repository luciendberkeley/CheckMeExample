const ws = new WebSocket('wss://ideal-computing-machine-4jg5pvrj9wjw27764-8080.app.github.dev/');

ws.onopen = (evnet) => {
  ws.send('something');
};

ws.onmessage = (event) => {
  console.log('received: %s', event.data);
};

document.addEventListener("keypress", (event) => {
  if(event.key == "enter") {
    let input_box = document.querySelector(".message_box");
    let value = input_box.value;

    input_box.value = 0;
    ws.send(value)
  }
})