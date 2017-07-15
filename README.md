# udp-free-port

Get a free udp port, for node

## Install

```
npm i udp-free-port
```

## Usage

```js
'use strict'

freeUdpPort(function (err, port) {
  if (err) {
    throw err // or do something else
  }

  // use your port!
  var socket = dgram.createSocket('udp4')
  socket.bind(port, function (err) {
    if (err) {
      throw err // or do something else
    }

  })
})
```

## Related

- [tcp-free-port](https://gitlab.com/sebdeckers/tcp-free-port)

## License

MIT
