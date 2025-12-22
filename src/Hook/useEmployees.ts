"use client";

import { useState, useEffect } from "react";

export interface Employee {
  _id: string;
  fullName: string;
  iqamaNumber: string;
  email: string;
  country: string;
  position: string;
  department: string;
  workStatus: string;
  employmentStatus: string;
  address: string;
  createdAt: string;
  role: string;
}

export function useEmployees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/company");
      if (!res.ok) throw new Error("Failed to fetch employees");
      const data = await res.json();
      setEmployees(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return { employees, loading, error, refresh: fetchEmployees };
}
