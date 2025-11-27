// components/Newsletter.jsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // placeholder: API call or email submission logic
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 px-6 bg-linear-to-r  bg-pink-300 md:rounded-full rounded-3xl ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center rounded-2xl bg-white  shadow-lg p-10"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Stay updated with the latest books, authors, and special recommendations.
        </p>

        {submitted ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 font-semibold text-lg"
          >
            Thank you for subscribing!
          </motion.p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 sm:gap-2 justify-center items-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-72 px-4 py-3 rounded-lg border border-gray-300  focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-800 dark:text-gray-100"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition"
            >
              Subscribe
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default Newsletter;
