// "use client";

// import { motion } from "framer-motion";
// import {
//   Users,
//   Shield,
//   Lightbulb,
//   Target,
//   PocketIcon as FlexibleIcon,
//   BarChart3,
//   ArrowRight,
// } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";

// export default function Page() {
//   const fadeInUp = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.5 },
//   };

//   const values = [
//     {
//       title: "Customer-Centric Service",
//       icon: Users,
//       image: "/images/customer.png",
//       description:
//         "We prioritize our clients' needs, delivering tailored solutions that ensure their goods reach their destination seamlessly and on time.",
//       color: "from-orange-500 to-pink-500",
//     },
//     {
//       title: "Integrity & Transparency",
//       icon: Shield,
//       image: "/images/integrity.png",
//       description:
//         "We build trust through honest communication, ethical practices, and full transparency in all our operations and transactions.",
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       title: "Innovation",
//       icon: Lightbulb,
//       image: "/images/innovation.png",
//       description:
//         "We embrace technology and innovative strategies to optimize processes, improve efficiency, and adapt to the evolving needs of the global supply chain.",
//       color: "from-green-500 to-emerald-500",
//     },
//     {
//       title: "Excellence in Execution",
//       icon: Target,
//       image: "/images/excellence.png",
//       description:
//         "We strive for perfection in every shipment, ensuring accuracy, speed, and attention to detail at every step of the journey",
//       color: "from-purple-500 to-indigo-500",
//     },
//     {
//       title: "Adaptability",
//       icon: FlexibleIcon,
//       image: "/images/adaptability.png",
//       description:
//         "We are agile in responding to industry changes, market demands, and unforeseen challenges, ensuring uninterrupted service to our clients.",
//       color: "from-rose-500 to-red-500",
//     },
//     {
//       title: "Continuous Improvement",
//       icon: BarChart3,
//       image: "/images/continuous.jpg",
//       description:
//         "We are committed to exploring emerging technologies and incorporating them into our operations. From drone deliveries to autonomous vehicles, we are always seeking innovative ways to stay ahead in the logistics industry.",
//       color: "from-yellow-500 to-amber-500",
//     },
//     // Add image paths for other values...
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-40 px-4 sm:px-6 lg:px-8">
//       {/* Vision & Mission Section - Improved with gradient background */}
//       <motion.div
//         className="max-w-7xl mx-auto text-center mb-20"
//         initial="initial"
//         animate="animate"
//         variants={fadeInUp}
//       >
//         <div className="bg-gradient-to-r from-[#5db5e9]/50 to-primary-foreground/10 p-8 rounded-3xl">
//           <h1 className="text-4xl md:text-5xl font-bold pb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-[#142752]">
//             About Three Sixty Logistics
//           </h1>
//           <p className="text-lg text-black/50 mb-6 leading-relaxed">
//             At Three Sixty Logistics, we are more than just a logistics provider
//             – we are your trusted partner in delivering tailor-made solutions
//             that drive your business forward. With years of expertise and a
//             commitment to excellence, we specialize in streamlining supply
//             chains, optimizing transportation, and ensuring your goods arrive on
//             time, every time.
//           </p>
//           <p className="text-lg text-black/50  mb-6 leading-relaxed">
//             What sets us apart is our dedication to transparency, reliability,
//             and sustainability. We prioritize building long-term relationships
//             with our clients by delivering exceptional service, maintaining open
//             communication, and implementing eco-friendly practices to reduce our
//             carbon footprint.
//           </p>
//           <p className="text-lg text-black/50  mb-6 leading-relaxed">
//             Whether you're an Indian business or a Global enterprise, Three
//             Sixty Logistics is here to help you navigate the complexities of
//             logistics with efficiency, agility, and care. Together, we can
//             simplify your supply chain and empower your business to thrive in
//             today’s fast-paced world.
//           </p>
//           <div className="text-2xl font-bold text-black/50 ">
//             Round The Clock – Around the Globe
//           </div>
//         </div>
//       </motion.div>
//       <motion.div
//         className="max-w-4xl mx-auto text-center mb-20"
//         initial="initial"
//         animate="animate"
//         variants={fadeInUp}
//       >
//         <motion.div
//           className="mb-16 bg-gradient-to-r from-[#5db5e9]/50 to-primary-foreground/10 p-8 rounded-3xl"
//           variants={fadeInUp}
//         >
//           <h2 className="text-4xl font-bold text-[#142752] bg-clip-text bg-gradient-to-r from-primary to-primary-foreground mb-6">
//             Our Vision
//           </h2>
//           {/* <p className="text-lg text-muted-foreground leading-relaxed">
//             To be the global leader in logistics by delivering innovative
//             tailor-made sustainable supply chain services to empower businesses
//             to grow and connect communities worldwide mutually.
//           </p> */}
//           <ul className="space-y-4 text-left">
//             <li className="flex items-start text-black/50 text-lg">
//               <span className="bg-gradient-to-r from-primary to-primary-foreground w-4 h-2 rounded-full mt-2 mr-3 " />
//               To be the global leader in logistics by delivering innovative
//               tailor-made sustainable supply chain services to empower
//               businesses to grow and connect communities worldwide mutually.
//             </li>
//           </ul>
//         </motion.div>

