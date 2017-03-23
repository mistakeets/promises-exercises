const firstPromise = first()

const secondPromise = firstPromise.then((value) => {
  return second(value)
})

secondPromise.then(console.log)