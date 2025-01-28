// import React, { useState } from 'react';
// import { Ship, Plane } from 'lucide-react';

// function App() {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleClick = () => {
//     setIsFlipped(!isFlipped);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div
//         className="relative w-full max-w-4xl h-[400px] perspective-1000"
//         onClick={handleClick}
//       >
//         <div className={`relative w-full h-full duration-700 preserve-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}>
//           {/* Front Card */}
//           <div className="absolute w-full h-full backface-hidden">
//             <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
//               <div className="relative h-full">
//                 <img
//                   src="https://images.unsplash.com/photo-1577416412292-747c6607f055?auto=format&fit=crop&q=80"
//                   alt="Cargo ship and plane"
//                   className="w-full h-[400px] object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-pink-500/90 to-pink-500/70 flex items-center justify-between p-8">
//                   <div className="text-white max-w-md">
//                     <h2 className="text-3xl font-bold mb-4">ORDER AND SHIP INTERNATIONALLY</h2>
//                     <p className="mb-6">Curabitur congue finibus lorem, ut dignissim metus elementum sit amet. Mauris eget dapibus quam.</p>
//                     <button className="px-6 py-2 bg-white text-pink-500 rounded-full font-semibold hover:bg-pink-50 transition-colors">
//                       SEE MORE
//                     </button>
//                   </div>
//                   <Ship className="text-white w-16 h-16" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Back Card */}
//           <div className="absolute w-full h-full backface-hidden rotate-y-180">
//             <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
//               <div className="relative h-full">
//                 <img
//                   src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
//                   alt="Air freight"
//                   className="w-full h-[400px] object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-l from-pink-500/90 to-pink-500/70 flex items-center justify-between p-8">
//                   <Plane className="text-white w-16 h-16" />
//                   <div className="text-white max-w-md text-right">
//                     <h2 className="text-3xl font-bold mb-4">AIR FREIGHT SERVICES</h2>
//                     <p className="mb-6">Express delivery worldwide with our premium air freight services. Fast, reliable, and secure shipping solutions.</p>
//                     <button className="px-6 py-2 bg-white text-pink-500 rounded-full font-semibold hover:bg-pink-50 transition-colors">
//                       LEARN MORE
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

//working
// "use client";
// import React, { useState } from "react";
// import { Ship, Plane, Package } from "lucide-react";

// function Card() {
//   const [currentIndex, setCurrentIndex] = useState(1); // Start with middle card

//   const cards = [
//     {
//       title: "ORDER AND SHIP INTERNATIONALLY",
//       description:
//         "Curabitur congue finibus lorem, ut dignissim metus elementum sit amet. Mauris eget dapibus quam.",
//       image:
//         "https://images.unsplash.com/photo-1577416412292-747c6607f055?auto=format&fit=crop&q=80",
//       icon: Ship,
//       gradient: "from-pink-500/90 to-pink-500/70",
//     },
//     {
//       title: "AIR FREIGHT SERVICES",
//       description:
//         "Express delivery worldwide with our premium air freight services. Fast, reliable, and secure shipping solutions.",
//       image:
//         "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
//       icon: Plane,
//       gradient: "from-blue-500/90 to-blue-500/70",
//     },
//     {
//       title: "PACKAGE DELIVERY",
//       description:
//         "Reliable package delivery services for all your shipping needs. Fast and secure delivery guaranteed.",
//       image:
//         "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80",
//       icon: Package,
//       gradient: "from-purple-500/90 to-purple-500/70",
//     },
//     {
//       title: "PACKAGE DELIVERY",
//       description:
//         "Reliable package delivery services for all your shipping needs. Fast and secure delivery guaranteed.",
//       image:
//         "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80",
//       icon: Package,
//       gradient: "from-cyan-500/90 to-cyan-500/70",
//     },
//   ];

//   const handleCardClick = (index) => {
//     setCurrentIndex(index);
//   };

//   const getCardStyle = (index) => {
//     if (index === currentIndex) {
//       return "translate-x-0 scale-100 opacity-100 z-30";
//     } else if (
//       index === currentIndex - 1 ||
//       (currentIndex === 0 && index === cards.length - 1)
//     ) {
//       return "-translate-x-[calc(70%+2rem)] scale-90 opacity-70 z-20";
//     } else if (
//       index === currentIndex + 1 ||
//       (currentIndex === cards.length - 1 && index === 0)
//     ) {
//       return "translate-x-[calc(70%+2rem)] scale-90 opacity-70 z-20";
//     } else {
//       return "opacity-0 scale-75 z-10";
//     }
//   };

