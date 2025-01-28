// import Image from "next/image";
// import React from "react";

// const StatCard = ({ number, text }) => (
//   <div className="bg-white rounded-lg shadow-lg p-4 min-w-[150px] text-center transform hover:scale-105 transition-transform duration-300">
//     <div className="text-red-500 font-bold text-2xl">{number}</div>
//     <div className="text-gray-600 text-sm mt-1">{text}</div>
//   </div>
// );
// function Experience() {
//   return (
//     <>
//       <div className="w-full py-20 px-4 bg-white">
//         <div className="max-w-7xl mx-auto relative">
//           {/* Background Text */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <span className="text-[80px] md:text-[100px] font-black text-gray-100 select-none">
//               OUTSTANDING
//             </span>
//           </div>

//           {/* Foreground Text */}
//           <div className="relative z-10">
//             <div className="text-center mb-16 ">
//               <h1 className="text-4xl font-bold mb-2">
//                 <span className="text-gray-800">OUR</span>{" "}
//                 <span className="text-red-500">IMPRESSIVE</span>{" "}
//                 <span className="text-gray-800">NUMBERS</span>
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
//         <div className="max-w-6xl w-full">
//           {/* Main Content */}
//           <div className="relative">
//             {/* Container Image */}
//             <div className="flex justify-center mb-8">
//               {/* <div className="relative">
//                 <div className="absolute -top-10 left-0 transform -translate-x-1/2 -rotate-6">
//                   <div className="bg-blue-500 p-4 rounded shadow-lg text-white font-bold">
//                     IMPORT
//                   </div>
//                 </div>
//                 <div className="absolute -top-10 right-0 transform translate-x-1/2 rotate-6">
//                   <div className="bg-red-500 p-4 rounded shadow-lg text-white font-bold">
//                     EXPORT
//                   </div>
//                 </div>
//                 <div className="w-64 h-32 border-4 border-gray-300 rounded-lg bg-white shadow-xl flex items-center justify-center">
//                   <div className="border-t-4 border-gray-300 absolute top-0 left-1/2 transform -translate-x-1/2 h-16 w-1"></div>
//                   <Image
//                     src="/images/export.png"
//                     width={1000}
//                     height={1000}
//                     className="w-40 h-40"
//                   />
//                 </div>
//               </div> */}
//               <Image
//                 src="/images/export.png"
//                 width={1000}
//                 height={1000}
//                 className="w-96 h-96"
//               />
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
//               <StatCard number="6+" text="Years of experience" />
//               <StatCard number="7+" text="Warehouses" />
//               <StatCard number="9101+" text="Customers are using it" />
//               <StatCard number="800+" text="Orders every day" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Experience;

"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const StatCard = ({ number, text }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="bg-white rounded-[20px] shadow-lg p-6 min-w-[150px] text-center transform hover:!scale-105 transition-transform duration-300"
  >
    <div className="text-[#5db5e9] font-bold text-3xl">{number}</div>
    <div className="text-gray-600 text-sm mt-2">{text}</div>
  </motion.div>
);

function Experience() {
  return (
    <div className="relative w-full bg-gradient-to-b from-gray-50 to-gray-100 pb-20">
      {/* Curved section */}
      <div
        className="absolute top-0 left-0 right-0 h-48 bg-white"
        style={{
          borderBottomLeftRadius: "100% 200px",
          borderBottomRightRadius: "100% 200px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 pt-8 pb-20">
        {/* Header */}
        {/* <div className="text-center mb-16 relative">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-gray-800">IMPRESSIVE</span>{" "}
            <span className="text-red-500">NUMBERS</span>
          </h1>
        </div> */}
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
                OUTSTANDING
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
                  <span className="text-gray-800">NUMBERS</span>
                </h1>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="relative">
          {/* Container Image */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex justify-center pt-4 mb-8"
          >
            <Image
              src={`/images/export.png`}
              width={1000}
              height={1000}
              alt="Import Export Containers"
              className="w-96 h-auto object-contain"
            />
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <StatCard number="6+" text="Years of experience" />
            <StatCard number="7+" text="Warehouses" />
            <StatCard number="9101+" text="Customers are using it" />
            <StatCard number="800+" text="Orders every day" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
