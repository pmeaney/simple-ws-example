var express = require('express')
var router = express.Router()
var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({ port: 40510 })


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' })
// })
router.get('/', function(req, res, next) {
  res.render('pages/ws')
})

//  ########## Websocket stuff ##############
//Create an event
// var event = require('events').EventEmitter()
const EventEmitter = require('events')
class InitializedEventEmitterClass extends EventEmitter { }
const emitter = new InitializedEventEmitterClass()

// ------------ Set 2 \\ \\ \\ \\ \\
// Here, we are going to push data to the web socket, from an event emitter.
// The purpose of this method is that is to show that we can take data from the client
// then manipulate it, and when finished, emit an event.  This event might return the data
// or perhaps pass it on to another client or another process for a further step.

// -- Passing arguments to the emit function
router.get('/fire', function (req, res) {
  var someObj = { hi: 'hello', bye: 'goodbye'}
  emitter.emit('test', 'this is a string', someObj)
  res.send('Hello World')
})

router.post('/sendmsg', function (req, res) {
  // A couple console log messages for testing the form connection
  // console.log('post received at sendmsg')
  // console.log('req.body.formInput:', req.body.formInput)
  // the "chat message" is located on the request object's body's formInput property (which we named in html-- <input name="inputName" ...etc.>)
  var msg = req.body.formInput
  // Here we pass an object to the event emitter.  I threw in a name just for fun.
  var chatObj = { name: 'Captain Bob', message: msg}
  emitter.emit('chatMessage', chatObj)
  // res.send('Hello World')
})

wss.on('connection', function (ws) {
  // here, we define what happens within a channel called "message", when an event is triggered and the associated object is received.
  // in this case, we're just console logging the object, which we expect to be a string representing a chat message
  ws.send('someMsg', 'hi you connected');

  ws.on('message', function (message) {
    console.log('Websocket message received:', message)
    
  })

  // listen to the event-- in the emitter channel "chatMessage".  
  // Then, we transfer the data (obj.message) to websocket channel by emitting
  // an event in the websocket channel named "message"
  emitter.on('chatMessage', function (obj) {
    // console.log('obj from emitter \'chatMessage\'', obj)
    ws.emit('message', obj.message)
  })
})


// ------------ Set 1 \\ \\ \\ \\ \\
// In this first step, we are going to test the web socket connection.
// We will test two things:
// 1. A websocket connection using: Chrome Extension "Smart Websocket Client" 
//    to listen send and receive websocket messages within the extension as a initial testing ground
// 2. Using event emitters to fire web socket events with the app
// 
// (Note: If you load the localhost:3000/fire url into your browser before you connect
// to the websocket stream via Smart Websocket Client, you will not get any terminal output.
// There needs to be a connection first.  So, click 'connect' within Smart Websocket Client, 
// and you'll then be able to access the websocket "channel")

// const EventEmitter = require('events')
// class InitializedEventEmitterClass extends EventEmitter { }
// const emitter = new InitializedEventEmitterClass()

// router.get('/fire', function (req, res) {
  // emitter.emit('test')

  
//   res.send('Hello World')
// })

// wss.on('connection', function (ws) {
//   ws.on('message', function (message) {
//     console.log('Websocket message received:', message)
//   })

//   // listen the event
//   emitter.on('test', function () {
//     ws.emit('Websocket emitted event message received:')
//   })
// })
// ------------ // // // // // Set 1
module.exports = router
