import Link from "next/link";
import React from "react";

interface SectionHeadingProp {
  badgeText: string;
  titleText: string;
  paraText: string;
}

export default function SectionHeading({
  badgeText,
  titleText,
  paraText,
}: SectionHeadingProp) {
  return (
    <div
      className="min-h-screen flex items-center justify-center 
      bg-gradient-to-b from-[#F8FAFF] via-[#FDFBFF] to-[#EEF2FF]"
    >
      <div className="flex flex-col lg:items-center items-start space-y-3 px-4">
        {/* Badge */}
        <h4 className="bg-emerald-100 text-emerald-700 inline-block px-5 rounded-full uppercase font-semibold py-1 text-sm">
          {badgeText}
        </h4>

        {/* Title */}
        <h2 className="lg:text-4xl capitalize text-3xl font-bold bg-gradient-to-r from-pink-600 to-indigo-500 bg-clip-text text-transparent">
          {titleText}
        </h2>

        {/* Paragraph */}
        <p className="lg:text-center text-gray-600 lg:max-w-lg mx-auto">
          {paraText}
        </p>

        <div className="flex pt-5">

          <Link href={'/'} className="bg-gradient-to-r from-slate-600 to-gray-800 cursor-pointer px-10 py-2 rounded-sm text-white">
            {" "}
            Back{" "}
          </Link>
          
        </div>


      </div>
    </div>
  );
}
