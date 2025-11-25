
"use client"; 
import React from "react";
import { Book, PlusCircle, Eye } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <PlusCircle className="w-12 h-12 text-pink-600" />,
    title: "Add a Book",
    description: "Easily add your favorite books with all details like name, author, publisher, and price.",
  },
  {
    icon: <Eye className="w-12 h-12 text-pink-600" />,
    title: "Browse Books",
    description: "Explore books added by other users and find your next read.",
  },
  {
    icon: <Book className="w-12 h-12 text-pink-600" />,
    title: "Enjoy & Share",
    description: "Read, share, and manage your personal collection with ease.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 text-gray-800"
        >
          How It Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 mb-12"
        >
          Follow these simple steps to add, explore, and enjoy books on our platform.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
