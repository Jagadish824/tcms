import React from "react";
import {
  Radar,
  History,
  MapPinned,
  Gauge,
} from "lucide-react";

const features = [
  {
    icon: Radar,
    title: "Live GPS Tracking",
    description: "Real-time location updates every 10 seconds.",
  },
  {
    icon: History,
    title: "Route Replay",
    description: "Review historical trips to verify routes taken.",
  },
  {
    icon: MapPinned,
    title: "Geofencing",
    description: "Instant alerts when vehicles enter/exit zones.",
  },
  {
    icon: Gauge,
    title: "Speed Monitoring",
    description: "Control safety and fuel costs by monitoring speed.",
  },
];

function FleetTrackingSection() {
  return (
    <section className="py-10 lg:px-10 px-5 bg-[#F8F9FA]">
      <div className="mx-auto grid lg:grid-cols-2 lg:gap-16 gap-5 items-center">
        
        {/* Image */}
        <div className="order-2 lg:order-1">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden group lg:h-[700px] md:h-[500px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzEaWBpm62rp7FdRJqHmMesyWPb5liGEJhW6G3RnQzmXLMt6Uj9z8UuWzCn-xWPY0LLwRlaTUJhTV5-17Cfb6-grx2QLA7TQYMfRFnEMEp1KxIaCuR4hzBrsHJ9xCZKhTJB7HquAFJoUHMbs3Z6SfslN_g7hiS0lOYuT2oJVlf_wZXbVpuPCzqFNJ9twz6rLaWveVsSqgVxVm1G0omddRFBznlcLeKxhMVWlBIrqbMQhla11alRaAz2RBAAt0rvb2_cn1hky5Z-Ew"
              alt="Fleet Management Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-10">
            Know Where Every Vehicle Is.
            <span className="text-[#00327D]"> Right Now.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="flex gap-4 group cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <Icon
                      size={30}
                      className="text-[#00327D] transition-transform duration-300 group-hover:rotate-12"
                    />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h4>

                    <p className="text-gray-600 w-[90%] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

export default FleetTrackingSection;