
"use client"

import React, { useState } from "react";

export default function Assets() {
  const [assets, setAssets] = useState([
    "Laptops (Windows, macOS)",
    "Mobile Phones (Android, iOS)",
    "Monitors & Accessories",
    "Tablets and Work Devices",
  ]);
  const [newAsset, setNewAsset] = useState("");

  const handleAddAsset = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAsset.trim() !== "") {
      setAssets([...assets, newAsset.trim()]);
      setNewAsset("");
    }
  };
  

  return (
    <div className="p-6 bg-white text-black">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold mb-4">Company Equipment</h1>

      {/* Description */}
      <p className="text-sm text-gray-700 mb-6 max-w-2xl">
        This section manages all company-issued equipment such as laptops,
        mobile phones, monitors, and other work devices assigned to employees.
      </p>

      {/* Equipment Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="border border-gray-300 rounded-lg p-4">
          <h3 className="text-sm text-gray-600">Total Devices</h3>
          <p className="text-3xl font-bold mt-2"> {assets.length} </p>
        </div>

        <div className="border border-gray-300 rounded-lg p-4">
          <h3 className="text-sm text-gray-600">Assigned Devices</h3>
          <p className="text-3xl font-bold mt-2">58</p>
        </div>

        <div className="border border-gray-300 rounded-lg p-4">
          <h3 className="text-sm text-gray-600">Available Devices</h3>
          <p className="text-3xl font-bold mt-2"> {assets.length} </p>
        </div>
      </div>

      {/* Equipment Types */}
      <div className="border border-gray-300 rounded-lg p-5 mb-6">
        <h2 className="text-lg font-semibold mb-2">Equipment Types</h2>
        <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
          {assets.map((asset, idx) => (
            <li key={idx}>{asset}</li>
          ))}
        </ul>

        {/* Add New Asset Form */}
        <form
          className="mt-4 flex flex-col sm:flex-row gap-2"
          onSubmit={handleAddAsset}
        >
          <input
            type="text"
            placeholder="Add new asset"
            className="border border-gray-300 outline-0 rounded-lg p-2 flex-1"
            value={newAsset}
            onChange={(e) => setNewAsset(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition"
          >
            Add
          </button>
        </form>
      </div>

      {/* Usage Policy */}
      <div className="border border-gray-300 rounded-lg p-5">
        <h2 className="text-lg font-semibold mb-2">Equipment Usage Policy</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          All company equipment is provided strictly for work purposes.
          Employees are responsible for maintaining assigned devices and
          reporting any damage or loss immediately to the administration.
        </p>
      </div>
    </div>
  );
}
