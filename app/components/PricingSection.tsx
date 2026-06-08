"use client";

import React from "react";
import { Check, X } from "lucide-react";

const pricingPlans = [
  {
    title: "Starter",
    description: "For small fleets up to 10 vehicles.",
    price: "RM 199",
    period: "/mo",
    buttonText: "Start Free Trial",
    featured: false,
    features: [
      { text: "Live GPS Tracking", included: true },
      { text: "Trip Management", included: true },
      { text: "Basic Reports", included: true },
      { text: "Fuel Monitoring", included: false },
    ],
  },
  {
    title: "Growth",
    description: "For growing fleets up to 50 vehicles.",
    price: "RM 499",
    period: "/mo",
    buttonText: "Choose Growth",
    featured: true,
    badge: "MOST POPULAR",
    features: [
      { text: "All Starter Features", included: true },
      { text: "Fuel Monitoring & Alerts", included: true },
      { text: "Customer Portal Access", included: true },
      { text: "APAD Compliance Tool", included: true },
    ],
  },
  {
    title: "Enterprise",
    description: "For large fleets & custom needs.",
    price: "Custom",
    period: "",
    buttonText: "Contact Sales",
    featured: false,
    features: [
      { text: "Unlimited Vehicles", included: true },
      { text: "API & ERP Integrations", included: true },
      { text: "Dedicated Account Manager", included: true },
      { text: "Custom Driver Training", included: true },
    ],
  },
];

function PricingSection() {
  return (
    <section className="py-10 lg:px-10 px-5">
      <div className="lg:max-w-[85%] mx-auto">
        {/* Header */}
        <div className="text-center lg:mb-16 mb-5">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Simple, Transparent Pricing
          </h2>

          <p className="text-lg text-[#434653] mx-auto">
            Plans that scale with your transport business.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-3xl bg-white lg:p-8 p-5 transition-all duration-300 h-full ${
                plan.featured
                  ? "border-2 border-[#00327D] shadow-2xl lg:scale-105 hover:scale-110 z-10"
                  : "border border-[#C3C6D5] hover:border-[#00327D] hover:shadow-xl"
              }`}
            >
              {/* Badge */}
              {plan.featured && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-[#00327D] text-white px-5 py-2 rounded-full text-sm font-semibold">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Info */}
              <h3 className="text-2xl font-bold text-gray-900">{plan.title}</h3>

              <p className="text-gray-600 mt-2 mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <span className="lg:text-5xl md:text-4xl text-3xl font-bold text-gray-900">
                  {plan.price}
                </span>

                {plan.period && (
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 flex-grow mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`flex items-center gap-3 ${
                      !feature.included ? "text-gray-400" : "text"
                    }`}
                  >
                    {feature.included ? (
                      <Check size={24} className="text-[#006E25] shrink-0" />
                    ) : (
                      <X size={18} className="text-gray-400 shrink-0" />
                    )}

                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.featured
                    ? "bg-[#00327D] text-white hover:bg-[#00245A] hover:-translate-y-1 shadow-lg"
                    : "border border-[#00327D] text-[#00327D] hover:bg-[#00327D] hover:text-white"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
