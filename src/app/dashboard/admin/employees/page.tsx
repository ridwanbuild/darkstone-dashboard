"use client";

import { useEmployees } from "@/Hook/useEmployees";
import React, { useState } from "react";
import { Action } from "../../components/EmployeeSection/Action";
import { Alert } from "../../components/EmployeeSection/Alert";
import { HappyNote } from "../../components/EmployeeSection/HappyNote";
import { Notification } from "../../components/EmployeeSection/Notification";
import { Requests_Employee } from "../../components/EmployeeSection/Requests_Employee";
import { Support_Employee } from "../../components/EmployeeSection/Support_Employee";



export default function Employees() {
  const { employees, loading, error } = useEmployees();
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) return <p>Loading employees...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  // Filter employees based on search term
  const filteredEmployees = employees.filter((emp) =>
    emp.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.iqamaNumber.includes(searchTerm)
  );


  return (
    <div className="max-w-7xl mx-auto">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name or Iqama number..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full  w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-gray-50"
        />
      </div>

      <div className="bg-white p-2 mb-4 rounded-md font-semibold shadow-md">
        <h2> Total Employee: {employees.length} </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map((emp) => (
          <div
            key={emp._id}
            className="bg-white shadow-md border rounded-lg p-5 hover:shadow-xl transition flex flex-col"
          >
            
            {/* Profile Image */}
            <div className="flex items-center mb-4">
              {emp.profileImage ? (
                <img
                  src={`http://localhost:5000/uploads/${emp.profileImage}`}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mr-4 text-gray-500">
                  N/A
                </div>
              )}
              
              <div>
                <h2 className="text-lg font-semibold">{emp.fullName}</h2>
                <p className="text-gray-500 text-sm">{emp.position}</p>
                <p className="text-gray-400 text-xs">{emp.department}</p>

              </div>
            </div>

            {/* Work Status */}
            <p className="text-sm mb-2">
              <span className="font-semibold">Work Status:</span> {emp.workStatus}
            </p>

            {/* Last Feedback */}
            <p className="text-sm mb-2 text-gray-600">
              <span className="font-semibold">Last Feedback:</span> No feedback yet
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-2 mt-3">
             
                <Action></Action>

                <Alert></Alert>

                <HappyNote></HappyNote>

                <Notification></Notification>

                <Requests_Employee></Requests_Employee>
                
                <Support_Employee></Support_Employee>

            </div>

            {/* Footer: Added Date */}
            <p className="text-gray-400 text-xs mt-3">
              Added: {new Date(emp.createdAt).toLocaleDateString()}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}
