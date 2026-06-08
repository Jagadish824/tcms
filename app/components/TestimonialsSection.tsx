"use client";

import React from "react";
import CountUp from "react-countup";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const stats = [
  {
    value: 12000,
    suffix: "+",
    label: "Vehicles Managed",
  },
  {
    value: 1.5,
    suffix: "M+",
    decimals: 1,
    label: "Trips Completed",
  },
  {
    value: 99.9,
    suffix: "%",
    decimals: 1,
    label: "System Uptime",
  },
];

const testimonials = [
  {
    id: 1,
    quote:
      "TCMS.ai transformed our fleet operations. We used to spend hours on WhatsApp checking with drivers. Now, our customers track their own goods and our fuel costs have dropped significantly.",
    name: "Tan Sri Azman",
    role: "MD, Azman Global Logistics",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAH3hUQhkJ7BPmYWXe9BEMWAkCmpwOEGLKHd5cQ8ACGMT0D4u-RsLnLWYXv-vTUBrkqZM4Krs5Gs5NUHeDepm0rsOb_5wqtly2Jrdt45vm-pVMQNG-GGnqsU_LtJswCUrayqVSJ-avFoW2qR__TStbLYseLj1kzW7CedWR4wqFQRMG7oivHgPZK2rBJv2EAVslxiedj4ygFPbzgoJcPwhnVTOv-Kjn1vkE-N8j39podIhh3NHMnm_4soLUwVtMhW07bsYVIelGoI2o",
  },
  {
    id: 2,
    quote:
      "The APAD and JPJ compliance reminders are lifesavers. No more expired permits or fines. It's the only system built specifically for the way we work in Malaysia.",
    name: "Kevin Lim",
    role: "Founder, KL Freight Services",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBCjVd8qK1IRdR_sGg-AprqatPbJ5bW_3ZeB-4Dyaq2TXAB-QitfC5dR2zMlGZKPrdPW4VgCvW2m7NNHXXMwmMrtPEaZpWoQ27Fvi5rnr9be8A1YT742KK-k-__UI5p4TnPxp5IM6Esza0SxhFXAROTlAcN_mhVnQqOUmSXAVuAQDh7YAgmyp-0ywfLItHpnMP_YP386OMmP-TL9IhKmpZSQBS2EvnLIXLgCjzVhclutq_DUM0uyPRcOFFJZlVJRl-IMtcJZzOqDl0",
  },
  {
    id: 3,
    quote:
      "Our dispatching efficiency improved dramatically after implementing TCMS.ai. The real-time visibility has completely changed how we manage deliveries.",
    name: "Raj Kumar",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
  },
  {
    id: 4,
    quote:
      "Fuel monitoring alone paid for the software within months. The insights helped us reduce waste and optimize routes.",
    name: "Sarah Lee",
    role: "Fleet Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
  },
];

function TestimonialsSection() {
  return (
    <section className="py-10 bg-[#FFFFFF]">
      <div className="mx-auto lg:px-10 px-5">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-10 text-center mb-10">
          {stats.map((stat, index) => (
            <div key={index}>
              <h2 className="lg:text-5xl md:text-4xl text-3xl font-extrabold !text-[#00327D] mb-2">
                <CountUp
                  end={stat.value}
                  duration={3}
                  decimals={stat.decimals || 0}
                  separator=","
                />
                {stat.suffix}
              </h2>

              <p className="text-gray-600 lg:text-lg text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            768:{
                slidesPerView:2,
            }
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="!h-auto">
              <div className="h-full flex flex-col p-8 bg-[#EDEEEF] rounded-lg" data-aos="fade-up">
                <p className="text-gray-700 italic leading-relaxed mb-8 text-lg">
                  "{item.quote}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>

                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TestimonialsSection;
