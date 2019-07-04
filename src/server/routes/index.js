var express = require('express')
var router = express.Router()
var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({ port: 40510 })

const EventEmitter = require('events')
class InitializedEventEmitterClass extends EventEmitter { }
const emitter = new InitializedEventEmitterClass()


router.get('/', function(req, res, next) {
  res.render('pages/ws')
})

router.post('/msgFromClient', function (req, res) {
  var msg = req.body.formInput // get form input: chat message from user
  // As a post route, we're listening for a form post action.
  // When it happens, we emit an event-- the event passes a message to websocket
  var chatObj = { name: 'Captain Bob', message: msg}
  emitter.emit('chatMessage', chatObj)
  // res.send('Hello World')
})

wss.on('connection', function (ws) {
  // here, we define what happens within a channel called "message", when an event is triggered and the associated object is received.
  // in this case, we're just console logging the object, which we expect to be a string representing a chat message

  ws.on('message', function (message) {
    console.log('Websocket message received:', message)
  })

  // translate emitter-event into websocket emitted event
  emitter.on('chatMessage', function (obj) {
    // console.log('obj from emitter \'chatMessage\'', obj)
    ws.emit('message', obj.message)
  })
})

module.exports = router
