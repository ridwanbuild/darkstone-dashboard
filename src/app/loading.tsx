"use client"

import React from "react";
import { Bars } from "react-loader-spinner";

export default function Loading() {
  return (

    <div className="flex bg-slate-200 flex-col items-center justify-center min-h-screen text-center">
      <Bars
        height="80"
        width="80"
        color="#000000"
        ariaLabel="bars-loading"
        visible={true}
      />


      <h2 className="mt-4 text-lg font-semibold text-gray-800">
        Please wait…
      </h2>


      <p className="mt-1 text-sm text-gray-500">
        We’re preparing everything for you.
      </p>



    </div>
  );
}