//   return (
//     <>
//       <div className="w-full py-12 px-4">
//         <div className="max-w-7xl mx-auto relative">
//           {/* Background Text */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <span className="text-[80px] md:text-[100px] font-black text-gray-100 select-none">
//               SERVICES
//             </span>
//           </div>

//           {/* Foreground Text */}
//           <div className="relative z-10">
//             <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 text-center">
//               OUR SERVICES
//             </h1>
//           </div>
//         </div>
//       </div>
//       <div className="min-h-screen  flex items-center justify-center p-4 overflow-hidden">
//         <div className="relative w-full max-w-4xl">
//           <div className="relative h-[400px] flex items-center justify-center">
//             {cards.map((card, index) => {
//               const Icon = card.icon;
//               return (
//                 <div
//                   key={index}
//                   className={`absolute w-full max-w-xl duration-500 cursor-pointer ${getCardStyle(
//                     index
//                   )}`}
//                   onClick={() => handleCardClick(index)}
//                 >
//                   <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
//                     <div className="relative h-full">
//                       <img
//                         src={card.image}
//                         alt={card.title}
//                         className="w-full h-[400px] object-cover"
//                       />
//                       <div
//                         className={`absolute inset-0 bg-gradient-to-r ${card.gradient} flex items-center justify-between p-8`}
//                       >
//                         <div className="text-white max-w-md">
//                           <h2 className="text-3xl font-bold mb-4">
//                             {card.title}
//                           </h2>
//                           <p className="mb-6">{card.description}</p>
//                           <button className="px-6 py-2 bg-white text-pink-500 rounded-full font-semibold hover:bg-pink-50 transition-colors">
//                             SEE MORE
//                           </button>
//                         </div>
//                         <Icon className="text-white w-16 h-16" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Card;

//working
// "use client";

// import React, { useState } from "react";
// import { Ship, Plane, Package } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import Image from "next/image";

// function CardCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(1); // Start with middle card

//   const cards = [
//     {
//       title: "ORDER AND SHIP INTERNATIONALLY",
//       description:
//         "Curabitur congue finibus lorem, ut dignissim metus elementum sit amet. Mauris eget dapibus quam.",
//       image: "/images/1.jpg",
//       icon: Ship,
//       gradient: "from-[#5db5e9] to-[#5db5e9]",
//     },
//     {
//       title: "AIR FREIGHT SERVICES",
//       description:
//         "Express delivery worldwide with our premium air freight services. Fast, reliable, and secure shipping solutions.",
//       image: "/images/3.jpg",
//       icon: Plane,
//       gradient: "from-[#5db5e9] to-[#5db5e9]",
//     },
//     {
//       title: "PACKAGE DELIVERY",
//       description:
//         "Reliable package delivery services for all your shipping needs. Fast and secure delivery guaranteed.",
//       image: "/images/2.jpg",
//       icon: Package,
//       gradient: "from-[#5db5e9] to-[#5db5e9]",
//     },
//     {
//       title: "CUSTOM LOGISTICS",
//       description:
//         "Tailored logistics solutions to meet your unique business needs. Efficient and cost-effective supply chain management.",
//       image: "/images/3.jpg",
//       icon: Package,
//       gradient: "from-[#5db5e9] to-[#5db5e9]",
//     },
//   ];

//   const handleCardClick = (index) => {
//     setCurrentIndex(index);
//   };

//   const getCardStyle = (index) => {
//     if (index === currentIndex) {
//       return "translate-x-0 scale-100 opacity-100 z-30";
//     } else if (
//       index === currentIndex - 1 ||
//       (currentIndex === 0 && index === cards.length - 1)
//     ) {
//       return "-translate-x-[calc(50%+1rem)] scale-90 opacity-70 z-20";
//     } else if (
//       index === currentIndex + 1 ||
//       (currentIndex === cards.length - 1 && index === 0)
//     ) {
//       return "translate-x-[calc(50%+1rem)] scale-90 opacity-70 z-20";
//     } else {
//       return "opacity-0 scale-75 z-10";
//     }
//   };

//   return (
//     <>
//       <div className="w-full pt-20 px-4 bg-white">
//         <div className="max-w-7xl mx-auto relative">
//           {/* Background Text */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <span className="text-[80px] md:text-[100px] font-black text-gray-100 select-none">
//               SERVICES
//             </span>
//           </div>

