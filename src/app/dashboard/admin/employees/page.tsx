"use client";

import { useEmployees } from "@/Hook/useEmployees";
import React, { useState } from "react";

import { Alert } from "../../components/EmployeeSection/Alert";
import { HappyNote } from "../../components/EmployeeSection/HappyNote";
import { Notification } from "../../components/EmployeeSection/Notification";
import { Requests_Employee } from "../../components/EmployeeSection/Requests_Employee";
import { Support_Employee } from "../../components/EmployeeSection/Support_Employee";
import { Action } from "../../components/EmployeeSection/Action";

export default function Employees() {
  const { employees, loading, error } = useEmployees();
  const [searchTerm, setSearchTerm] = useState("");

  if (loading)
    return (
      <p className="p-10 text-center text-gray-500">Loading employees...</p>
    );
  if (error)
    return <p className="p-10 text-red-500 text-center">Error: {error}</p>;

  // Filter employees based on search term (Handling null/undefined for safety)
  const filteredEmployees = employees.filter(
    (emp) =>
      (emp.fullName || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (emp.iqamaNumber || "").includes(searchTerm)
  );

  console.log(employees)

  return (
    <div className="max-w-7xl  mx-auto ">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name or Iqama number..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      <div className="bg-white p-4 mb-6 rounded-md font-semibold shadow-sm border-l-4 border-blue-500">
        <h2 className="text-gray-700"> Total Employees: {employees.length} </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((emp) => (
            <div
              key={emp._id}
              className="bg-white shadow-md border border-gray-100 rounded-lg p-5 hover:shadow-xl transition flex flex-col justify-between"
            >
              <div>
                {/* Profile Header */}
                <div className="flex items-center mb-4">

                  <div className="">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mr-4 text-gray-500">
                      N/A
                    </div>
                  </div>


                  <div>
                    <h2 className="text-lg font-bold text-gray-800">
                      {emp.fullName || (
                        <span className="text-gray-400 font-normal italic">
                          Name not available
                        </span>
                      )}
                    </h2>
                    <p className="text-blue-600 text-sm font-medium">
                      {emp.position || "No position assigned"}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {emp.department || "No department"}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 border-t pt-3">
                  {/* Work Status */}
                  <p className="text-sm">
                    <span className="font-semibold text-gray-600">
                      Work Status:
                    </span>{" "}
                    <span
                      className={`${
                        emp.workStatus
                          ? "text-gray-800"
                          : "text-gray-400 italic"
                      }`}
                    >
                      {emp.workStatus || "Status not updated"}
                    </span>
                  </p>

                  {/* Last Feedback */}
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-600">
                      Last Feedback:
                    </span>{" "}
                    <span className="text-gray-400 italic">
                      No feedback available
                    </span>
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-50">
                
                <Action  />
                <Alert />
                <HappyNote />
                <Notification />
                <Requests_Employee />
                <Support_Employee />


              </div>

              {/* Footer Date */}
              <div className="flex justify-between items-center mt-4">
                <p className="text-gray-400 text-[10px] uppercase tracking-wider">
                  Added:{" "}
                  {emp.createdAt
                    ? new Date(emp.createdAt).toLocaleDateString()
                    : "Unknown Date"}
                </p>
                <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-500">
                  ID: {emp._id.slice(-5)}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 bg-gray-50 rounded-lg border-2 border-dashed">
            <p className="text-gray-500 font-medium">
              No matching employees found for "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
