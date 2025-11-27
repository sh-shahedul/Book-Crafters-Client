"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Rocket } from "lucide-react";
import Head from "next/head";
import Loading from "@/components/Loading/Loading";


const About = () => {
   const [loading,setLoading] = useState(true)
    useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  const aboutsec = [
    { 
      name: "Shahedul Hoque", 
      role: "Full Stack Developer",
      img: "https://i.ibb.co/N67QXZFx/full.jpg" 
    },
    { 
      name: "Afsana Rahman",
      role: "UI/UX Designer", 
      img: "https://i.pinimg.com/736x/36/af/73/36af73ef3cd451d1e60d45899ee15043.jpg"
    },
    { 
      name: "Hasan Mahmud", 
      role: "Backend Engineer",
      img: "https://i.pinimg.com/736x/cc/6f/6d/cc6f6dc5566b5e3c10e6385408d0515c.jpg"
    },
  ];
  
    if(loading) return<Loading></Loading>
      
  return (
    <>
      
        <title>About us | Book Crafters</title>
     

      <section className="relative overflow-hidden py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto relative "
        >
          <h2 className="text-2xl md:text-3xl font-extrabold bg-clip-text text-pink-600 mb-6">
            About Book Crafters
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Book Crafters is a modern platform dedicated to book lovers, readers, and curious minds. Our mission is to connect people with meaningful books, insightful reviews, and a community of passionate readers. Whether you are looking for timeless classics, modern masterpieces, or hidden gems, we provide curated recommendations to help you discover your next favorite read.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10"
        >
          <div>
            <Rocket className="w-14 h-14 text-pink-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-3">
              🎯 Our Mission
            </h3>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
             At Book Crafters, our mission is to inspire a love for reading by connecting readers with meaningful books and insightful reviews. We strive to make discovering, exploring, and sharing stories effortless and enjoyable for everyone. Our goal is to create a vibrant community where knowledge, imagination, and curiosity thrive, helping readers grow, learn, and experience the joy of every book.
            </p>
          </div>
          <motion.img
            src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
            alt="mission illustration"
            className="rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
          />
        </motion.div>

        {/* Our Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center relative z-10"
        >
          <Users className="w-14 h-14 text-purple-500 mx-auto mb-3" />
          <h3 className="text-2xl md:text-3xl font-bold text-pink-600 dark:text-gray-100 mb-6">
            Meet Our Team
          </h3>
          <p className="text-gray-700 dark:text-gray-400 max-w-3xl mx-auto mb-10">
            Behind Book Crafters is a passionate team of developers, designers, and educators
            who believe in the power of technology-driven learning. Together, we build tools
            that inspire creativity, confidence, and collaboration.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {aboutsec.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl p-6 rounded-2xl border border-white/20 dark:border-gray-700 shadow-lg"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-pink-500"
                />
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{member.name}</h4>
                <p className="text-sm text-pink-600 dark:text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