//           {/* Foreground Text */}
//           <div className="relative z-10">
//             <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 text-center">
//               OUR SERVICES
//             </h1>
//           </div>
//         </div>
//       </div>
//       <div className="h-full flex items-center justify-center py-20 overflow-hidden bg-white">
//         <div className="relative w-full max-w-6xl">
//           <div className="relative h-[400px] flex items-center justify-center">
//             {cards.map((card, index) => {
//               const Icon = card.icon;
//               return (
//                 <Card
//                   key={index}
//                   className={`absolute duration-500 cursor-pointer overflow-hidden w-full max-w-2xl ${getCardStyle(
//                     index
//                   )}`}
//                   onClick={() => handleCardClick(index)}
//                 >
//                   <div className="grid grid-cols-2 h-full">
//                     {/* Image Section */}
//                     <div className="relative h-full">
//                       <Image
//                         width={1000}
//                         height={1000}
//                         src={card.image || "/placeholder.svg"}
//                         alt={card.title}
//                         className="object-cover w-full h-full"
//                       />
//                     </div>

//                     {/* Content Section */}
//                     <div
//                       className={`bg-gradient-to-r ${card.gradient} p-8 flex flex-col justify-center text-white`}
//                     >
//                       <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
//                       <p className="mb-6 text-white/90">{card.description}</p>
//                       {/* <Button
//                         // variant="default"
//                         className={`self-start py-3 px-8 border-2 rounded-full bg-gradient-to-r ${card.gradient} text-white border-white hover:bg-white/10`}
//                       >
//                         SEE MORE
//                       </Button> */}
//                       <button className="self-start py-3 px-8   border-2 rounded-full text-white border-white hover:bg-white/10">
//                         SEE MORE
//                       </button>
//                     </div>
//                   </div>
//                 </Card>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CardCarousel;

"use client";

import React, { useState, useEffect } from "react";
import { Ship, Plane, Package } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

function CardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const cards = [
    {
      title: "ORDER AND SHIP INTERNATIONALLY",
      description:
        "Curabitur congue finibus lorem, ut dignissim metus elementum sit amet. Mauris eget dapibus quam.",
      image: "/images/1.jpg",
      icon: Ship,
      gradient: "from-[#5db5e9] to-[#5db5e9]",
    },
    {
      title: "AIR FREIGHT SERVICES",
      description:
        "Express delivery worldwide with our premium air freight services. Fast, reliable, and secure shipping solutions.",
      image: "/images/3.jpg",
      icon: Plane,
      gradient: "from-[#5db5e9] to-[#5db5e9]",
    },
    {
      title: "PACKAGE DELIVERY",
      description:
        "Reliable package delivery services for all your shipping needs. Fast and secure delivery guaranteed.",
      image: "/images/2.jpg",
      icon: Package,
      gradient: "from-[#5db5e9] to-[#5db5e9]",
    },
    {
      title: "CUSTOM LOGISTICS",
      description:
        "Tailored logistics solutions to meet your unique business needs. Efficient and cost-effective supply chain management.",
      image: "/images/3.jpg",
      icon: Package,
      gradient: "from-[#5db5e9] to-[#5db5e9]",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000); // Change card every 5 seconds

    return () => clearInterval(interval);
  }, [cards.length]);

  const handleCardClick = (index) => {
    setCurrentIndex(index);
  };

  const getCardStyle = (index) => {
    if (index === currentIndex) {
      return "translate-x-0 scale-100 opacity-100 z-30";
    } else if (
      index === currentIndex - 1 ||
      (currentIndex === 0 && index === cards.length - 1)
    ) {
      return "-translate-x-[calc(50%+1rem)] scale-90 opacity-70 z-20";
    } else if (
      index === currentIndex + 1 ||
      (currentIndex === cards.length - 1 && index === 0)
    ) {
      return "translate-x-[calc(50%+1rem)] scale-90 opacity-70 z-20";
    } else {
      return "opacity-0 scale-75 z-10";
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full pt-20 px-4 bg-white"
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
              SERVICES
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
              OUR SERVICES
            </h1>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="h-full flex items-center justify-center my-20 overflow-hidden bg-white"
      >
        <div className="relative w-full max-w-6xl">
          <div className="relative h-[400px] flex items-center justify-center">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Card
                  key={index}
                  className={`absolute duration-500 cursor-pointer overflow-hidden w-full max-w-2xl ${getCardStyle(
                    index
                  )}`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="grid grid-cols-2 h-full">
                    {/* Image Section */}
                    <div className="relative h-full">
                      <Image
                        width={1000}
                        height={1000}
                        src={card.image || "/placeholder.svg"}
                        alt={card.title}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Content Section */}
                    <div
                      className={`bg-gradient-to-r ${card.gradient} p-8 flex flex-col justify-center text-white`}
                    >
                      <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
                      <p className="mb-6 text-white/90">{card.description}</p>
                      <button className="self-start py-3 px-8 border-2 rounded-full text-white border-white hover:bg-white/10">
                        SEE MORE
                      </button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default CardCarousel;
