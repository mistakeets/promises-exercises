const qHttp = require('q-io/http')

qHttp.read('http://localhost:1337')
  .then(function(data) {
    console.log(JSON.parse(data));
  })
  .then(null, console.error)
  .done()