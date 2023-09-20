const myPromise = () =>
  new Promise(resolve =>
    setTimeout(() => resolve("myPromise() resolved in 100ms"), 100)
  )
const myPromise2 = new Promise(resolve =>
  setTimeout(() => resolve("myPromise2 resolved in 200ms"), 200)
)

const asyncAwait = async () => {
  const myPromiseResponse = await myPromise()
  const myPromiseResponse2 = await myPromise2

  return { myPromiseResponse, myPromiseResponse2 }
}

const runAsyncAwait = async () => {
  const response = await asyncAwait()

  console.log({ response })
}

runAsyncAwait()
