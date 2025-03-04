import { useQuery } from '@tanstack/vue-query'

export const fetchData = async (url, config) => {
  const res = await fetch(url, config)
  const data = await res.json()
  return data
}

export const useGetData = ({ url, config, queryKey }) => {
  console.log(url)
  const queryObj = useQuery({
    queryKey: queryKey,
    queryFn: () => fetchData(url, config),
    refetchOnWindowFocus: false,
    staleTime: 0,
    gcTime: 0,
  })

  return queryObj
}
