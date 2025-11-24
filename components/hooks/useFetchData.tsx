import { useEffect, useState } from "react";

export function useFetchJson<T = any>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const res = await fetch(url);

        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);

        const json: T = await res.json();

        if (isMounted) {
          setData(json);
          setLoading(false);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err.message || "Unknown error");
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}
