export const fetchData = async (url, config) => {
  const res = await fetch(url, config)
  const data = await res.json()
  return data
}
