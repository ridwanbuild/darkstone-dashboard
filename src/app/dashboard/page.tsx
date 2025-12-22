"use client"


import { useEmployees } from "@/Hook/useEmployees";
import Link from "next/link";
import React from "react";

export default function page() {

  const {employees} = useEmployees()

  return (
    <div className="py-8 px-4 bg-white border border-gray-200 shadow-xl rounded-md text-black">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold mb-6">Dashboard Overview</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="border border-gray-300 rounded-lg p-4">
          <h3 className="text-sm text-gray-600">Total Employees</h3>
          <p className="text-3xl font-bold mt-2"> {employees.length} </p>
        </div>

        <div className="border border-gray-300 rounded-lg p-4">
          <h3 className="text-sm text-gray-600">Active Employees</h3>
          <p className="text-3xl font-bold mt-2">{employees.length} </p>
        </div>

        <div className="border border-gray-300 rounded-lg p-4">
          <h3 className="text-sm text-gray-600">Pending Requests</h3>
          <p className="text-3xl font-bold mt-2">7</p>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="border border-gray-300 rounded-lg p-5 mb-10">
        <h2 className="text-lg font-semibold mb-2">Welcome, Admin</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          This dashboard gives you a quick overview of company operations.
          Use the sections below to manage employees, users, assets, and
          service requests efficiently.
        </p>
      </div>

      {/* Admin Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Admin Quick Actions</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Add Employee</h3>
            <p className="text-sm text-gray-600 mb-3">
              Create a new employee profile and assign roles and departments.
            </p>

            <Link
              href="/dashboard/admin/add-employee"
              className="text-sm font-medium underline"
            >
              Go to form
            </Link>
          </div>

          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold mb-2">User Management</h3>
            <p className="text-sm text-gray-600 mb-3">
              Manage system users, permissions, and access levels.
            </p>
            <Link
              href="/dashboard/admin/users"
              className="text-sm font-medium underline"
            >
              Manage users
            </Link>
          </div>

          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Employee Directory</h3>
            <p className="text-sm text-gray-600 mb-3">
              View and update employee information and status.
            </p>
            <Link
              href="/dashboard/admin/employees"
              className="text-sm font-medium underline"
            >
              View employees
            </Link>
          </div>

          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Support Center</h3>
            <p className="text-sm text-gray-600 mb-3">
              Handle support tickets and employee inquiries.
            </p>
            <Link
              href="/dashboard/admin/support"
              className="text-sm font-medium underline"
            >
              Open support
            </Link>
          </div>

          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Asset Management</h3>
            <p className="text-sm text-gray-600 mb-3">
              Track and assign company assets and equipment.
            </p>
            <Link
              href="/dashboard/admin/assets"
              className="text-sm font-medium underline"
            >
              Manage assets
            </Link>
          </div>

          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Service Requests</h3>
            <p className="text-sm text-gray-600 mb-3">
              Review and approve employee service requests.
            </p>
            <Link
              href="/dashboard/admin/requests"
              className="text-sm font-medium underline"
            >
              View requests
            </Link>
          </div>


        </div>
      </div>
    </div>
  );
}
