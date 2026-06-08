import React from "react";

const footerLinks = {
  Product: ["GPS Tracking", "Fuel Management", "Customer Portal", "Compliance"],
  Company: ["About Us", "Careers", "Press", "Blog"],
  Resources: ["Help Center", "Documentation", "Community"],
  Legal: ["Privacy Policy", "Terms of Service"],
};

function Footer() {
  return (
    <footer className="bg-white border-t">
      {/* Top Footer */}
      <div className="mx-auto lg:px-10 px-5 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2 md:col-span-4 col-span-2">
            <h2 className="text-3xl font-bold !text-[#00327D] mb-4">TCMS.ai</h2>

            <p className="text-gray-600 leading-relaxed max-w-sm">
              The leading transportation management system built specifically
              for the Malaysian logistics market.
            </p>
          </div>

          {/* Dynamic Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold uppercase tracking-wider !text-[#00327D] mb-4">
                {title}
              </h4>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#00327D] transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200">
        <div className="mx-auto px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center md:text-left">
            © 2024 TCMS.ai. Powered by AOT Technologies. All rights reserved.
            Registered in Malaysia.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-gray-500 hover:text-[#00327D] hover:scale-110 transition-all duration-300"
            >
              <img src="./smile.png"/>
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-[#00327D] hover:scale-110 transition-all duration-300"
            >
              <img src="./hug.png"/>
            </a>

            <a
              href="#"
              className=" hover:text-[#00327D] hover:scale-110 transition-all duration-300"
            >
              <img src="./mail.png"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
