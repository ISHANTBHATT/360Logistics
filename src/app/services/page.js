// import Image from "next/image";
// import React from "react";
// import { TramFront, PlaneTakeoff, Ship } from "lucide-react";
// function page() {
//   const services = [
//     {
//       title: "GROUND FREIGHT",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation commodo consequat.",
//       icon: TramFront,
//     },
//     {
//       title: "AIRFREIGHT",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation commodo consequat.",
//       icon: PlaneTakeoff,
//     },
//     {
//       title: "OCEAN FREIGHT",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation commodo consequat.",
//       icon: Ship,
//     },
//     {
//       title: "MULTI MODAL",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation commodo consequat.",
//       icon: TramFront,
//     },
//     {
//       title: "CUSTOM BROKERAGE",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation commodo consequat.",
//       icon: TramFront,
//     },
//     {
//       title: "CROSS BOARDER",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation commodo consequat.",
//       icon: TramFront,
//     },
//   ];
//   return (
//     <>
//       <div className="relative h-screen">
//         {/* Wave SVG */}
//         <div className="absolute bottom-0 w-full z-40">
//           <svg
//             width="100%"
//             height="200px"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill="white"
//               d="
//               M0 67
//               C 273,183
//                 822,-41
//                 1920.01,106
//               V 359
//               H 0
//               V 67
//               Z"
//             />
//           </svg>
//         </div>

//         {/* Content Container */}
//         <div className="relative h-[90vh] bg-gradient-to-r from-blue-700 to-cyan-400 flex items-center justify-center">
//           <div className="flex px-20">
//             <div className="flex flex-col justify-center gap-4 w-1/2">
//               <h1 className="text-white text-4xl font-bold">
//                 Get Insurance Policy and Save 20%!
//               </h1>
//               <p className="text-white/60 text-xl font-bold">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry and uses Latin words combined with a handful of model
//                 words.
//               </p>
//             </div>
//             <div className="w-1/2">
//               <Image
//                 src="/images/services.png"
//                 width={2000}
//                 height={500}
//                 className="w-full h-full"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="py-10">
//         <div className="border-y-2 border-gray-200 py-10">
//           <div className="flex w-full justify-center gap-4 ">
//             {services.map((service) => (
//               <div className="text-[#5db5e9] hover:text-[#4293C4] cursor-pointer flex border-r-2 border-gray-200 px-4 justify-center items-center gap-2">
//                 <service.icon className="w-8 h-8" />
//                 <h1>{service.title}</h1>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className="flex justify-center">
//           <div className="w-full flex flex-col gap-20">
//             {services.map((service) => (
//               <div className="w-full flex justify-center items-center">
//                 <div className="w-1/2">
//                   <Image
//                     src="/images/boxes3.png"
//                     width={1000}
//                     height={300}
//                     alt="boxes"
//                     className="w-80 h-80"
//                   />
//                 </div>
//                 <div className="w-1/2 flex flex-col px-20 text-left gap-4">
//                   <service.icon className="w-12 h-12 text-[#0089f2]" />
//                   <h1 className="text-4xl font-bold text-[#142752]">
//                     {service.title}
//                   </h1>
//                   <h1 className="text-xl text-black/50">
//                     {service.description}
//                   </h1>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default page;

// "use client";
// import Image from "next/image";
// import React from "react";
// import { TramFront, PlaneTakeoff, Ship } from "lucide-react";
// import { motion } from "framer-motion";

// function Page() {
//   const services = [
//     {
//       title: "GROUND FREIGHT",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation commodo consequat.",
//       icon: TramFront,
//     },
//     {
//       title: "AIRFREIGHT",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation commodo consequat.",
//       icon: PlaneTakeoff,
//     },
//     {
//       title: "OCEAN FREIGHT",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation commodo consequat.",
//       icon: Ship,
//     },
//     {
//       title: "MULTI MODAL",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation commodo consequat.",
//       icon: TramFront,
//     },
//     {
//       title: "CUSTOM BROKERAGE",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation commodo consequat.",
//       icon: TramFront,
//     },
//     {
//       title: "CROSS BOARDER",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation commodo consequat.",
//       icon: TramFront,
//     },
//   ];

