// "use client";

// import {
//   UserCircle2,
//   PenTool as Tool,
//   ShoppingCart,
//   Send,
//   Package,
// } from "lucide-react";

// export default function Services() {
//   const steps = [
//     {
//       number: 1,
//       title: "Register an account",
//       description:
//         "Enter required personal information to ensure order management and delivery",
//       icon: UserCircle2,
//       position: "top-0 -translate-y-32",
//     },
//     {
//       number: 2,
//       title: "Install purchasing tools",
//       description:
//         "Enter required personal information to ensure order management and delivery",
//       icon: Tool,
//       position: "-left-48 -translate-y-8",
//     },
//     {
//       number: 3,
//       title: "Select item, add to cart",
//       description:
//         "Enter required personal information to ensure order management and delivery",
//       icon: ShoppingCart,
//       position: "-bottom-32",
//     },
//     {
//       number: 4,
//       title: "Send and deposit order",
//       description:
//         "Enter required personal information to ensure order management and delivery",
//       icon: Send,
//       position: "-right-48 -translate-y-8",
//     },
//     {
//       number: 5,
//       title: "Receive goods and pay",
//       description:
//         "Enter required personal information to ensure order management and delivery",
//       icon: Package,
//       position: "top-0 -translate-y-32",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center p-4 my-10">
//       <div className="max-w-6xl w-full">
//         {/* Main Circle Container */}
//         <div className="relative w-[600px] h-[600px] mx-auto">
//           {/* Center Logo */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
//             <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center shadow-lg border-4 border-red-100">
//               <h2 className="text-2xl font-bold text-gray-800">JUANMIN</h2>
//             </div>
//           </div>

//           {/* Decorative Circle */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-2 border-dashed border-red-200" />

//           {/* Steps */}
//           {steps.map((step, index) => {
//             const angle = (index * 360) / steps.length;
//             const radius = 300; // Adjust this value to change the distance from center
//             const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
//             const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;

//             return (
//               <div
//                 key={step.number}
//                 className="absolute"
//                 style={{
//                   left: `calc(50% + ${x}px)`,
//                   top: `calc(50% + ${y}px)`,
//                   transform: "translate(-50%, -50%)",
//                 }}
//               >
//                 <div className="flex flex-col items-center gap-2 w-48">
//                   <div className="bg-white p-4 rounded-full shadow-lg border-2 border-red-100">
//                     <step.icon className="w-8 h-8 text-red-500" />
//                   </div>
//                   <div className="text-center">
//                     <div className="flex items-center gap-2 justify-center">
//                       <span className="text-red-500 font-bold">
//                         Step {step.number}
//                       </span>
//                     </div>
//                     <h3 className="font-semibold text-gray-800 mt-1">
//                       {step.title}
//                     </h3>
//                     <p className="text-sm text-gray-600 mt-1 max-w-[200px]">
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}

//           {/* Connecting Lines */}
//           <svg
//             className="absolute top-0 left-0 w-full h-full pointer-events-none"
//             viewBox="0 0 600 600"
//           >
//             <path
//               d="M300,100 A200,200 0 1,1 299.99,100"
//               fill="none"
//               stroke="#FEE2E2"
//               strokeWidth="2"
//               strokeDasharray="8 8"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }

// #2
// "use client";

// import {
//   UserCircle2,
//   Settings,
//   ShoppingCart,
//   Send,
//   Package,
// } from "lucide-react";

// export default function Home() {
//   const steps = [
//     {
//       number: 1,
//       title: "Register an account",
//       description:
//         "Enter required personal information in the box, be sure to enter accurate information to ensure order management and delivery",
//       icon: UserCircle2,
//     },
//     {
//       number: 2,
//       title: "Install purchasing tools",
//       description:
//         "Enter required personal information in the box, be sure to enter accurate information to ensure order management and delivery",
//       icon: Settings,
//     },
//     {
//       number: 3,
//       title: "Select item, add to cart",
//       description:
//         "Enter required personal information in the box, be sure to enter accurate information to ensure order management and delivery",
//       icon: ShoppingCart,
//     },
//     {
//       number: 4,
//       title: "Send and deposit order",
//       description:
//         "Enter required personal information in the box, be sure to enter accurate information to ensure order management and delivery",
//       icon: Send,
//     },
//     {
//       number: 5,
//       title: "Receive goods and pay",
//       description:
//         "Enter required personal information in the box, be sure to enter accurate information to ensure order management and delivery",
//       icon: Package,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-8">
//       <div className="max-w-[1000px] w-full">
//         {/* Main Circle Container */}
//         <div className="relative w-[800px] h-[800px] mx-auto">
//           {/* Center Logo */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
//             <div className="bg-white rounded-full w-40 h-40 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
//               <h2 className="text-3xl font-bold text-gray-800">JUANMIN</h2>
//             </div>
//           </div>

