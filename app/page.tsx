"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProblemsSection from "./components/ProblemsSection";
import FleetTrackingSection from "./components/FleetTrackingSection";
import ShipmentVisibility from "./components/ShipmentVisibility";
import FuelSavingsSection from "./components/FuelSavingsSection";
import ComplianceSection from "./components/ComplianceSection";
import EcosystemSection from "./components/EcosystemSection";
import SavingsCalculator from "./components/SavingsCalculator";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css";
export default function Home() {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="overflow-hidden">
        <Navbar/>
        <Hero/>
        <ProblemsSection/>
        <FleetTrackingSection/>
        <ShipmentVisibility/>
        <FuelSavingsSection/>
        <ComplianceSection/>
        <EcosystemSection/>
        <SavingsCalculator/>
        <TestimonialsSection/>
        <PricingSection/>
        <CTASection/>
        <Footer/>
    </div>
  );
}