//   return (
//     <>
//       <div className="relative h-screen">
//         {/* Wave SVG */}
//         <div className="absolute bottom-0 w-full z-40">
//           <svg
//             width="100%"
//             height="200px"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill="white"
//               d="
//                M0 67
//                C 273,183
//                  822,-41
//                  1920.01,106
//                V 359
//                H 0
//                V 67
//                Z"
//             />
//           </svg>
//         </div>
//         {/* Content Container */}
//         <div className="relative h-[90vh] bg-gradient-to-r from-blue-700 to-cyan-400 flex items-center justify-center">
//           <div className="flex px-20">
//             <div className="flex flex-col justify-center gap-4 w-1/2">
//               <h1 className="text-white text-4xl font-bold">
//                 Get Insurance Policy and Save 20%!
//               </h1>
//               <p className="text-white/60 text-xl font-bold">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry and uses Latin words combined with a handful of model
//                 words.
//               </p>
//             </div>
//             <div className="w-1/2">
//               <Image
//                 src="/images/services.png"
//                 width={2000}
//                 height={500}
//                 className="w-full h-full"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="py-10">
//         <div className="border-y-2 border-gray-200 py-10">
//           <div className="flex w-full justify-center gap-4">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="text-[#5db5e9] hover:text-[#4293C4] cursor-pointer flex border-r-2 border-gray-200 px-4 justify-center items-center gap-2"
//               >
//                 <service.icon className="w-8 h-8" />
//                 <h1>{service.title}</h1>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="flex flex-col gap-20 px-10 mt-10">
//           {services.map((service, index) => (
//             <motion.div
//               initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               key={index}
//               className={`w-full flex items-center ${
//                 index % 2 === 0 ? "flex-row" : "flex-row-reverse"
//               }`}
//             >
//               <div className="w-1/2 flex justify-center">
//                 <Image
//                   src="/images/boxes3.png"
//                   width={1000}
//                   height={300}
//                   alt="boxes"
//                   className="w-80 h-80"
//                 />
//               </div>
//               <div className="w-1/2 flex flex-col px-20 text-left gap-4">
//                 <service.icon className="w-12 h-12 text-[#0089f2]" />
//                 <h1 className="text-4xl font-bold text-[#142752]">
//                   {service.title}
//                 </h1>
//                 <h1 className="text-xl text-black/50">{service.description}</h1>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Page;

"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { TramFront, PlaneTakeoff, Ship } from "lucide-react";

