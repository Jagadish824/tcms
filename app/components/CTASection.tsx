import React from "react";

function CTASection() {
  return (
    <section className="py-10 lg:px-10 px-5 bg-[#00327D] text-white text-center overflow-hidden" data-aos="fade-up">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight !text-white" data-aos="fade-up">
          Ready To Grow Your Transport Business?
        </h2>

        {/* Description */}
        <p className="text-sm md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up">
          Join 500+ Malaysian transport companies using TCMS.ai to increase
          efficiency and cut costs.
        </p>

        {/* CTA Button */}
        <div>
          <button data-aos="fade-up" className="bg-white text-[#00327D] lg:px-10 lg:py-5 px-5 py-3 rounded-2xl lg:text-xl text-lg font-bold shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-white/20">
            Book Live Demo Now
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-sm md:text-base text-white/60" data-aos="fade-up">
          No credit card required. Setup in less than 48 hours.
        </p>
      </div>
    </section>
  );
}

export default CTASection;
