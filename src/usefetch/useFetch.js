import { useState, useEffect } from "react"

export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const [fetchOptions, setFetchOptions] = useState(null)

  const postData = (storeData) => {
    setFetchOptions({
      method : "POST",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify(storeData)
    })
  }


  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async (fetchOptions) => {
      setIsPending(true)

      try {
        const res = await fetch(url, { ...fetchOptions, signal: controller.signal })

        if(!res.ok) {
          throw new Error(res.statusText)
        }
        const data = await res.json()
        console.log(res.ok, 'res.ok')


        setData(data)
        setError(null)
      } catch (err) {
        if (err.name === "AbortError") {
            console.log(err, err.name)
          console.log("the fetch was aborted")
        } else {
          setError('Could not fetch the data')
        }
      } finally {
        setIsPending(false)
      }
    }

    if(method === "GET"){
      fetchData()
    }
    if(method === "POST" && fetchOptions){
      fetchData(fetchOptions)
    }

    // return () => controller.abort()


  }, [url, method, fetchOptions])

  return { data, isPending, error, postData }
}