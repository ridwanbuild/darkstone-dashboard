"use client";

import React, { useState } from "react";
export default function BroadcastCenter() {
    
  const [messageType, setMessageType] = useState("SMS");
  const [recipient, setRecipient] = useState("All Employees");
  const [schedule, setSchedule] = useState("Send Now");
  const [message, setMessage] = useState("");

  const handlerBroadcast = (e: any) => {
    e.preventDefault();
    const form = e.target;

    // Now these will work because of the 'name' attributes added below
    const type = form.type.value;
    const category = form.category.value;
    const template = form.template.value;
    const content = form.content.value;
    const targetRecipient = form.recipient.value;
    const scheduleOption = form.schedule.value;
    const scheduleDate = form.scheduleDate?.value || "Immediate";

    console.log({ type, category, template, content, targetRecipient, scheduleOption, scheduleDate });
    alert("Check console for form data");



  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-100">
          <h1 className="text-lg font-semibold text-gray-800">Create New Broadcast</h1>
        </div>

        {/* Changed div to form */}
        <form onSubmit={handlerBroadcast} className="p-6 space-y-6">
          {/* 1. Message Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message Type</label>
            <div className="flex items-center space-x-4">
              {["SMS", "WhatsApp"].map((type) => (
                <label key={type} className="flex items-center text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="type" // name value kept
                    value={type}
                    checked={messageType === type}
                    onChange={() => setMessageType(type)}
                    className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                  />
                  <span className="ml-2 text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 2. Message Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message Category</label>
            <select name="category" className="w-full p-2 border border-gray-300 rounded-md text-sm text-gray-600 focus:ring-1 focus:ring-teal-500 outline-none">
              <option value="">Select category</option>
              <option value="Appreciation">Appreciation</option>
              <option value="Announcement">Announcement</option>
              <option value="Emergency">Emergency</option>
            </select>
          </div>

          {/* 3. Template */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Template (Optional)</label>
            <select name="template" className="w-full p-2 border border-gray-300 rounded-md text-sm text-gray-600 focus:ring-1 focus:ring-teal-500 outline-none">
              <option value="">Choose from saved templates</option>
              <option value="Standard Appreciation">Standard Appreciation</option>
              <option value="Holiday Greeting">Holiday Greeting</option>
            </select>
          </div>

          {/* 4. Message Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message Content</label>
            <textarea
              name="content" // name value kept
              className="w-full p-3 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-teal-500 outline-none min-h-[120px]"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* 5. Recipients */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Recipients</label>
            <div className="space-y-2">
              {["All Employees", "By Site", "By Department", "Custom List"].map((item) => (
                <label key={item} className="flex items-center text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="recipient" // name value kept
                    value={item}
                    checked={recipient === item}
                    onChange={() => setRecipient(item)}
                    className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                  />
                  <span className="ml-2 text-gray-700">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 6. Schedule */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Schedule</label>
            <div className="space-y-2">
              {["Send Now", "Schedule for later"].map((option) => (
                <label key={option} className="flex items-center text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="schedule" // name value kept
                    value={option}
                    checked={schedule === option}
                    onChange={() => setSchedule(option)}
                    className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                  />
                  <span className="ml-2 text-gray-700">{option}</span>
                </label>
              ))}
            </div>

            {schedule === "Schedule for later" && (
              <div className="mt-3">
                <input
                  name="scheduleDate" // name value kept
                  type="datetime-local"
                  className="p-2 border border-gray-300 rounded text-sm text-gray-600 outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>
            )}
          </div>

          {/* 7. Action Button */}
          <div className="pt-2">
            <button
              type="submit" // changed to submit
              className="bg-[#0D7A73] cursor-pointer hover:bg-[#0A635E] text-white px-6 py-2 rounded-md text-sm font-medium shadow-sm transition-colors"
            >
              {schedule === "Send Now" ? "Send Now" : "Schedule Broadcast"}
            </button>
          </div>


        </form>
      </div>
    </div>
  );
}