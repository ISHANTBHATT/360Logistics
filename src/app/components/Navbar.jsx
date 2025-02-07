"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <NavbarDemo className="top-2" />
      {/* <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p> */}
    </div>
  );
}

function NavbarDemo({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ",
        className
      )}
    >
      <Menu setActive={setActive} className="bg-neutral-800 ">
        <Image
          src="/images/logo2.png"
          width={500}
          height={100}
          className="w-24 h-24"
        />
        <MenuItem
          setActive={setActive}
          active={null}
          item="Home"
          href="/"
        ></MenuItem>
        <MenuItem
          setActive={setActive}
          active={null}
          item="About Us"
          href="/about"
        >
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div> */}
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Services"
          href="/services"
        >
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="GROUND FREIGHT"
              href="https://algochurn.com"
              src="/images/1.jpg"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="AIRFREIGHT"
              href="https://tailwindmasterkit.com"
              src="/images/3.jpg"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="OCEAN FREIGHT"
              href="https://gomoonbeam.com"
              src="/images/2.jpg"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="CROSS BOARDER"
              href="https://userogue.com"
              src="/images/1.jpg"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={null}
          item="Contact"
          href="/contact"
        >
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div> */}
        </MenuItem>
      </Menu>
    </div>
  );
}

// "use client";

// import React, { useState, useEffect } from "react";
// import {
//   HoveredLink,
//   Menu,
//   MenuItem,
//   ProductItem,
// } from "@/components/ui/navbar-menu";
// import { cn } from "@/lib/utils";
// import Image from "next/image";

// export function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="fixed top-0 left-0 right-0 z-50">
//       <NavbarDemo isScrolled={isScrolled} />
//     </div>
//   );
// }

// function NavbarDemo({ isScrolled }) {
//   const [active, setActive] = useState(null);

//   return (
//     <div
//       className={cn(
//         "transition-all duration-300 ease-in-out",
//         isScrolled ? "max-w-2xl mx-auto" : "w-full"
//       )}
//     >
//       <Menu
//         setActive={setActive}
//         className={cn(
//           "bg-neutral-800 transition-all duration-300 ease-in-out",
//           isScrolled ? "rounded-full mt-4" : "rounded-none"
//         )}
//       >
//         <Image src="/images/logo.svg" width={100} height={100} alt="Logo" />
//         <MenuItem setActive={setActive} active={active} item="Product" />
//         <MenuItem setActive={setActive} active={active} item="About Us" />
//         <MenuItem setActive={setActive} active={active} item="Products">
//           <div className="text-sm grid grid-cols-2 gap-10 p-4">
//             <ProductItem
//               title="Algochurn"
//               href="https://algochurn.com"
//               src="/images/DFOS.svg"
//               description="Prepare for tech interviews like never before."
//             />
//             <ProductItem
//               title="Tailwind Master Kit"
//               href="https://tailwindmasterkit.com"
//               src="/images/DFOS.svg"
//               description="Production ready Tailwind css components for your next project"
//             />
//             <ProductItem
//               title="Moonbeam"
//               href="https://gomoonbeam.com"
//               src="/images/DFOS.svg"
//               description="Never write from scratch again. Go from idea to blog in minutes."
//             />
//             <ProductItem
//               title="Rogue"
//               href="https://userogue.com"
//               src="/images/DFOS.svg"
//               description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
//             />
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Pricing">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/hobby">Hobby</HoveredLink>
//             <HoveredLink href="/individual">Individual</HoveredLink>
//             <HoveredLink href="/team">Team</HoveredLink>
//             <HoveredLink href="/enterprise">Enterprise</HoveredLink>
//           </div>
//         </MenuItem>
//       </Menu>
//     </div>
//   );
// }
