// components/FloatingLogos.js
import { shoe4, shoe5, shoe6, shoe7, shoe8 } from "@/public/assets/images";
import Image from "next/image";
import React from "react";

const logos = [shoe4, shoe5, shoe6, shoe7, shoe8,shoe4, shoe5, shoe6, shoe7, shoe8,shoe4, shoe5, shoe6, shoe7, shoe8,shoe4, shoe5, shoe6, shoe7, shoe8];

const FloatingLogos = () => {
  return (
    <div className="relative overflow-hidden h-32 bg-gray-50 mt-4">
      <div className="absolute flex space-x-10 animate-marquee whitespace-nowrap mt-3">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className="h-24"
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingLogos;
