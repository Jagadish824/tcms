import React from "react";
import { CheckCircle2, BellRing, FileCheck, Check, Truck } from "lucide-react";

const customerFeatures = [
  {
    icon: "./live.png",
    title: "Live Shipment Tracking",
    description: "Send a secure link to your customer for real-time tracking.",
  },
  {
    icon: "./bell.png",
    title: "WhatsApp Notifications",
    description: "Auto-alerts when the cargo is loaded or delivered.",
  },
  {
    icon: "./pod.png",
    title: "Digital POD",
    description: "Electronic Proof of Delivery with photos and e-signatures.",
  },
];

function ShipmentVisibility() {
  return (
    <section className="py-10 lg:px-10 px-5">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center lg:mb-16 mb-5">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" data-aos="fade-up">
            Give Your Customers Amazon-Like Shipment Visibility
          </h2>

          <p className="text-lg text-[#434653] mx-auto" data-aos="fade-up">
            "Fewer calls. More trust. More repeat business."
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Features */}
          <div className="lg:col-span-2 space-y-5">
            {customerFeatures.map((feature, index) => {

              return (
                <div
                  key={index}
                  className="bg-white p-5 rounded-xl border border-[#C3C6D5] hover:border-[#00327D] transition-all duration-300"
                  data-aos="fade-up"
                >
                  <h4 className="flex items-center gap-3 text-lg font-bold text-gray-900">
                    <img src={feature.icon}/>
                    {feature.title}
                  </h4>

                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>


          {/* Right Tracking Card */}
          <div className="lg:col-span-3" data-aos="fade-left">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#C3C6D5]">
              {/* Top */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
                <h5 className="text-xl font-bold text-gray-900">
                  Shipment #MY-982314
                </h5>

                <span className="bg-[#80F98B] text-[#007327] px-6 py-2 rounded-full text-sm font-semibold w-fit">
                  IN TRANSIT
                </span>
              </div>

              {/* Timeline */}
              <div className="relative space-y-10">
                {/* Line */}
                <div className="absolute left-[15px] top-5 bottom-1 w-[2px] bg-gray-200"></div>

                {/* Step 1 */}
                <div className="flex gap-4 relative group">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white z-10">
                    <Check size={16} />
                  </div>

                  <div className="transition-transform duration-300 group-hover:translate-x-1">
                    <p className="font-semibold text-gray-900 text-lg" >
                      Picked Up
                    </p>
                    <p className="text-sm text-gray-500">
                      Klang Warehouse - 09:15 AM
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4 relative group">
                  <div className="w-8 h-8 rounded-full bg-[#00327D] flex items-center justify-center text-white z-10 shadow-lg">
                    <Truck size={16} />
                  </div>

                  <div className="transition-transform duration-300 group-hover:translate-x-1">
                    <p className="font-semibold text-gray-900 text-lg">
                      In Transit
                    </p>
                    <p className="text-sm text-gray-500">
                      On Federal Highway - ETA 12:30 PM
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4 relative group">
                  <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-gray-100 z-10"></div>

                  <div className="transition-transform duration-300 group-hover:translate-x-1">
                    <p className="text-gray-500 font-medium">
                      Scheduled Delivery
                    </p>
                    <p className="text-sm text-gray-500">
                      Bayan Lepas, Penang
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Tracking Card */}
        </div>
      </div>
    </section>
  );
}

export default ShipmentVisibility;
