import { useState, useCallback } from "react";

export default function useHttp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
	const [loadMore, setLoadMore] = useState(false);

  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = { "Content-Type": "application/json" },
			loadMore = false
    ) => {
      setError(null);
      setLoading(true);
			setLoadMore(loadMore)
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
				setLoadMore(false)
        return data;
      } catch (err) {
        setError(err.message);
        throw err;
      }
    },
    []
  );

  const clearError = useCallback(() => setError(null), []);

  return { loading, error, request, clearError , loadMore};
}
