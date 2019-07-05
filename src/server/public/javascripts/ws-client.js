// Attempt 5 ----------
/* 
This accomplishes the same thing as version 4.  Not sure if it matters. */
var ws = new WebSocket('ws://localhost:40510');
// event emmited when connected
ws.onopen = function () {
  console.log('websocket is connected ...')
  // sending a send event to websocket server
  ws.send('connected')
}

function processForm(e) {
  console.log('running processForm')
  if (e.preventDefault) e.preventDefault()

  var formInput = document.getElementsByName("formInput")[0].value
  console.log('formInput', formInput)
  ws.send(formInput)

  // You must return false to prevent the default form behavior
  return false
}

var form = document.getElementById('my-form')
if (form.attachEvent) {
  console.log('running form.attachEvent("submit", processForm)')
  form.attachEvent("submit", processForm)
} else {
  console.log('running form.addEventListener("submit", processForm)')
  form.addEventListener("submit", processForm)
}

// Attempt 4 ----------
/* Previously was having a problem w/ establishing connection.
This code seems to work. 
Note: Do not use the on-doc load wrapper function.   ---> (function () { })  */
// Source: https://hackernoon.com/nodejs-web-socket-example-tutorial-send-message-connect-express-set-up-easy-step-30347a2c5535
// var ws = new WebSocket('ws://localhost:40510');
//   // event emmited when connected
//     ws.onopen = function () {
//     console.log('websocket is connected ...')
//         // sending a send event to websocket server
//         ws.send('connected')
// }
// // event emmited when receiving message
//     ws.onmessage = function (ev) {
//     console.log(ev);
//   }
