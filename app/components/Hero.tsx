import { LocateIcon, MapPin, PlayCircle } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <section className="lg:pt-32 pt-25 md:pb-20 pb-10 lg:px-10 px-5">
      <div className="mx-auto">
        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 md:gap-16 gap-5 items-center">
          {/* Left Content */}
          <div className="lg:space-y-8 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#191C1D] leading-tight">
              Run Your Entire Transport Business From{" "}
              <span className="text-[#00327D]">One Place.</span>
            </h1>

            <p className="text-lg text-[#434653] lg:w-[80%] leading-relaxed">
              Track vehicles, manage trips, monitor fuel, automate compliance,
              invoice customers, and grow your transport business with complete
              visibility.
            </p>

            <div className="flex md:flex-row flex-col gap-4">
              <button className="bg-[#00327D] text-white px-8 py-4 w-full lg:w-fit rounded-lg font-semibold shadow-lg hover:bg-blue-800 transition duration-300 hover:-translate-y-1">
                Book Live Demo
              </button>

              <button className="bg-white border border-[#C3C6D5] text-[#191C1D] w-full lg:w-fit  px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-100 transition duration-300">
                <span>
                  <PlayCircle size={20}/>
                </span>
                Watch 2-Minute Demo
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/10]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuByeQbnpE06XNV9uWGPcJqB3ZHxQvK1DRlTa6v_-HTjS9MnsgCiW1sF1nOyzrPG-PFcL2hNbexS5Q_RPBCG2YYSJ0DfvBZH5LzJe4sgpXTop4ZvEptNhz1mZ19RHTw4mddCFMwI08RiOzCTBxeUzc9PKCqxMNqEBK_RpHznjE4XQenkH3qrEj0H3oFrZ0F-1Fd_7knZN_7Bgjudp5c4mE1LGRYoK3ElGEHD0gGFKhZicmpFJdLbJ5PkrYj1JPIkCOdinIxe0UZdK8A"
              alt="Transport Fleet"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </div>

        {/* Trust Row */}
        <div className="mt-10 border-t-2 border-[#C3C6D5] pt-8">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 text-sm font-semibold uppercase tracking-wider text-gray-600">

            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#00327D]">
                <img src="./locationIcon.png"/>
              </span>
              <p className="text-sm text-[#434653]">GPS Tracking</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#00327D]">
                <img src="./claimIcon.png"/>
              </span>
              <p className="text-sm text-[#434653]">APAD Compliance</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-700">
                <img src="./vanIcon.png"/>
              </span>
              <p className="text-sm text-[#434653]">Fleet Management</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#00327D]">
                <img src="./customerIcon.png"/>
              </span>
              <p className="text-sm text-[#434653]">Customer Portal</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">
                <img src="./payIcon.png"/>
              </span>
              <p className="text-sm text-[#434653]">Payroll & Accounting</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;