"use client";


import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function AddEmployee() {

  const router = useRouter()
  const [profileImage, setProfileImage] = useState<File | null>(null);


  const handlerSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;
    const employeeData = {
      fullName: form.fullName.value,
      iqamaNumber: form.IqamaNumber.value,
      email: form.email.value,
      country: form.country.value,
      position: form.position.value,
      department: form.department.value,
      workStatus: form.workStatus.value,
      employmentStatus: form.employmentStatus.value,
      address: form.address.value,
      createdAt: new Date(),
      role: "employee",
        profileImage: profileImage ? profileImage.name : null, // optional: send image name

    };

    try {
      const res = await fetch("http://localhost:5000/company", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeData),
      });

      const result = await res.json();
      toast.success(result.message || "Employee added successfully!");
      router.push("/dashboard/admin/employees")

      // toast.success("Employee added successfully!");
      console.log(result.message);

      form.reset(); // Clear the form
    } catch (error) {
      console.error(error);

      return toast.error("Failed to add employee. Please try again");
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6">Add New Employee</h2>

      <form
        onSubmit={handlerSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
        autoComplete="off"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            defaultValue=""
            autoComplete="off"
            placeholder="John Doe"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Iqama Number</label>
          <input
            type="text"
            name="IqamaNumber"
            defaultValue=""
            autoComplete="off"
            required
            placeholder="0501234567"
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            defaultValue=""
            required
            autoComplete="off"
            placeholder="employee@company.com"
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Country</label>
          <input
            type="text"
            name="country"
            defaultValue=""
            autoComplete="off"
            required
            placeholder="Saudi Arabia"
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Position</label>
          <input
            type="text"
            name="position"
            defaultValue=""
            autoComplete="off"
            placeholder="Software Engineer"
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Department</label>
          <select
            name="department"
            defaultValue=""
            autoComplete="off"
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-gray-50"
          >
            <option value="" disabled>
              Select department
            </option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Operations">Operations</option>
            <option value="Operations">Others</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Work Status</label>
          <input
            type="text"
            name="workStatus"
            defaultValue=""
            autoComplete="off"
            placeholder="Full-time / Part-time / Contract"
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Employment Status
          </label>
          <select
            name="employmentStatus"
            defaultValue=""
            autoComplete="off"
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-gray-50"
          >
            <option value="" disabled>
              Select status
            </option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="On Leave">On Leave</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Address</label>
          <textarea
            name="address"
            defaultValue=""
            autoComplete="off"
            rows={3}
            required
            placeholder="Company address"
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-gray-50"
          />
        </div>


          {/* Profile Image */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Profile Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProfileImage(e.target.files?.[0] || null)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-gray-50"
          />
        </div>


        <div className="md:col-span-2  flex justify-center">
          <button
            type="submit"
            className="bg-gray-600 text-white cursor-pointer px-6 w-full py-2 rounded-md hover:bg-gray-800 transition"
          >
            Save Employee
          </button>
        </div>
      </form>
    </div>
  );
}
