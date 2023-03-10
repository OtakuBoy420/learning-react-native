import { useState, useEffect } from "react"
import axios from "axios"

const useAxios = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        setData(response.data.data)
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { data, error, loading }
}

export default useAxios
