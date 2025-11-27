"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { MdOutlineArrowOutward } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const slides = [
  {
    img: "/book1.jpg",
    title: "Discover Your Next Favorite Book",
    description: "Explore a vast collection of books across all genres and find your perfect read today.",
  },
  {
    img: "/book2.jpg",
    title: "Learn, Read, and Grow",
    description: "Get access to educational and inspiring reads that expand your mind and skills.",
  },
  {
    img: "/book3.jpg",
    title: "Adventure Awaits",
    description: "Dive into thrilling stories and epic adventures that take you on unforgettable journeys.",
  },
  {
    img: "/book4.jpg",
    title: "Knowledge at Your Fingertips",
    description: "Find books that help you learn, grow, and explore new ideas every day.",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      className="relative"
      onChange={(index) => setCurrentSlide(index)} // update current slide
    >
      {slides.map((slide, index) => (
        <div key={index} className="relative w-full h-[450px]">
          <Image
            src={slide.img}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover rounded-xl"
          />

          {/* Overlay content */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center md:items-start p-6 md:p-16 text-center md:text-left rounded-xl">
            <h1 className="text-2xl md:text-5xl font-bold text-white mb-4">
              {currentSlide === index && (
                <TypeAnimation
                  key={slide.title}            
                  sequence={[slide.title, 2000]} 
                  speed={50}                   
                  style={{ display: "inline-block" }}
                />
              )}
            </h1>
            <p className="text-white text-lg md:text-2xl mb-6 max-w-xl leading-relaxed">
              {slide.description}
            </p>
            <Link href={'/allBooks'} className="btn w-35 bg-linear-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold rounded-full flex items-center gap-2">
              All Books <MdOutlineArrowOutward />
            </Link>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default HeroSlider;
