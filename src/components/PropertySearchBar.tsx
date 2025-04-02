"use client";

import { useState } from "react";
import { MapPin, Circle, CheckCircle } from "lucide-react";

const options = ["buy", "rent", "sale"];

export default function PropertySearchBar() {
  const [selectedOption, setSelectedOption] = useState("buy");

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-white z-20 p-4 rounded-xl shadow-md w-[90%] md:w-[80%] xl:w-[60%] mx-auto mt-8">
      {/* Icon-based selection */}
      <div className="w-full flex items-center gap-4">
        {options.map((option) => {
          const isSelected = selectedOption === option;
          return (
            <div
              key={option}
              className="w-full flex items-center justify-items-center gap-1 text-gray-700 font-medium capitalize cursor-pointer"
              onClick={() => setSelectedOption(option)}
            >
              {isSelected ? (
                <CheckCircle className="text-tgreen w-5 h-5" />
              ) : (
                <Circle className="text-gray-400 w-5 h-5" />
              )}
              <span className={isSelected ? "text-gray-900 font-semibold" : ""}>
                {option}
              </span>
            </div>
          );
        })}
      </div>

      {/* Divider */}
      <div className="h-8 hidden md:block border-l border-gray-300 mx-4" />

      <div className="w-full flex md:flex-row flex-col items-center gap-6">
        <div className="w-full flex items-center flex-grow text-gray-500">
          <MapPin className="mr-2 w-6 h-6" />
          <input
            type="text"
            placeholder="Search for a Property"
            className="w-full focus:outline-none placeholder-gray-400 text-gray-800"
          />
        </div>

        <button className=" md:w-fit w-full px-6 py-3 bg-[#1a2344] text-white rounded-lg shadow hover:bg-[#111a33] cursor-pointer transition">
          Search
        </button>
      </div>
    </div>
  );
}
