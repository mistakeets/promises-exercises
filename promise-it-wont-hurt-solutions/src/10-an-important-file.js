function alwaysThrows() {
  throw new Error("Error: OH NOES")
}

function iterate(argument) {
  console.log(argument)
  return argument + 1
}

function printErrorMessage(err) {
  console.log(err.message)
}

Promise.resolve(iterate(1))
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(null, printErrorMessage)