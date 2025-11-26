"use client";

import React from "react";
import { motion } from "framer-motion";

const TopAuthors = () => {
  const authors = [
    { name: "Jhankar Mahbub", img: "https://i.ibb.co/FLWjFMrj/1677507599579.jpg" },
    { name: "Shahedul Hoque", img: "https://i.ibb.co/N67QXZFx/full.jpg" },
    { name: "Hasan Mahmud", img: "https://i.pinimg.com/736x/cc/6f/6d/cc6f6dc5566b5e3c10e6385408d0515c.jpg" },
  ];

  const books = [
    { title: "মারহাবা, জাভাস্ক্রিপ্টে মারো থাবা", author: "Jhankar Mahbub", img: "https://i.ibb.co/4RRYzfRj/javascript.jpg" },
    { title: "Clean Code", author: "Jhankar Mahbub", img: "https://i.pinimg.com/736x/11/eb/25/11eb252a18738c71703f618c2143c08d.jpg" },
    { title: "Eloquent JavaScript", author: "Jhankar Mahbub", img: "https://i.pinimg.com/736x/fd/8a/ee/fd8aee8c4b33984fa0776c57fa49cca2.jpg" },
    { title: "Learning MERN Stack", author: "Shahedul Hoque", img: "https://i.ibb.co/4wWSRGKj/s-hero2x.jpg" },
    { title: "MongoDB Essentials", author: "Shahedul Hoque", img: "https://i.ibb.co/jP9BpXrL/B34139-Cover.webp" },
    { title: "Node.js Deep Dive", author: "Hasan Mahmud", img: "https://i.ibb.co/7JHQXQYv/node.jpg" },
    { title: "Database Mastery", author: "Hasan Mahmud", img: "https://i.ibb.co/tPH1xxSc/515p-Yx-TE1-XL-AC-UF1000-1000-QL80.jpg" },
    { title: "Architectural Pattern", author: "Hasan Mahmud", img: "https://i.ibb.co/sJ2G1yQc/download-1.png" },
  ];

  // Animation variants for each author
  const authorVariants = [
    {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, type: "spring", stiffness: 100 } }
    },
    {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", stiffness: 120 } }
    },
    {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.8, type: "spring", stiffness: 120 } }
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 ">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-3">
          Top Authors & Their Books
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Explore the best authors and their top books. Click on any book to start reading.
        </p>
      </div>

      <div className="space-y-16">
        {authors.map((author, index) => {
          const authorBooks = books.filter(book => book.author === author.name);
          const variant = authorVariants[index % authorVariants.length];

          return (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={variant}
              className="max-w-6xl mx-auto"
            >
              {/* Author */}
              <div className="flex flex-col items-center text-center mb-6">
                <img
                  src={author.img}
                  alt={author.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover mb-3 border-4 border-pink-500"
                />
                <h3 className="text-lg sm:text-xl font-semibold">
                  {author.name}
                </h3>
              </div>

              {/* Author's Books */}
              <div
                className="grid gap-6 sm:gap-8 justify-center"
                style={{
                  gridTemplateColumns: `repeat(auto-fit, minmax(250px, 1fr))`,
                }}
              >
                {authorBooks.map((book, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 120 }}
                    className="bg-white  rounded-2xl shadow-lg p-4 sm:p-5 text-center mx-auto"
                  >
                    <img
                      src={book.img}
                      alt={book.title}
                      className="w-[250px] h-60 object-cover rounded-md mb-3 mx-auto"
                    />
                    <h4 className="font-semibold text-gray-800  text-md sm:text-lg">
                      {book.title}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TopAuthors;
