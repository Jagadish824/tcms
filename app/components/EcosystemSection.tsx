
import React from "react";
import { Truck, User, Users, ReceiptText, LucideIcon } from "lucide-react";

const nodes = [
  {
    icon: Users,
    title: "Customers",
    position: "top",
  },
  {
    icon: Truck,
    title: "Vehicles",
    position: "left",
  },
  {
    icon: User,
    title: "Drivers",
    position: "right",
  },
  {
    icon: ReceiptText,
    title: "Accounting",
    position: "bottom",
  },
];

function EcosystemSection() {
  return (
    <section className="py-10 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center md:mb-20 mb-5">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Everything Connected
          </h2>

          <p className="text-lg text-[#434653] mx-auto">
            The central brain of your logistics operation.
          </p>
        </div>

        {/* Mobile View */}
<div className="grid grid-cols-2 gap-4 md:hidden">
  {nodes.map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={index}
        className="bg-white border border-gray-200 rounded-2xl shadow-md p-5 text-center"
      >
        <Icon
          size={28}
          className="mx-auto text-[#00327D] mb-3"
        />

        <p className="font-semibold text-gray-900">
          {item.title}
        </p>
      </div>
    );
  })}

  <div className="col-span-2 bg-[#00327D] rounded-2xl p-6 text-center text-white shadow-xl">
    <h3 className="text-3xl font-bold !text-white">TCMS.ai</h3>
    <p className="text-sm tracking-[4px] mt-2">
      CORE HUB
    </p>
  </div>
</div>

        {/* Ecosystem */}
        <div className="relative w-full mx-auto h-[250px] hidden md:block">

          {/* Top Node */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2">
            <Node icon={Users} title="Customers" />
          </div>

          {/* Left Node */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <Node icon={Truck} title="Vehicles" />
          </div>

          {/* Right Node */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <Node icon={User} title="Drivers" />
          </div>

          {/* Bottom Node */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
            <Node icon={ReceiptText} title="Accounting" />
          </div>

          {/* Center Hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-70 h-70 rounded-2xl bg-[#00327D] border-4 border-blue-200 shadow-2xl flex flex-col items-center justify-center text-white animate-pulse">
              <h3 className="text-4xl  font-bold !text-white">TCMS.ai</h3>
              <p className="text-sm tracking-[4px] mt-2">
                CORE HUB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
interface NodeProps {
  icon: LucideIcon;
  title: string;
}

function Node({ icon: Icon, title }: NodeProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-lg px-10 py-4 text-center hover:scale-110 hover:shadow-xl transition-all duration-300">
      <Icon
        size={28}
        className="mx-auto text-[#00327D] mb-2"
      />
      <p className="font-semibold text-gray-900 text-lg">{title}</p>
    </div>
  );
}

export default EcosystemSection;