//           {/* Steps */}
//           {steps.map((step, index) => {
//             const angle = (index * 360) / steps.length - 90; // Start from top (-90 degrees)
//             const radius = 340; // Distance from center
//             const x = Math.cos(angle * (Math.PI / 180)) * radius;
//             const y = Math.sin(angle * (Math.PI / 180)) * radius;

//             return (
//               <div
//                 key={step.number}
//                 className="absolute"
//                 style={{
//                   left: `calc(50% + ${x}px)`,
//                   top: `calc(50% + ${y}px)`,
//                   transform: "translate(-50%, -50%)",
//                 }}
//               >
//                 <div className="flex flex-col items-center gap-4 w-64">
//                   {/* Icon */}
//                   <div className="relative">
//                     <div className="w-16 h-16 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center">
//                       <step.icon className="w-8 h-8 text-[#FF4D4F]" />
//                     </div>
//                   </div>

//                   {/* Content Card */}
//                   <div className="bg-white p-6 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] w-full">
//                     <div className="text-[#FF4D4F] font-semibold mb-2">
//                       Step {step.number}
//                     </div>
//                     <h3 className="font-bold text-gray-800 mb-2">
//                       {step.title}
//                     </h3>
//                     <p className="text-sm text-gray-500 leading-relaxed">
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}

//           {/* Connecting Lines */}
//           <svg
//             className="absolute top-0 left-0 w-full h-full pointer-events-none"
//             viewBox="0 0 800 800"
//           >
//             <path
//               d="M400,100 A300,300 0 1,1 399.99,100"
//               fill="none"
//               stroke="#FF4D4F"
//               strokeWidth="1.5"
//               strokeDasharray="4 4"
//               opacity="0.5"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }

// #3
// "use client";

// import {
//   UserCircle2,
//   Settings,
//   ShoppingCart,
//   Send,
//   Package,
// } from "lucide-react";
// import { useState } from "react";

// export default function Home() {
//   const [activeStep, setActiveStep] = useState(null);

//   const steps = [
//     {
//       number: 1,
//       title: "Register an account",
//       description:
//         "Enter required personal information in the box, be sure to enter accurate information to ensure order management and delivery",
//       icon: UserCircle2,
//     },
//     {
//       number: 2,
//       title: "Install purchasing tools",
//       description:
//         "Enter required personal information in the box, be sure to enter accurate information to ensure order management and delivery",
//       icon: Settings,
//     },
//     {
//       number: 3,
//       title: "Select item, add to cart",
//       description:
//         "Enter required personal information in the box, be sure to enter accurate information to ensure order management and delivery",
//       icon: ShoppingCart,
//     },
//     {
//       number: 4,
//       title: "Send and deposit order",
//       description:
//         "Enter required personal information in the box, be sure to enter accurate information to ensure order management and delivery",
//       icon: Send,
//     },
//     {
//       number: 5,
//       title: "Receive goods and pay",
//       description:
//         "Enter required personal information in the box, be sure to enter accurate information to ensure order management and delivery",
//       icon: Package,
//     },
//   ];

//   const handleStepClick = (stepNumber) => {
//     setActiveStep(activeStep === stepNumber ? null : stepNumber);
//   };

//   return (
//     <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-8 pt-20">
//       <div className="max-w-[1000px] w-full">
//         {/* Main Semicircle Container */}
//         <div className="relative w-[800px] h-[400px] mx-auto">
//           {/* Center Logo */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
//             <div className="bg-white rounded-full w-40 h-40 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
//               <h2 className="text-3xl font-bold text-gray-800">JUANMIN</h2>
//             </div>
//           </div>

//           {/* Steps */}
//           {steps.map((step, index) => {
//             const angle = (index * 180) / (steps.length - 1); // Spread across 180 degrees
//             const radius = 340; // Distance from center
//             const x = Math.cos(angle * (Math.PI / 180)) * radius;
//             const y = Math.sin(angle * (Math.PI / 180)) * radius;

