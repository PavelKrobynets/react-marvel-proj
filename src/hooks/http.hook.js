import { useState, useCallback } from "react";

export default function useHttp() {
  const [process, setProcess] = useState("waiting");

  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = { "Content-Type": "application/json" }
    ) => {
      clearError();
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
        return data;
      } catch (err) {
        setProcess("error");
        throw err;
      }
    },
    []
  );

  const clearError = useCallback(() => {
		setProcess('loading')
  }, []);

  return {request, clearError, process, setProcess };
}
