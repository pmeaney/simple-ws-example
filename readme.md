just a simple websocket example

running on expressjs

Currently, using the Chrome Extension [Smart WebSocket Client](https://chrome.google.com/webstore/detail/smart-websocket-client/omalebghpgejjiaoknljcfmglgbpocdp) to connect.  Need to fix that.

-> looks like it was solved w/ [this article's client code](https://hackernoon.com/nodejs-web-socket-example-tutorial-send-message-connect-express-set-up-easy-step-30347a2c5535)

```javascript
var ws = new WebSocket('ws://localhost:40510');
  // event emmited when connected
    ws.onopen = function () {
    console.log('websocket is connected ...')
        // sending a send event to websocket server
        ws.send('connected')
}
// event emmited when receiving message
    ws.onmessage = function (ev) {
    console.log(ev);
  }
```