//             return (
//               <div
//                 key={step.number}
//                 className="absolute"
//                 style={{
//                   left: `calc(50% + ${x}px)`,
//                   top: `calc(50% - ${y}px)`, // Subtract y to flip the semicircle upright
//                   transform: "translate(-50%, -50%)",
//                 }}
//               >
//                 <div className="flex flex-col items-center gap-4 w-64">
//                   {/* Icon */}
//                   <div
//                     className="relative cursor-pointer transition-transform hover:scale-110"
//                     onClick={() => handleStepClick(step.number)}
//                   >
//                     <div
//                       className={`w-16 h-16 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center transition-all duration-300 ${
//                         activeStep === step.number ? "bg-[#FF4D4F]" : ""
//                       }`}
//                     >
//                       <step.icon
//                         className={`w-8 h-8 transition-colors duration-300 ${
//                           activeStep === step.number
//                             ? "text-white"
//                             : "text-[#FF4D4F]"
//                         }`}
//                       />
//                     </div>
//                   </div>

//                   {/* Content Card - Only show when active */}
//                   {activeStep === step.number && (
//                     <div className="bg-white p-6 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] w-full animate-in fade-in slide-in-from-bottom duration-300">
//                       <div className="text-[#FF4D4F] font-semibold mb-2">
//                         Step {step.number}
//                       </div>
//                       <h3 className="font-bold text-gray-800 mb-2">
//                         {step.title}
//                       </h3>
//                       <p className="text-sm text-gray-500 leading-relaxed">
//                         {step.description}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             );
//           })}

//           {/* Connecting Lines */}
//           <svg
//             className="absolute top-0 left-0 w-full h-full pointer-events-none"
//             viewBox="0 0 800 400"
//           >
//             <path
//               d="M50,200 A350,350 0 0,1 750,200"
//               fill="none"
//               stroke="#FF4D4F"
//               strokeWidth="1.5"
//               strokeDasharray="4 4"
//               opacity="0.5"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }

// #4

// "use client";

// import {
//   UserCircle2,
//   Settings,
//   ShoppingCart,
//   Send,
//   Package,
// } from "lucide-react";
// import { useState } from "react";

// export default function Home() {
//   const [activeStep, setActiveStep] = useState(null);

//   const steps = [
//     {
//       number: 1,
//       title: "Register an account",
//       description:
//         "Enter required personal information in the box, be sure to enter accurate information to ensure order management and delivery",
//       icon: UserCircle2,
//     },
//     {
//       number: 2,
//       title: "Install purchasing tools",
//       description:
//         "Enter required personal information in the box, be sure to enter accurate information to ensure order management and delivery",
//       icon: Settings,
//     },
//     {
//       number: 3,
//       title: "Select item, add to cart",
//       description:
//         "Enter required personal information in the box, be sure to enter accurate information to ensure order management and delivery",
//       icon: ShoppingCart,
//     },
//     {
//       number: 4,
//       title: "Send and deposit order",
//       description:
//         "Enter required personal information in the box, be sure to enter accurate information to ensure order management and delivery",
//       icon: Send,
//     },
//     {
//       number: 5,
//       title: "Receive goods and pay",
//       description:
//         "Enter required personal information in the box, be sure to enter accurate information to ensure order management and delivery",
//       icon: Package,
//     },
//   ];

//   const handleStepClick = (stepNumber) => {
//     setActiveStep(activeStep === stepNumber ? null : stepNumber);
//   };

//   return (
//     <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-8">
//       <div className="max-w-[1000px] w-full">
//         {/* Main Circle Container */}
//         <div className="relative w-[800px] h-[800px] mx-auto">
//           {/* Center Logo */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
//             <div className="bg-white rounded-full w-40 h-40 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
//               <h2 className="text-3xl font-bold text-gray-800">JUANMIN</h2>
//             </div>
//           </div>

//           {/* Steps */}
//           {steps.map((step, index) => {
//             const angle = (index * 360) / steps.length; // Spread across 360 degrees
//             const radius = 340; // Distance from center
//             const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius; // Subtract 90 degrees to start from the bottom
//             const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;

//             return (
//               <div
//                 key={step.number}
//                 className="absolute"
//                 style={{
//                   left: `calc(50% + ${x}px)`,
//                   top: `calc(50% + ${y}px)`,
//                   transform: "translate(-50%, -50%)",
//                 }}
//               >
//                 <div className="flex flex-col items-center gap-4 w-64">
//                   {/* Icon */}
//                   <div
//                     className="relative cursor-pointer transition-transform hover:scale-110"
//                     onClick={() => handleStepClick(step.number)}
//                   >
//                     <div
//                       className={`w-16 h-16 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center transition-all duration-300 ${
//                         activeStep === step.number ? "bg-[#FF4D4F]" : ""
//                       }`}
//                     >
//                       <step.icon
//                         className={`w-8 h-8 transition-colors duration-300 ${
//                           activeStep === step.number
//                             ? "text-white"
//                             : "text-[#FF4D4F]"
//                         }`}
//                       />
//                     </div>
//                   </div>

