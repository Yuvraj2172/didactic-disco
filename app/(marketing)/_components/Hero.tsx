import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div
          className="relative w-[300px] h[300px] 
        sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]"
        >
          <Image
            className="object-contain"
            src="/documents.png"
            alt="Hero Image"
            fill
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block ">
          <Image
            src="/reading.png"
            alt="reading"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
