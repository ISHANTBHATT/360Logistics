"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Page() {
  const [formData, setFormData] = useState({
    startLocation: "",
    time: "",
    payment: "",
    region: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 pt-40">
      <p className="text-6xl text-center font-bold">Contact</p>
      {/* Contact Form Section */}
      <section className="flex p-10">
        <div className="w-1/2 px-20 relative">
          {/* <div className="flex gap-2">
            <h1 className="text-2xl font-bold">What is Lorem Ipsum?</h1>
            <span>
              <MapPin className="w-8 h-8 text-[#5db5e9]" />
            </span>
          </div> */}

          {/* <p className="mt-4 text-[#515151]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p> */}
          <div className="flex flex-col gap-4 py-10 text-[#515151]">
            <div className="flex gap-4">
              <Phone className="w-6 h-6" />
              <p className="text-lg font-bold">
                +91 82859 84666, +91 98118 20939
              </p>
            </div>
            <div className="flex gap-4">
              <Mail className="w-6 h-6" />
              <p className="text-lg font-bold">
                Himanshi.tomar@360logistics.net, Sanjeev.pant@360logistics.net
              </p>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-12 h-10" />
              <p className="text-base font-bold">
                Khasra No. 1027/1, 2nd Floor Plot No. 29, Near Om Palace Hotel
                Road No. 6, Mahipalpur Extn. National Highway-8 New
                Delhi-110037, India
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center bottom-10 right-0 z-0 overflow-hidden">
            <Image
              src="/images/155.jpg"
              width={500}
              height={300}
              alt="delivery boy"
              className="w-80 h-80"
            />
          </div>
        </div>
        <div className="p-12 w-1/3 bg-white shadow-lg rounded-xl mx-auto mt-12">
          <h2 className="text-2xl font-bold text-center">Contact Us!</h2>
          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="name"
                name="startLocation"
                value={formData.startLocation}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="mail"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Payment</label>
              <input
                type="text"
                name="payment"
                value={formData.payment}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Region</label>
              <input
                type="text"
                name="region"
                value={formData.region}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Hero Section */}
      <section className="flex items-center  p-12 justify-between relative py-20">
        {/* <Image
          src="/images/truck.jpg"
          width={500}
          height={300}
          alt="Truck"
          className="pt-20"
        /> */}
        <motion.div
          initial={{
            opacity: 0,
            x: -550,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 3,
          }}
        >
          <video
            src="/videos/Trucking.mp4" // Replace with the actual video path
            width={500}
            height={300}
            autoPlay
            loop
            muted
            className="pt-20"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="w-1/2 h-[500px] bg-gray-200 rounded-lg overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1561.2045068744678!2d77.13129779417322!3d28.546157054779684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d0016352961%3A0x807317edb1375f15!2sKhasra%20no%20960%20mahipalpur!5e0!3m2!1sen!2sin!4v1740649540966!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* <div className="pr-20 z-10 pb-20">
          <h2 className="text-3xl font-bold mt-6">Vich the in any voling.</h2>
          <p className="mt-4 max-w-xl text-gray-600">
            This is a truck 106 with hazel wags, each on all readers, and
            Jubalis tire diamorample.This is a truck 106 with hazel wags, each
            on all readers, and Jubalis tire diamorample.This is a truck 106
            with hazel wags, each on all readers, and Jubalis tire diamorample.
          </p>
          <button className="mt-6 bg-black text-white px-6 py-2 rounded-lg">
            Preloaded
          </button>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 4,
          }}
          className="absolute bottom-10 right-0 z-0 overflow-hidden"
        >
          <Image
            src="/images/boxes3.png"
            width={500}
            height={300}
            alt="boxes"
            className="w-80 h-80"
          />
        </motion.div> */}
      </section>
    </div>
  );
}
