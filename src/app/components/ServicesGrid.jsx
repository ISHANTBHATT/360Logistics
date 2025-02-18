// import { Globe2, Clock, Plane, Package, CreditCard, Truck } from "lucide-react";

// const services = [
//   {
//     icon: Globe2,
//     title: "Delivery",
//     description:
//       "Sitting at home importing business goods, saves time and costs more than before.",
//   },
//   {
//     icon: Clock,
//     title: "24/7 support",
//     description:
//       "Free Consultation, support in finding sources of goods, support in counting goods",
//   },
//   {
//     icon: Plane,
//     title: "Order and ship internationally",
//     description:
//       "Order from all Chinese e-commerce websites such as taobao, 1688, tmall",
//   },
//   {
//     icon: Package,
//     title: "Easily manage orders",
//     description:
//       "The e-wallet system helps make quick transactions, accumulate points, receive incentives",
//   },
//   {
//     icon: CreditCard,
//     title: "Transaction alipay, wechat",
//     description:
//       "The e-wallet system helps make quick transactions, accumulate points and receive incentives",
//   },
//   {
//     icon: Truck,
//     title: "Sending from China to Vietnam",
//     description:
//       "Order from all Chinese e-commerce websites such as taobao, 1688, tmall",
//   },
// ];

// export default function ServicesGrid() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 relative py-20 bg-white">
//       {/* Vertical dotted lines */}
//       <div
//         className="hidden md:block absolute left-1/3 top-0 bottom-0 border-l border-dashed border-gray-200"
//         style={{
//           borderStyle: "dashed",
//           borderWidth: "0 0 0 2px",
//           borderSpacing: "0 8px",
//         }}
//       />
//       <div
//         className="hidden md:block absolute left-2/3 top-0 bottom-0 border-l border-dashed border-gray-200"
//         style={{
//           borderStyle: "dashed",
//           borderWidth: "0 0 0 2px",
//           borderSpacing: "0 8px",
//         }}
//       />

//       {/* Horizontal dotted line */}
//       <div
//         className="hidden md:block absolute left-0 right-0 top-1/2 border-t border-dashed border-gray-200"
//         style={{
//           borderStyle: "dashed",
//           borderWidth: "2px 0 0 0",
//           borderSpacing: "8px 0",
//         }}
//       />

//       {services.map((service, index) => {
//         const Icon = service.icon;
//         return (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center relative"
//           >
//             <div className="mb-4 p-3 rounded-full bg-blue-50">
//               <Icon className="w-8 h-8 text-[#5db5e9]" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//             <p className="text-gray-600 text-sm">{service.description}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { Globe2, Clock, Plane, Package, CreditCard, Truck } from "lucide-react";

const services = [
  {
    icon: Globe2,
    title: "Delivery",
    description:
      "Sitting at home importing business goods, saves time and costs more than before.",
  },
  {
    icon: Clock,
    title: "24/7 support",
    description:
      "Free Consultation, support in finding sources of goods, support in counting goods",
  },
  {
    icon: Plane,
    title: "Order and ship internationally",
    description:
      "Order from all Chinese e-commerce websites such as taobao, 1688, tmall",
  },
  {
    icon: Package,
    title: "Easily manage orders",
    description:
      "The e-wallet system helps make quick transactions, accumulate points, receive incentives",
  },
  {
    icon: CreditCard,
    title: "Transaction alipay, wechat",
    description:
      "The e-wallet system helps make quick transactions, accumulate points and receive incentives",
  },
  {
    icon: Truck,
    title: "Sending from China to Vietnam",
    description:
      "Order from all Chinese e-commerce websites such as taobao, 1688, tmall",
  },
];

export default function ServicesGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };

  const horizontalLineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 1 } },
  };

  const verticalLineVariants = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 1, delay: 0.8 } },
  };

  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 relative py-20 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Horizontal dotted line */}
      <motion.div
        className="hidden md:block absolute left-0 right-0 top-1/2 border-t border-dashed border-gray-200"
        style={{
          borderStyle: "dashed",
          borderWidth: "2px 0 0 0",
          borderSpacing: "8px 0",
          originX: 0,
        }}
        variants={horizontalLineVariants}
      />

      {/* Vertical dotted lines */}
      <motion.div
        className="hidden md:block absolute left-1/3 top-0 bottom-0 border-l border-dashed border-gray-200"
        style={{
          borderStyle: "dashed",
          borderWidth: "0 0 0 2px",
          borderSpacing: "0 8px",
          originY: 0,
        }}
        variants={verticalLineVariants}
      />
      <motion.div
        className="hidden md:block absolute left-2/3 top-0 bottom-0 border-l border-dashed border-gray-200"
        style={{
          borderStyle: "dashed",
          borderWidth: "0 0 0 2px",
          borderSpacing: "0 8px",
          originY: 0,
        }}
        variants={verticalLineVariants}
      />

      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center relative"
            variants={serviceVariants}
          >
            <div className="mb-4 p-3 rounded-full bg-blue-50">
              <Icon className="w-8 h-8 text-[#5db5e9]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
