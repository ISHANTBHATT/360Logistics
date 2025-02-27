"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Company data
const companies = [
  {
    id: 1,
    name: "Group Logistics",
    logo: "/images/grouplogistics.png",
    color: "bg-blue-500",
    title: "A brand to be Trusted Upon",
    description: "Group Logistics has mastered the science of global logistics",
  },
  {
    id: 2,
    name: "Reliable Retail",
    logo: "/images/reliable.jpg",
    color: "bg-blue-500",
    title: "Reliable – Retail Freight Solution",
    description: "Express Freight Solution",
  },
  {
    id: 3,
    name: "Express Freight",
    logo: "/images/Predentiosl.jpg",
    color: "bg-blue-500",
    title: "Exhibition Door To Door",
    description: "",
  },
  {
    id: 4,
    name: "Neutral Freight",
    logo: "/images/Pace-Express.png",
    color: "bg-blue-500",
    title: "Neutral Freight Solution",
    description: "",
  },
];

function CompanyLogosCircle() {
  const [selectedCompany, setSelectedCompany] = useState(null);

  // Calculate positions for logos in a circle
  const getPosition = (index, total, radius) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Start from top
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
    };
  };

  const handleLogoClick = (id) => {
    setSelectedCompany(selectedCompany === id ? null : id);
  };

  return (
    <div className="relative w-full max-w-4xl aspect-square flex items-center justify-center mb-10">
      {/* Circle background */}
      <div className="absolute w-[70%] h-[70%] rounded-full bg-gray-100 border-4 border-gray-200"></div>

      {/* Center logo */}
      <div className="absolute z-10 w-1/3 h-1/3 rounded-full bg-white flex items-center justify-center shadow-md">
        {/* <h2 className="text-2xl font-bold text-center">YOUR LOGO</h2> */}
        <Image
          src="/images/logo.png"
          alt="Your Logo"
          width={1000}
          height={1000}
          className="object-contain p-2 w-full h-full"
        />
      </div>

      {/* Company logos */}
      {companies.map((company, index) => {
        const position = getPosition(index, companies.length, 35);
        const percentX = 50 + position.x;
        const percentY = 50 + position.y;

        return (
          <div
            key={company.id}
            className="absolute cursor-pointer transition-transform hover:scale-110"
            style={{
              left: `${percentX}%`,
              top: `${percentY}%`,
              transform: "translate(-50%, -50%)",
            }}
            onClick={() => handleLogoClick(company.id)}
          >
            <div
              className={`w-20 h-20 md:w-32 md:h-32 rounded-full flex items-center justify-center ${
                selectedCompany === company.id ? "ring-4 ring-blue-500" : ""
              } bg-white shadow-md overflow-hidden`}
            >
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={company.name}
                width={1000}
                height={1000}
                className="object-contain p-2 w-full h-full"
              />
            </div>
          </div>
        );
      })}

      {/* Information boxes */}
      <AnimatePresence>
        {selectedCompany && (
          <>
            {companies
              .filter((company) => company.id === selectedCompany)
              .map((company) => {
                const position = getPosition(
                  companies.findIndex((c) => c.id === company.id),
                  companies.length,
                  40
                );
                const percentX = 50 + position.x;
                const percentY = 50 + position.y;

                return (
                  <motion.div
                    key={`info-${company.id}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute z-20 w-64 flex flex-col"
                    style={{
                      left: `${percentX}%`,
                      top: `${percentY}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      className={`${company.color} text-white p-4 rounded-md shadow-lg text-center`}
                    >
                      <h3 className="text-xl font-semibold mb-1">
                        {company.title}
                      </h3>
                    </div>

                    {company.description ? (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: { delay: 0.2 },
                        }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-white border border-gray-200 p-3 mt-2 rounded-md shadow-md"
                      >
                        <p>{company.description}</p>
                      </motion.div>
                    ) : null}
                  </motion.div>
                );
              })}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function GroupCompanies() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-white relative">
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
              COMPANIES
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
              GROUP COMPANIES
            </h1>
          </motion.div>
        </div>
      </motion.div>
      <CompanyLogosCircle />
    </main>
  );
}
