"use client";

import React, { useState } from "react";
import CountUp from "react-countup";

function SavingsCalculator() {
  const [fleetSize, setFleetSize] = useState(50);
  const [fuelSpend, setFuelSpend] = useState(50000);
  const [adminHours, setAdminHours] = useState(40);

  // Calculations
  const fuelSavings = Math.round(Number(fuelSpend) * 0.15);
  const timeSaved = Math.round(Number(adminHours) * 1.6);
  const collectionSpeedup = Math.round(fleetSize / 4);

  return (
    <section className="py-10 lg:px-10 px-5 overflow-hidden">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl border border-[#C3C6D5] overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#00327D] p-8">
          <h3 className="text-3xl font-bold !text-white">
            Calculate Your Estimated Savings
          </h3>
        </div>

        {/* Content */}
        <div className="p-5 lg:p-10 grid md:grid-cols-2 gap-10">
          
          {/* Left Side */}
          <div className="space-y-8">
            
            {/* Fleet Size */}
            <div>
              <label className="block text-sm font-semibold uppercase text-gray-700 mb-3">
                Fleet Size (Vehicles)
              </label>

              <input
                type="range"
                min="1"
                max="200"
                value={fleetSize}
                onChange={(e) =>
                  setFleetSize(Number(e.target.value))
                }
                className="w-full h-2 rounded-lg cursor-pointer accent-[#00327D]"
              />

              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>1</span>
                <span className="font-semibold text-[#00327D]">
                  {fleetSize}
                </span>
                <span>200+</span>
              </div>
            </div>

            {/* Fuel Spend */}
            <div>
              <label className="block text-sm font-semibold uppercase text-gray-700 mb-3">
                Avg. Monthly Fuel Spend (RM)
              </label>

              <input
                type="number"
                value={fuelSpend}
                onChange={(e) =>
                  setFuelSpend(e.target.value)
                }
                className="w-full p-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00327D] focus:border-transparent outline-none transition-all"
                placeholder="50000"
              />
            </div>

            {/* Admin Hours */}
            <div>
              <label className="block text-sm font-semibold uppercase text-gray-700 mb-3">
                Manual Admin Hours / Week
              </label>

              <input
                type="number"
                value={adminHours}
                onChange={(e) =>
                  setAdminHours(e.target.value)
                }
                className="w-full p-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00327D] focus:border-transparent outline-none transition-all"
                placeholder="40"
              />
            </div>
          </div>

          {/* Right Side Results */}
          <div className="bg-[#EDEEEF] rounded-2xl lg:p-8 p-5 border border-gray-200 space-y-6">
            
            {/* Fuel Savings */}
            <div className="border-b-2 border-[#C3C6D5] pb-5">
              <p className="block text-sm font-semibold uppercase text-gray-700 mb-3">
                Est. Monthly Fuel Savings
              </p>

              <h4 className="lg:text-4xl text-2xl font-bold !text-[#006E25]">
                RM{" "}
                <CountUp
                  end={fuelSavings}
                  duration={1.5}
                  separator=","
                />
              </h4>
            </div>

            {/* Admin Time */}
            <div className="border-b-2 border-[#C3C6D5] pb-5">
              <p className="block text-sm font-semibold uppercase text-gray-700 mb-3">
                Admin Time Saved
              </p>

              <h4 className="lg:text-4xl text-2xl font-bold !text-[#00327D]">
                <CountUp
                  end={timeSaved}
                  duration={1.5}
                />{" "}
                Hours
              </h4>
            </div>

            {/* Collection Speed */}
            <div>
              <p className="block text-sm font-semibold uppercase text-gray-700 mb-3">
                Est. Collection Speedup
              </p>

              <h4 className="lg:text-4xl text-2xl font-bold !text-[#00327D]">
                <CountUp
                  end={collectionSpeedup}
                  duration={1.5}
                />{" "}
                Days Faster
              </h4>
            </div>

            {/* CTA Button */}
            <button className="w-full mt-4 bg-[#00327D] hover:bg-[#00245A] text-white py-4 rounded-md font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              Get Detailed ROI Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SavingsCalculator;