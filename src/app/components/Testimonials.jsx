// "use client";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Card } from "@/components/ui/card";
// import { Quote } from "lucide-react";

// const testimonials = [
//   {
//     text: "I am very satisfied with JuanMin's Chinese import service. They helped me find and import high quality goods at reasonable prices. The staff is very enthusiastic and professional, always ready to help me answer all my questions. Thanks to using the services of JuanMin, my business has become much more efficient.",
//     author: "JuanMin",
//     role: "Sales Manager",
//   },
//   {
//     text: "Outstanding service and support. The import process was seamless and the team was incredibly helpful throughout.",
//     author: "Sarah Chen",
//     role: "Business Owner",
//   },
//   {
//     text: "Their expertise in international trade made our expansion possible. Highly recommended!",
//     author: "Michael Lee",
//     role: "Operations Director",
//   },
// ];

// export function Testimonials() {
//   return (
//     <div className="w-full bg-white px-4 py-20">
//       <div className="max-w-7xl mx-auto relative">
//         {/* Background Text */}
//         {/* <div className="absolute inset-0 flex items-center justify-center">
//           <span className="text-[80px] md:text-[100px] font-black text-gray-100 select-none">
//             REVIEWS
//           </span>
//         </div>
//         <div className="relative z-10 text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
//             CUSTOMERS TALK ABOUT US
//           </h2>
//           <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//             Super Speed Import is the optimal import solution for you. We
//             provide customers with a rich source of goods at extremely cheap
//             prices.
//           </p>
//         </div> */}

//         {/* Testimonial Carousel */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <Carousel className="w-full max-w-2xl mx-auto">
//             <CarouselContent>
//               {testimonials.map((testimonial, index) => (
//                 <CarouselItem key={index}>
//                   <Card className="bg-red-500 text-white p-8 mx-4">
//                     <Quote className="w-12 h-12 mb-4 opacity-50" />
//                     <p className="text-lg mb-6">{testimonial.text}</p>
//                     <div>
//                       <p className="font-semibold">{testimonial.author}</p>
//                       <p className="text-sm opacity-75">{testimonial.role}</p>
//                     </div>
//                   </Card>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <CarouselPrevious className="left-0 -translate-x-full" />
//             <CarouselNext className="right-0 translate-x-full" />
//           </Carousel>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    text: "I am very satisfied with JuanMin's Chinese import service. They helped me find and import high quality goods at reasonable prices. The staff is very enthusiastic and professional, always ready to help me answer all my questions. Thanks to using the services of JuanMin, my business has become much more efficient.",
    author: "JuanMin",
    role: "Sales Manager",
  },
  {
    text: "Outstanding service and support. The import process was seamless and the team was incredibly helpful throughout.",
    author: "Sarah Chen",
    role: "Business Owner",
  },
  {
    text: "Their expertise in international trade made our expansion possible. Highly recommended!",
    author: "Michael Lee",
    role: "Operations Director",
  },
];

const profiles = Array.from({ length: 8 }, (_, i) => ({
  image: `/images/profile${i + 1}.jpg`,
  position: `var(--profile-${i + 1})`,
}));

export function Testimonials() {
  return (
    <div className="w-full bg-white px-4 py-20">
      <div className="max-w-7xl mx-auto relative">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[80px] md:text-[100px] font-black text-gray-100 select-none">
            REVIEWS
          </span>
        </div>

        {/* Foreground Text */}
        <div className="relative z-10 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            CUSTOMERS TALK ABOUT US
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Super Speed Import is the optimal import solution for you. We
            provide customers with a rich source of goods at extremely cheap
            prices.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative w-full h-full">
          {/* Scattered Profile Images */}
          <style jsx>{`
            .profile-scatter {
              --profile-1: translate(-1480%, -300%);
              --profile-2: translate(1020%, -300%);
              --profile-3: translate(-1120%, -100%);
              --profile-4: translate(830%, -50%);
              --profile-5: translate(-1180%, 200%);
              --profile-6: translate(1320%, -100%);
              --profile-7: translate(-1540%, 50%);
              --profile-8: translate(1140%, 200%);
            }
            @keyframes float {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-15px);
              }
            }

            .animate-float {
              animation: float 3s ease-in-out infinite;
            }
          `}</style>

          {/* <div className="absolute inset-0 profile-scatter">
            {profiles.map((profile, idx) => (
              <div
                key={idx}
                className="absolute left-1/2 top-1/2 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg"
                style={{ transform: profile.position }}
              >
                <img
                  src={profile.image || "/placeholder.svg"}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div> */}
          <div className="absolute inset-0 profile-scatter">
            {profiles.map((profile, idx) => (
              <div
                key={idx}
                className="absolute left-1/2 top-1/2"
                style={{ transform: profile.position }}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg animate-float">
                  {/* <img
                    src={profile.image || "/placeholder.svg"}
                    alt=""
                    className="w-full h-full object-cover"
                  /> */}
                  <Image
                    src={profile.image || "/placeholder.svg"}
                    width={1500}
                    height={48}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <Carousel className="w-full max-w-2xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-[#5db5e9] text-white p-8 mx-4">
                    <Quote className="w-12 h-12 mb-4 opacity-50" />
                    <p className="text-lg mb-6">{testimonial.text}</p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm opacity-75">{testimonial.role}</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-full" />
            <CarouselNext className="right-0 translate-x-full" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
