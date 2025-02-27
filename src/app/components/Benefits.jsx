"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

function Benefits() {
  const benefits = [
    "Global reach with extensive carrier networks",
    "Expert team for complex logistics",
    "Advanced tracking technologies",
    "Customized solutions for your business",
    "24/7 customer support",
    "Cost-effective shipping options",
  ];
  return (
    <section className="w-full relative  bg-gradient-to-b from-gray-50 to-gray-100">
      <div
        className="absolute top-0 left-0 right-0 h-48 bg-white"
        style={{
          borderBottomLeftRadius: "100% 200px",
          borderBottomRightRadius: "100% 200px",
        }}
      />
      {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl p-8 shadow-xl"
        > */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full bg-white pt-10"
        // bg-gradient-to-b from-gray-50 to-gray-100
      >
        <div className="max-w-7xl mx-auto relative">
          {/* Background Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="text-[80px] md:text-[100px] font-black text-gray-100 select-none">
              BENEFITS
            </span>
          </motion.div>
          {/* Foreground Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative z-10"
          >
            <div className="text-center mb-16 ">
              <h1 className="text-4xl font-bold mb-2">
                <span className="text-gray-800">Benefits</span>{" "}
                <span className="text-gray-800">of</span>{" "}
                <span className=" text-[#5db5e9]">Partnering</span>
              </h1>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* <h2 className="text-4xl font-bold mb-12 text-center">
            Benefits of Partnering
          </h2> */}
      <div className="flex justify-between gap-4 items-center max-w-7xl mx-auto py-40">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative rounded-2xl overflow-hidden w-full h-full"
        >
          <img
            src="images/delivery2.jpeg"
            alt="Benefits"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="bg-[#5db5e9] p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Why Choose Us?
            </h3>
            <p className="text-slate-100">
              By choosing us, you're not just partnering with a service provider
              but with a trusted ally dedicated to simplifying your supply chain
              and helping your business thrive in a competitive global
              marketplace.
            </p>
          </div>
          <div className="bg-[#5db5e9] p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Global Reach
            </h3>
            <p className="text-slate-100">
              Extensive networks of carriers, agents, and logistics partners
              worldwide. Ensures streamlined operations, compliance with
              international trade regulations, and the efficient handling of
              customs clearance and documentation.
            </p>
          </div>
          <div className="bg-[#5db5e9] p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Expert Team
            </h3>
            <p className="text-slate-100">
              An expert team plays a crucial role in handling any complex
              logistics challenges, such as route optimization, cargo
              consolidation, and multimodal transport coordination.
            </p>
          </div>
          {/* <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-white shadow-xl p-4 rounded-lg"
                  >
                    <ChevronRight className="text-[#5db5e9]" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div> */}
        </motion.div>
      </div>
      {/* </motion.div> */}
    </section>
  );
}

export default Benefits;
