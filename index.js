'use strict'

var dgram = require('dgram')

function freeUdpPort (cb) {
  var socket = dgram.createSocket('udp4')
  socket.bind(function (err) {
    if (err) {
      return cb(err)
    }

    var address = socket.address()
    socket.close(function (err) {
      if (err) {
        return cb(err)
      }

      cb(null, address.port)
    })
  })
}

module.exports = freeUdpPort
