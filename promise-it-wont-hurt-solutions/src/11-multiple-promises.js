function all(promise1, promise2) {
  return new Promise(function(resolve, reject) {
    var counter = 0
    var tempArray = []

    promise1.then(function(value) {
      tempArray[0] = value
      counter++

      if (counter === 2) {
        resolve(tempArray)
      }
    })

    promise2.then(function(value) {
      tempArray[1] = value
      counter++

      if (counter === 2) {
        resolve(tempArray)
      }
    })
  })
}

all(getPromise1(), getPromise2())
  .then(console.log)