//         <motion.div
//           className="bg-gradient-to-l from-[#5db5e9]/50 to-primary-foreground/10 p-8 rounded-3xl"
//           variants={fadeInUp}
//         >
//           <h2 className="text-4xl font-bold text-[#142752] bg-clip-text bg-gradient-to-r from-primary to-primary-foreground mb-6">
//             Our Mission
//           </h2>
//           {/* <p className="text-lg text-muted-foreground leading-relaxed">
//             Our mission is to provide efficient, tailored logistics and supply
//             chain solutions that prioritize reliability, transparency, and
//             customer satisfaction.
//           </p> */}
//           <ul className="space-y-4 text-left text-black/50 text-lg">
//             <li className="flex items-start">
//               <span className="bg-gradient-to-r from-primary to-primary-foreground w-2 h-2 rounded-full mt-2 mr-3" />
//               Provide efficient, tailored logistics and supply chain solutions
//               prioritizing reliability, transparency, and customer satisfaction.
//             </li>
//             <li className="flex items-start">
//               <span className="bg-gradient-to-r from-primary to-primary-foreground w-2 h-2 rounded-full mt-2 mr-3" />
//               Set the standard for excellence in transportation, warehousing,
//               and distribution through advanced technology.
//             </li>
//             <li className="flex items-start">
//               <span className="bg-gradient-to-r from-primary to-primary-foreground w-2 h-2 rounded-full mt-2 mr-3" />
//               Foster strong partnerships and commit to sustainable practices for
//               a better tomorrow.
//             </li>
//           </ul>
//         </motion.div>
//       </motion.div>

