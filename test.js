'use strict'

var test = require('tap').test
var freeUdpPort = require('./')
var dgram = require('dgram')

function myTest (t) {
  t.plan(2)
  freeUdpPort(function (err, port) {
    t.error(err)
    var socket = dgram.createSocket('udp4')
    t.tearDown(socket.close.bind(socket))
    socket.bind(port, function (err) {
      t.error(err)
    })
  })
}

for (var i = 0; i < 100; i++) {
  test('get a free port ' + i, myTest)
}
