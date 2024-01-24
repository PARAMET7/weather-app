import { useState, useEffect } from "react";

function useFetch(url, pollInterval = null) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const resp = await fetch(url);
      const result = await resp.json();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    if (pollInterval) {
      const intervalId = setInterval(fetchData, pollInterval);

      return () => clearInterval(intervalId);
    }
  }, [url, pollInterval]);

  return { data, error, loading, fetchData };
}

export default useFetch;