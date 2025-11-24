"use client";

import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { MdOutlineArrowOutward } from 'react-icons/md';

// Slide data
const slides = [
  { img: "/book1.jpg" },
  { img: "/book2.jpg" },
  { img: "/book3.jpg" },
  { img: "/book4.jpg" },
];

const HeroSlider = () => {
  return (
    <Carousel 
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      className="relative"
    >
      {slides.map((slide, index) => (
        <div key={index} className="relative w-full h-[70vh]">
          <Image
            src={slide.img}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover h-[300px]"
          />

          {/* Single button */}
          <button
            className="btn rounded-full absolute bottom-20 left-20 bg-primary flex items-center gap-1 font-bold"
          >
            {slide.buttonText} <MdOutlineArrowOutward />
          </button>
        </div>
      ))}
    </Carousel>
  );
};

export default HeroSlider;



