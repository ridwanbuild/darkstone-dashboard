import { useState, useEffect } from "react";

export function useSupport() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTickets = async () => {
    try {
      const res = await fetch("https://darkstone-dashboard-server.vercel.app/support");
      const data = await res.json();
      setTickets(data);
    } catch (error) {
      console.error("Error fetching support tickets:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return { tickets, loading, refetch: fetchTickets };
}