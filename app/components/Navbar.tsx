"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLink =
        "text-[#434653] hover:text-[#00327D] border-b-2 border-transparent hover:border-[#00327D] pb-1 transition-all duration-300 cursor-pointer";

    const activeNavLink =
        "text-[#00327D] font-semibold border-b-2 border-[#00327D] pb-1 transition-all duration-300";

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-200" data-aos="fade-down">
            <div className="mx-auto h-16 px-6 lg:px-10 flex items-center justify-between">

                {/* Logo */}
                <div className="text-2xl font-bold text-[#00327D]">
                    TCMS.ai
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-10">
                    <a href="#" className={activeNavLink}>
                        Solutions
                    </a>

                    <a href="#" className={navLink}>
                        The Advantage
                    </a>

                    <a href="#" className={navLink}>
                        Platform
                    </a>

                    <a href="#" className={navLink}>
                        Contact
                    </a>
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex items-center gap-6">
                    <button className="font-semibold text-[#00327D] hover:text-[#001f4d] transition-colors">
                        Login
                    </button>

                    <button className="bg-[#00327D] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#F3F4F5] hover:text-black transition-all duration-300">
                        Book Demo
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-[#00327D]"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile & Tablet Menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ${
                    isOpen
                        ? "max-h-[500px] border-t border-gray-200"
                        : "max-h-0"
                }`}
            >
                <div className="bg-white px-6 py-5 flex flex-col gap-5">

                    <a
                        href="#"
                        className="text-[#00327D] font-semibold"
                        onClick={() => setIsOpen(false)}
                    >
                        Solutions
                    </a>

                    <a
                        href="#"
                        className="text-[#434653]"
                        onClick={() => setIsOpen(false)}
                    >
                        The Advantage
                    </a>

                    <a
                        href="#"
                        className="text-[#434653]"
                        onClick={() => setIsOpen(false)}
                    >
                        Platform
                    </a>

                    <a
                        href="#"
                        className="text-[#434653]"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </a>

                    <hr />

                    <button className="text-left font-semibold text-[#00327D]">
                        Login
                    </button>

                    <button className="bg-[#00327D] text-white py-3 rounded-md font-semibold">
                        Book Demo
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;