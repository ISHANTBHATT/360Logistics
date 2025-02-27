"use client";

import React from "react";
import { motion } from "framer-motion";

function Affiliations() {
  const affiliations = [
    "/images/client1.png",
    "/images/client2.png",
    "/images/client3.png",
    "/images/client4.png",
    "/images/client5.png",
    "/images/client6.png",
  ];
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-gray-100">
      <div
        className="absolute top-0 left-0 right-0 h-48 bg-white"
        style={{
          borderBottomLeftRadius: "100% 200px",
          borderBottomRightRadius: "100% 200px",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full bg-white pt-10"
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
              AFFILIATION
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
                <span className="text-gray-800">OUR</span>{" "}
                <span className="text-[#5db5e9]">IMPRESSIVE</span>{" "}
                <span className="text-gray-800">MEMBERS</span>
              </h1>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <section className="max-w-7xl mx-auto  py-40">
        {/* <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Affiliations
        </motion.h2> */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-2 md:grid-cols-3  gap-8 items-center justify-items-center"
        >
          {affiliations.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white w-full h-full flex items-center justify-center shadow-xl p-6 rounded-xl hover:bg-white/20 transition-colors"
            >
              <img
                src={logo || "/placeholder.svg"}
                alt="Partner Logo"
                className="h-28 w-auto object-contain "
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default Affiliations;
