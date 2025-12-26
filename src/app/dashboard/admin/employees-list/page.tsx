"use client";

import { useEmployees } from '@/Hook/useEmployees';
import React from 'react';

export default function Page() {
    const { employees, loading, error } = useEmployees();

    if (loading) return <div className="p-10 text-center animate-pulse text-gray-500">Loading data...</div>;
    
    if (error) return <div className="p-10 text-red-500 text-center">Error: {error}</div>;



    return (
        <div className="">
            <h1 className="text-2xl font-bold mb-6">Employee List</h1>
            
            <div className="overflow-x-auto shadow-sm border border-gray-200 rounded-lg">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-50">
                        <tr className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            <th className="p-4 border-b">Name</th>
                            <th className="p-4 border-b">Email</th>
                            <th className="p-4 border-b">Role</th>
                            <th className="p-4 border-b">Department</th>
                            <th className="p-4 border-b text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {employees.map((emp) => (
                            <tr key={emp._id} className="hover:bg-gray-50">
                                {/* যদি নাম না থাকে তবে 'Name not available' দেখাবে */}
                                <td className="p-4 text-sm text-gray-700">
                                    {emp.fullName || <span className="text-gray-400 italic font-light">Name not available</span>}
                                </td>
                                
                                <td className="p-4 text-sm text-gray-700">
                                    {emp.email || <span className="text-gray-400 italic">No email provided</span>}
                                </td>
                                
                                <td className="p-4 text-sm">
                                    {emp.role ? (
                                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">
                                            {emp.role}
                                        </span>
                                    ) : (
                                        <span className="text-gray-400">N/A</span>
                                    )}
                                </td>
                                
                                <td className="p-4 text-sm text-gray-700">
                                    {emp.department || "N/A"}
                                </td>
                                
                                <td className="p-4 text-sm text-center space-x-3">
                                    <button className="text-blue-500 hover:text-blue-700 font-medium">View</button>
                                    <button className="text-green-500 hover:text-green-700 font-medium">Edit</button>
                                    <button className="text-red-400 hover:text-red-600 font-medium">Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* যদি পুরো লিস্ট খালি থাকে */}
            {employees.length === 0 && (
                <div className="text-center py-20 bg-gray-50 mt-4 rounded-lg border-2 border-dashed">
                    <p className="text-gray-500 italic">No employees available in the database.</p>
                </div>
            )}
        </div>
    );
}