# udp-free-port

Get a free udp port, for node

## Install

```js
npm i udp-free-port --save
```

## Usage

```js
'use strict'

freeUdpPort(function (err, port) {
  if (err) {
    throw err // or do something else
  }

  // user your port!
  var socket = dgram.createSocket('udp4')
  socket.bind(port, function (err) {
    if (err) {
      throw err // or do something else
    }

  })
})
```

## License

MIT
