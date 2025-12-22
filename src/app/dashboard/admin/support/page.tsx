import React from "react";

export default function Support() {
  return (
    <div className="p-6 bg-white text-black">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold mb-4">Employee Support Center</h1>

      {/* Description */}
      <p className="text-sm text-gray-700 mb-6 max-w-2xl">
        The Support Center allows employees to raise issues, request help,
        and track the status of their support tickets. Administrators can
        review, respond, and resolve requests efficiently.
      </p>

      {/* Support Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="border border-gray-300 rounded-lg p-4">
          <h3 className="text-sm text-gray-600">Open Tickets</h3>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>

        <div className="border border-gray-300 rounded-lg p-4">
          <h3 className="text-sm text-gray-600">In Progress</h3>
          <p className="text-3xl font-bold mt-2">3</p>
        </div>

        <div className="border border-gray-300 rounded-lg p-4">
          <h3 className="text-sm text-gray-600">Resolved</h3>
          <p className="text-3xl font-bold mt-2">18</p>
        </div>
      </div>

      {/* Info Section */}
      <div className="border border-gray-300 rounded-lg p-5">
        <h2 className="text-lg font-semibold mb-2">How Support Works</h2>
        <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
          <li>Employees submit support requests with details.</li>
          <li>Requests are reviewed by the admin or support team.</li>
          <li>Status is updated as the issue progresses.</li>
          <li>Resolved tickets are archived for reference.</li>
        </ul>
      </div>
    </div>
  );
}
