import React from "react";
import {
  PhoneOff,
  MessageSquare,
  Fuel,
  Wrench,
  FileClock,
  AlertTriangle,
} from "lucide-react";

const problems = [
  {
    icon: "./phone.png",
    title: "Drivers not answering calls",
    description:
      "Constant calling to check location disrupts drivers and wastes your dispatch team's time.",
  },
  {
    icon: "./message.png",
    title: "Customers requesting updates",
    description:
      'Dealing with repetitive "Where is my shipment?" calls prevents you from focusing on growth.',
  },
  {
    icon: "./fuel.png",
    title: "Fuel wastage/theft",
    description:
      "Undetected siphoning and excessive idling are silently eating into your monthly margins.",
  },
  {
    icon: "./repair.png",
    title: "Missed maintenance",
    description:
      "Unplanned breakdowns happen because you're tracking service dates on a wall calendar.",
  },
  {
    icon: "./delay.png",
    title: "Delayed invoicing",
    description:
      "Waiting days for physical PODs to return means you're being paid weeks later than you should.",
  },
  {
    icon: "./warning.png",
    title: "Compliance overload",
    description:
      "Struggling to keep up with APAD and JPJ renewals and driver permit expirations.",
  },
];

function ProblemsSection() {
  return (
    <section className="pb-10 lg:px-10 px-5">
      <div className="mx-auto">
        {/* Heading */}
        <div className="text-center lg:mb-14 mb-5">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Still Managing Your Fleet Through Calls, WhatsApp and Excel?
          </h2>

          <p className="text-lg text-[#434653] mx-auto">
            Manual operations lead to hidden costs and lost time. TCMS.ai
            eliminates the chaos.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => {

            return (
              <div
                key={index}
                className="bg-white p-6 flex flex-col gap-4 rounded-2xl border border-[#C3C6D5] hover:border-red-500 hover:shadow-lg transition-all duration-300"
              >
                <img src={problem.icon} className="h-8 w-8"/>

                <h3 className="text-xl font-semibold text-gray-900">
                  {problem.title}
                </h3>

                <p className="text-[#434653] leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 bg-blue-900 rounded-md p-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <h4 className="text-2xl font-bold !text-white text-center md:text-left">
            TCMS.ai Solves All Of These
          </h4>

          <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg cursor-pointer">
            See How It Works
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProblemsSection;
