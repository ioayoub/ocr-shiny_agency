import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    if(!url) {
      return;
    }

    async function fetchData() {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }

    fetchData();

  }, [url])

  return { data, isLoading, error };
}
