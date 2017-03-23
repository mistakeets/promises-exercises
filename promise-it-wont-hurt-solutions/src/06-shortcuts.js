const onResolve = Promise.resolve('This is an Equal Value')
const onReject = Promise.reject(new Error('This is not a Good Value!'))

onResolve.catch((err) => {
  console.error('YOU BROKE IT!')
  console.error(err.message)
})