function Page() {
  const services = [
    {
      title: "Freight Forwarding (AIR & OCEAN )",
      image: "/images/4.png",
      description: [
        "● Air Freight: Fast and reliable air transport solutions for time-sensitive shipments.",
        "●	Ocean Freight: Cost-effective sea freight services, including FCL (Full Container Load) and LCL (Less than Container Load) options. ",
        "●	Land Freight: Flexible road and rail transport for domestic and cross-border deliveries. ",
      ],
      icon: TramFront,
    },
    {
      title: "Supply Chain Management",
      image: "/images/5.png",
      description: [
        "●	End-to-End Solutions: Comprehensive management of supply chain processes to ensure efficiency and cost-effectiveness.",
        "●	Vendor Management: Coordinating with suppliers and stakeholders to maintain a smooth flow of goods.",
        "●	Demand Planning: Forecasting and aligning supply with market demands to prevent shortages or excess inventory.",
      ],
      icon: PlaneTakeoff,
    },
    {
      title: "E-Commerce Logistics (Cross Boarder )",
      image: "/images/6.png",
      description: [
        "●	Fulfilment Services: Picking, packing, and shipping e-commerce orders quickly and accurately.",
        "●	Returns Management: Streamlined reverse logistics for hassle-free returns and exchanges.",
        "●	Integration with Platforms: Seamless integration with e-commerce platforms like Shopify, Amazon, and WooCommerce.",
      ],
      icon: Ship,
    },
    {
      title: "3PL (Third-Party Logistics) Services",
      image: "/images/7.png",
      description: [
        "●	Outsourced Logistics: Managing warehousing, transportation, and distribution on behalf of businesses.",
        "●	Integrated Solutions: Customizable services tailored to specific supply chain needs.",
        "●	Cost Optimization: Reducing operational expenses through efficient logistics strategies.",
      ],
      icon: TramFront,
    },
    {
      title: "Project Cargo Logistics",
      image: "/images/8.png",
      description: [
        "●	Oversized and Heavy-Lift Cargo: Specialized handling for large, heavy, or complex shipments.",
        "●	End-to-End Execution: From site inspection to delivery, ensuring compliance and safety.",
      ],
      icon: TramFront,
    },
    {
      title: "Temperature-Controlled Logistics",
      image: "/images/9.png",
      description: [
        "●	Cold Chain Solutions: Transport and storage for perishable goods like food, pharmaceuticals, and chemicals.",
      ],
      icon: TramFront,
    },
    {
      title: "Specialized Services",
      image: "/images/10.png",
      description: [
        "●	Dangerous Goods Handling",
        "●	Time-Critical Deliveries",
        "●	Priority solutions for urgent and high-value & jewellery shipments ",
      ],
      icon: TramFront,
    },
    {
      title: "Domestic Logistics Service Offerings",
      image: "/images/11.png",
      description: [
        "●	Airfreight – Cost-effective & efficient delivery network to cater any demand anytime – secure space with all prime carriers",
        "●	Road Transportation -  Full Truckload (FTL)/ Less Than Truckload (LTL ) / Express Delivery ",
        "●	Rail Freight Services – Bulk Cargo – Ideal for transporting large volumes in cost effective solution, schedule services ",
      ],
      icon: TramFront,
    },
  ];

  return (
    <>
      <div className="relative h-screen">
        {/* Wave SVG */}
        <div className="absolute bottom-0 w-full z-40">
          <svg
            width="100%"
            height="200px"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="
                M0 67
                C 273,183
                  822,-41
                  1920.01,106
                V 359
                H 0
                V 67
                Z"
            />
          </svg>
        </div>
        {/* Content Container */}
        <div className="relative h-[90vh] bg-gradient-to-r from-blue-700 to-cyan-400 flex items-center justify-center">
          <div className="flex px-20 overflow-hidden">
            <motion.div
              initial={{
                opacity: 0,
                x: -500,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 2,
              }}
              className="flex flex-col justify-center gap-4 w-1/2"
            >
              <h1 className="text-white text-4xl font-bold">
                Get Insurance Policy and Save 20%!
              </h1>
              <p className="text-white/60 text-xl font-bold">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry and uses Latin words combined with a handful of model
                words.
              </p>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                x: 300,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 2,
              }}
              className="w-1/2"
            >
              <Image
                src="/images/services.png"
                width={2000}
                height={500}
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="border-y-2 border-gray-200 py-10">
          <div className="flex w-full justify-center gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-[#5db5e9] hover:text-[#4293C4] cursor-pointer flex border-r-2 border-gray-200 pr-4 justify-center items-center gap-2"
              >
                <service.icon className="w-8 h-8" />
                <h1 className="text-sm">{service.title}</h1>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-20 px-10 mt-10 overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`w-full flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="w-1/2 flex justify-center "
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <Image
                  src={service.image}
                  width={1000}
                  height={300}
                  alt="boxes"
                  className="w-80 h-80 rounded-3xl"
                />
              </motion.div>
              <motion.div
                className="w-1/2 flex flex-col px-20 text-left gap-4"
                initial={{ opacity: 0, x: index % 2 === 0 ? 500 : -500 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <service.icon className="w-12 h-12 text-[#0089f2]" />
                <h1 className="text-4xl font-bold text-[#142752]">
                  {service.title}
                </h1>
                {/* <h1 className="text-xl text-black/50">{service.description}</h1> */}
                <div className="mb-6 space-y-2 ">
                  {service.description.map((point, index) => (
                    <p
                      key={index}
                      className="text-xl text-black/50 flex items-center"
                    >
                      {/* <span className="mr-2">•</span> */}
                      {point}
                    </p>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Page;
