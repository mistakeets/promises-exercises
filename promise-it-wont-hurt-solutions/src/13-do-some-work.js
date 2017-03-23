const qHttp = require('q-io/http')

qHttp.read('http://localhost:7000')
  .then((id) => {
    return qHttp.read('http://localhost:7001/' + id)
  })
  .then((json) => {
    console.log(JSON.parse(json))
  })
  .then(null, console.error)
  .done()