import React from "react";

export default function Request() {
  return (
    <div className="p-6 bg-white text-black">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold mb-4">Service Requests</h1>

      {/* Description */}
      <p className="text-sm text-gray-700 mb-6 max-w-2xl">
        Service Requests allow employees to request support, equipment,
        approvals, or other workplace services. Administrators can review,
        approve, or reject these requests.
      </p>

      {/* Request Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="border border-gray-300 rounded-lg p-4">
          <h3 className="text-sm text-gray-600">Total Requests</h3>
          <p className="text-3xl font-bold mt-2">34</p>
        </div>

        <div className="border border-gray-300 rounded-lg p-4">
          <h3 className="text-sm text-gray-600">Pending Approval</h3>
          <p className="text-3xl font-bold mt-2">9</p>
        </div>

        <div className="border border-gray-300 rounded-lg p-4">
          <h3 className="text-sm text-gray-600">Approved</h3>
          <p className="text-3xl font-bold mt-2">21</p>
        </div>
      </div>

      {/* Request Types */}
      <div className="border border-gray-300 rounded-lg p-5 mb-6">
        <h2 className="text-lg font-semibold mb-2">Common Request Types</h2>
        <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
          <li>New equipment or device requests</li>
          <li>Asset replacement or repair</li>
          <li>System access or permission requests</li>
          <li>General service or support requests</li>
        </ul>
      </div>

      {/* Process Info */}
      <div className="border border-gray-300 rounded-lg p-5">
        <h2 className="text-lg font-semibold mb-2">Request Process</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Requests are reviewed by the administration team. Once approved,
          the request status is updated and employees are notified accordingly.
        </p>
      </div>
    </div>
  );
}
