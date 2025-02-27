"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
function Success() {
  // const successPoints = [
  //   {
  //     title: "Understanding Your Needs",
  //     description:
  //       "We analyze your operations, timelines, and budget constraints",
  //   },
  //   {
  //     title: "Customized Solutions",
  //     description:
  //       "Tailored services meeting your unique business requirements",
  //   },
  //   {
  //     title: "Precise Implementation",
  //     description:
  //       "Structured, detail-oriented approach to eliminate inefficiencies",
  //   },
  //   {
  //     title: "Continuous Tracking",
  //     description: "Advanced tracking technologies for end-to-end visibility",
  //   },
  // ];
  const successPoints = [
    {
      title: "Understanding Your Logistics Needs",
      description:
        "We begin by analyzing your business operations, shipment volumes, timelines, and budget constraints. This includes understanding your preferences for transportation modes.",
    },
    {
      title: "Designing Customized Logistics Plans",
      description:
        "We tailor our services to meet your unique business requirements, providing flexibility and scalability for your supply chain.",
    },
    {
      title: "Implementing The Solution With Precision",
      description:
        "Our process is structure, detail-oriented, and designed to eliminate inefficiencies and potential disruptions.",
    },
    {
      title: "Continuous Tracking For Optimal Visibility",
      description:
        "Ensuring shipments are monitored in real time to achieve optimal results. By leveraging advanced tracking technologies, we provide end-to-end visibility of your supply chain.",
    },
  ];
  return (
    <div className=" relative">
      <div
        className="absolute -top-24 left-0 right-0 h-48 bg-white"
        style={{
          borderTopLeftRadius: "100% 200px",
          borderTopRightRadius: "100% 200px",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full pb-12 px-4 bg-white"
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
              SUCCESS
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
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 text-center">
              SUCCESS
            </h1>
          </motion.div>
        </div>
      </motion.div>
      <section className="max-w-7xl mx-auto mb-20 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-8 items-center"
        >
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl font-bold bg-clip-text text-transparent bg-[#5db5e9]"
            >
              How We Ensure Success
            </motion.h1>
            <div className="space-y-2">
              <p className="text-lg text-slate-400 ">
                We ensure success by combining expertise, innovation, and a
                customer-centric approach to deliver outstanding logistics
                solutions.
              </p>
              <p className="text-lg text-slate-400">
                360 is Round the Clock - Around the Globe - for their customer
              </p>
            </div>

            <div className="grid gap-4">
              {successPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white shadow-xl p-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <ChevronRight className="text-[#5db5e9]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{point.title}</h3>
                    <p className=" text-slate-400">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-blue-400/50 rounded-2xl blur-3xl" />
            <img
              src="/images/delivery.jpg"
              alt="Logistics Operations"
              className="rounded-2xl shadow-2xl relative z-10 h-[700px]"
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Success;
