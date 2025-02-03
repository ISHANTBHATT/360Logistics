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
    <div className="min-h-screen bg-white text-gray-800 pt-20">
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

        <div className="pr-20 z-10 pb-20">
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
        </motion.div>
      </section>

      <p className="text-6xl text-center font-bold">Contact</p>
      {/* Contact Form Section */}
      <section className="flex p-10">
        <div className="w-1/2 p-20 relative">
          <div className="flex gap-2">
            <h1 className="text-2xl font-bold">What is Lorem Ipsum?</h1>
            <span>
              <MapPin className="w-8 h-8 text-[#5db5e9]" />
            </span>
          </div>

          <p className="mt-4 text-[#515151]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="flex flex-col gap-4 py-10 text-[#515151]">
            <div className="flex gap-4">
              <Phone className="w-6 h-6" />
              <p className="text-lg font-bold">+91 9999999999</p>
            </div>
            <div className="flex gap-4">
              <Mail className="w-6 h-6" />
              <p className="text-lg font-bold">info989@mail.com</p>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-6 h-6" />
              <p className="text-lg font-bold">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="absolute bottom-10 right-0 z-0 overflow-hidden">
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
          <h2 className="text-2xl font-bold text-center">Persona Contact!</h2>
          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700">Start Location</label>
              <input
                type="text"
                name="startLocation"
                value={formData.startLocation}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Time</label>
              <input
                type="time"
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
              Add Input
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