//       {/* Enhanced Values Section with Images */}
//       <motion.div
//         className="max-w-7xl mx-auto"
//         initial="initial"
//         animate="animate"
//         variants={fadeInUp}
//       >
//         <h2 className="text-4xl font-bold text-center text-[#142752] bg-clip-text bg-gradient-to-r from-primary to-primary-foreground mb-12">
//           Our Core Values
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {values.map((value, index) => (
//             <motion.div
//               key={value.title}
//               variants={fadeInUp}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ scale: 1.05 }}
//               className="h-full"
//             >
//               <Card className="group h-full hover:shadow-xl transition-all duration-300 border-0 overflow-hidden dark:bg-gray-800">
//                 <div className="relative h-[200px] overflow-hidden">
//                   <Image
//                     src={value.image}
//                     alt={value.title}
//                     fill
//                     className="object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
//                   <div
//                     className={`absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center backdrop-blur-sm`}
//                   >
//                     <value.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
//                     {value.title}
//                   </h3>
//                 </div>
//                 <CardContent className="p-6">
//                   <p className="text-muted-foreground leading-relaxed mb-4">
//                     {value.description}
//                   </p>
//                   <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <span className="text-sm font-medium">Discover More</span>
//                     <ArrowRight className="w-4 h-4 ml-1 animate-pulse" />
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import {
  Users,
  Shield,
  Lightbulb,
  Target,
  PocketIcon as FlexibleIcon,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Page() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const values = [
    {
      title: "Customer-Centric Service",
      icon: Users,
      image: "/images/customer.png",
      description:
        "We prioritize our clients' needs, delivering tailored solutions that ensure their goods reach their destination seamlessly and on time.",
      color: "from-orange-500 to-pink-500",
    },
    {
      title: "Integrity & Transparency",
      icon: Shield,
      image: "/images/integrity.png",
      description:
        "We build trust through honest communication, ethical practices, and full transparency in all our operations and transactions.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Innovation",
      icon: Lightbulb,
      image: "/images/innovation.png",
      description:
        "We embrace technology and innovative strategies to optimize processes, improve efficiency, and adapt to the evolving needs of the global supply chain.",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Excellence in Execution",
      icon: Target,
      image: "/images/excellence.png",
      description:
        "We strive for perfection in every shipment, ensuring accuracy, speed, and attention to detail at every step of the journey",
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Adaptability",
      icon: FlexibleIcon,
      image: "/images/adaptability.png",
      description:
        "We are agile in responding to industry changes, market demands, and unforeseen challenges, ensuring uninterrupted service to our clients.",
      color: "from-rose-500 to-red-500",
    },
    {
      title: "Continuous Improvement",
      icon: BarChart3,
      image: "/images/continuous.jpg",
      description:
        "We are committed to exploring emerging technologies and incorporating them into our operations. From drone deliveries to autonomous vehicles, we are always seeking innovative ways to stay ahead in the logistics industry.",
      color: "from-yellow-500 to-amber-500",
    },
    // Add image paths for other values...
  ];

  return (
    <div className="h-fu;; bg-white py-40 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-20"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <div className="relative overflow-hidden rounded-[40px] p-1">
          <div className="rounded-[36px] overflow-hidden bg-white">
            <div className="p-12 space-y-8">
              <h1 className="text-5xl md:text-6xl py-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#5db5e9] to-[#5db5e9]">
                About Three Sixty Logistics
              </h1>
              <p className="text-lg text-black/50  leading-relaxed">
                At Three Sixty Logistics, we are more than just a logistics
                provider – we are your trusted partner in delivering tailor-made
                solutions that drive your business forward. With years of
                expertise and a commitment to excellence, we specialize in
                streamlining supply chains, optimizing transportation, and
                ensuring your goods arrive on time, every time.
              </p>
              <p className="text-lg text-black/50   leading-relaxed">
                What sets us apart is our dedication to transparency,
                reliability, and sustainability. We prioritize building
                long-term relationships with our clients by delivering
                exceptional service, maintaining open communication, and
                implementing eco-friendly practices to reduce our carbon
                footprint.
              </p>
              <p className="text-lg text-black/50   leading-relaxed">
                Whether you're an Indian business or a Global enterprise, Three
                Sixty Logistics is here to help you navigate the complexities of
                logistics with efficiency, agility, and care. Together, we can
                simplify your supply chain and empower your business to thrive
                in today’s fast-paced world.
              </p>
              <div
                className="inline-block bg-[#5db5e9] text-white px-8 py-3 rounded-full 
                hover:bg-[#4ca4d8] transition-colors cursor-pointer"
              >
                Round The Clock – Around the Globe
              </div>
            </div>
          </div>
          <div
            className="absolute inset-0 border-[3px] border-[#5db5e9] rounded-[40px] 
            pointer-events-none"
          />
        </div>
      </motion.div>

      {/* Vision & Mission Section */}
      <motion.div
        className="max-w-4xl mx-auto space-y-20 mb-20"
        variants={fadeInUp}
      >
        <div className="relative group">
          <div
            className="absolute -inset-1 bg-gradient-to-r from-[#5db5e9] to-[#5db5e9]
            rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity"
          />
          <div className="relative bg-white rounded-3xl p-8 ">
            <h2 className="text-4xl font-bold text-black mb-6">Our Vision</h2>
            <ul className="space-y-4 text-left">
              <li className="flex items-start text-black/50 text-lg">
                <span className="w-2 h-3 bg-[#5db5e9] rounded-full mt-2 pr-3 mr-3" />
                To be the global leader in logistics by delivering innovative
                tailor-made sustainable supply chain services to empower
                businesses to grow and connect communities worldwide mutually.
              </li>
            </ul>
          </div>
        </div>

        <div className="relative group">
          <div
            className="absolute -inset-1 bg-gradient-to-r from-[#5db5e9] to-[#5db5e9] 
            rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity"
          />
          <div className="relative bg-white rounded-3xl p-8 ">
            <h2 className="text-4xl font-bold text-black mb-6">Our Mission</h2>
            <ul className="space-y-4 text-left text-black/50 text-lg">
              <li className="flex items-start">
                <span className="w-2 h-3 bg-[#5db5e9] rounded-full mt-2 pr-3 mr-3" />
                Our mission is to provide efficient, tailored logistics and
                supply chain solutions that prioritize reliability,
                transparency, and customer satisfaction.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-3 bg-[#5db5e9] rounded-full mt-2 pr-3 mr-3" />
                We aim to set the standard for excellence in transportation,
                warehousing, and distribution by leveraging advanced technology,
                fostering strong partnerships, and committing to sustainable
                practices for a better tomorrow
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Core Values Section */}
      <motion.div className="max-w-7xl mx-auto" variants={fadeInUp}>
        <h2 className="text-4xl font-bold text-center text-black mb-16">
          Our Core Values
        </h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div
                className="absolute -inset-0.5 bg-gradient-to-br from-[#5db5e9] to-black 
                rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"
              />
              <Card
                className="relative bg-white rounded-2xl border-2 border-black/10 
                overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div
                    className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-[#5db5e9] 
                    flex items-center justify-center backdrop-blur-sm"
                  >
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {value.title}
                  </h3>
                  <p className="text-black/70 leading-relaxed mb-4">
                    {value.description}
                  </p>
                  <div
                    className="flex items-center text-[#5db5e9] opacity-0 
                    group-hover:opacity-100 transition-opacity"
                  >
                    <span className="text-sm font-medium">Discover More</span>
                    <ArrowRight className="w-4 h-4 ml-1 animate-pulse" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="h-full"
            >
              <Card
                className="group h-full rounded-2xl hover:shadow-xl transition-all duration-300  overflow-hidden dark:bg-gray-800"
                //               className="relative bg-white rounded-2xl border-2 border-black/10
                // overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                  <div
                    className={`absolute top-4 right-4 w-12 h-12 rounded-lg bg-[#5db5e9] flex items-center justify-center backdrop-blur-sm`}
                  >
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                    {value.title}
                  </h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
