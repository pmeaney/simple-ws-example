

// Attempt 4 ----------
// (function () { /* code here */

/* Previously was having a problem w/ establishing connection.
This code seems to work. */
// Source: https://hackernoon.com/nodejs-web-socket-example-tutorial-send-message-connect-express-set-up-easy-step-30347a2c5535
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

// })


// Attempt 3 ----------
// (function () { /* code here */

//   var ws = new WebSocket('wss://localhost:40510/')

//   // ws.on('open', function open() {
//   ws.onopen = () => {

//     console.log('websocket is connected ...')
//     // sending a send event to websocket server
//     ws.send('connected')

//     function processForm(e) {
//       if (e.preventDefault) e.preventDefault()

//       var formInput = document.getElementsByName("formInput")
//       console.log('formInput', formInput)
//       /* do what you want with the form */
//       ws.send('message', formInput)


//       // You must return false to prevent the default form behavior
//       return false
//     }

//     var form = document.getElementById('my-form')
//     if (form.attachEvent) {
//       form.attachEvent("submit", processForm)
//     } else {
//       form.addEventListener("submit", processForm)
//     }

//     ws.onmessage(function (event) {
//       console.log('msg received at client from server-- ', event)
//     })

//   }

//   // ws.on('message', function incoming(data) {
//   //   console.log('msg received at client from server-- ', data)
//   // })

// })

// // Attempt 2 ----------

// (function () { /* code here */ 

//   var ws = new WebSocket('ws://localhost:40510/')

//   ws.on('open', function open() {
    
//     function processForm(e) {
//       if (e.preventDefault) e.preventDefault()

//       var formInput = document.getElementsByName("formInput")
//       console.log('formInput', formInput)
//       /* do what you want with the form */
//       ws.send('message', formInput)
    

//       // You must return false to prevent the default form behavior
//       return false
//     }

//     var form = document.getElementById('my-form')
//     if (form.attachEvent) {
//       form.attachEvent("submit", processForm)
//     } else {
//       form.addEventListener("submit", processForm)
//     }

//     ws.onmessage(function (event) {
//       console.log('msg received at client from server-- ', event)
//     })

//   })

//   // ws.on('message', function incoming(data) {
//   //   console.log('msg received at client from server-- ', data)
//   // })

// })


  // const thread = document.getElementById('chat-thread-1')

  // conn.onclose = function (event) {
  //   console.log('Connection closed')
  // }

  // conn.onmessage = function (event) {
  //   console.log('Message received.')
  //   const message = document.createElement('p')
  //   message.textContent = event.data
  //   thread.append(message)
  // }

  // function sendMessage() {
  //   const input = document.getElementById('chat-thread-1-input')

  //   const message = {
  //     type: 'message',
  //     text: input.value,
  //     date: Date.now(),
  //   }

  //   conn.send(JSON.stringify(message))
  //   input.value = ''
  // }
// })

// (function () { /* code here */ 
//   var ws = new WebSocket('ws://localhost:40510/')

//   // event emmited when connected
//   ws.onopen = function () {
//   console.log('websocket is connected ...')
//   // sending a send event to websocket server
//   ws.send('connected')
//   }
//   // event emmited when receiving message 
//   ws.onmessage = function (event) {
//   console.log(event)
//   }
// })



// Attempt 1-----------

// var ws = new WebSocket("ws://localhost:3000")

// ws.onopen = function() {
//  setTitle("Connected to Cyber Chat")
// }

// ws.onclose = function() {
//  setTitle("DISCONNECTED")
// }

// ws.onmessage = function (payload) {
//  printMessage(payload.data)
// }


// document.forms[0].onsubmit = function () {
//  var input = document.getElementById("message")
//  input.value = ''
// }

// function setTitle(title) {
//  document.querySelector('h1').innerHTML = title
// }

// function printMessage(message) {
//  var p = document.createElement('p')
//  p.innterText = message
//  document.querySelector('div.messages').appendChild(p)
// }
