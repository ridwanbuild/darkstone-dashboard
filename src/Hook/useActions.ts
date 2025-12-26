import { useState, useEffect } from "react";

export function useActions() {
    
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchActions = async () => {

    try {
      const res = await fetch("https://darkstone-dashboard-server.vercel.app/action");
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching actions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActions();
  }, []);

  return { data, loading, refetch: fetchActions };
}