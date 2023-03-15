import useAsync from "./useAsync"

const DEFAULT_OPTIONS = {
  headers: { "Content-Type": "application/json" },
}

export default function useFetch(url, options = {}, dependencies = []) {
  return useAsync(() => {
    return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then(res => {
      console.log('hello:', res)
      if (res.status === 200) return res.data
      return Promise.reject(res)
    })
  }, dependencies)
}