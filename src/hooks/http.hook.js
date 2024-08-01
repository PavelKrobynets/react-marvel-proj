import { useState, useCallback } from "react";

export default function useHttp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = { "Content-Type": "application/json" }
    ) => {
			setError(null)
      setLoading(true);
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
        });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setLoading(false);
        return data;
      } catch (err) {
        setError(err.message);
        throw err;
      }
    },
    []
  );


  return { loading, error, request };
}