//                   {/* Content Card - Only show when active */}
//                   {activeStep === step.number && (
//                     <div className="bg-white p-6 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] w-full animate-in fade-in slide-in-from-bottom duration-300 mt-4">
//                       <div className="text-[#FF4D4F] font-semibold mb-2">
//                         Step {step.number}
//                       </div>
//                       <h3 className="font-bold text-gray-800 mb-2">
//                         {step.title}
//                       </h3>
//                       <p className="text-sm text-gray-500 leading-relaxed">
//                         {step.description}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             );
//           })}

//           {/* Connecting Lines */}
//           <svg
//             className="absolute top-0 left-0 w-full h-full pointer-events-none"
//             viewBox="0 0 800 800"
//           >
//             <circle
//               cx="400"
//               cy="400"
//               r="340"
//               fill="none"
//               stroke="#FF4D4F"
//               strokeWidth="1.5"
//               strokeDasharray="4 4"
//               opacity="0.5"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }

//#5
"use client";

import {
  UserCircle2,
  Settings,
  ShoppingCart,
  Send,
  Package,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      number: 1,
      title: "Register an account",
      description:
        "Enter required personal information in the box, be sure to enter accurate information to ensure order management and delivery",
      icon: UserCircle2,
    },
    {
      number: 2,
      title: "Install purchasing tools",
      description:
        "Enter required personal information in the box, be sure to enter accurate information to ensure order management and delivery",
      icon: Settings,
    },
    {
      number: 3,
      title: "Select item, add to cart",
      description:
        "Enter required personal information in the box, be sure to enter accurate information to ensure order management and delivery",
      icon: ShoppingCart,
    },
    {
      number: 4,
      title: "Send and deposit order",
      description:
        "Enter required personal information in the box, be sure to enter accurate information to ensure order management and delivery",
      icon: Send,
    },
    {
      number: 5,
      title: "Receive goods and pay",
      description:
        "Enter required personal information in the box, be sure to enter accurate information to ensure order management and delivery",
      icon: Package,
    },
  ];

  const handleStepClick = (stepNumber) => {
    setActiveStep(activeStep === stepNumber ? null : stepNumber);
  };

  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center p-8">
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
              REGISTER
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
              REGISTRATION STEPS
            </h1>
          </motion.div>
        </div>
      </motion.div>
      {/* <div className="w-full bg-white pb-12 px-4">
        <div className="max-w-7xl mx-auto relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[80px] md:text-[100px] font-black text-gray-100 select-none">
              REGISTER
            </span>
          </div>


          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 text-center">
              REGISTRATION STEPS
            </h1>
          </div>
        </div>
      </div> */}
      <div className="max-w-[1000px] w-full py-10">
        {/* Main Half Circle Container */}
        <div className="relative w-[800px] h-[400px] mx-auto">
          {/* Center Logo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
            <div className="bg-white rounded-full w-40 h-40 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <h2 className="text-6xl font-bold text-gray-800">360</h2>
            </div>
          </div>

          {/* Steps */}
          {steps.map((step, index) => {
            const angle = (index * 180) / (steps.length - 1); // Spread across 180 degrees
            const radius = 340; // Distance from center
            const x = Math.cos(angle * (Math.PI / 180)) * radius;
            const y = Math.sin(angle * (Math.PI / 180)) * radius;

            return (
              <div
                key={step.number}
                className="absolute"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `${y}px`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="flex flex-col items-center gap-4 w-64">
                  {/* Icon */}
                  <div
                    className="relative cursor-pointer transition-transform hover:scale-110"
                    onClick={() => handleStepClick(step.number)}
                  >
                    <div
                      className={`w-16 h-16 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center transition-all duration-300 ${
                        activeStep === step.number ? "bg-[#5db5e9]" : ""
                      }`}
                    >
                      <step.icon
                        className={`w-8 h-8 transition-colors duration-300 ${
                          activeStep === step.number
                            ? "text-white"
                            : "text-[#5db5e9]"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Content Card - Only show when active */}
                  {activeStep === step.number && (
                    <div className="bg-white p-6 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] w-full animate-in fade-in slide-in-from-bottom duration-300 mt-4">
                      <div className="text-[#5db5e9] font-semibold mb-2">
                        Step {step.number}
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Connecting Lines */}
          <svg
            className="absolute bottom-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 800 400"
          >
            <path
              d="M50,0 A350,350 0 0,0 750,0"
              fill="none"
              stroke="#5db5e9"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
