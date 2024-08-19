// This is the fetcher function for useSWR 

  const fetcher = (url) => fetch(url).then(res => res.json())

  export default fetcher