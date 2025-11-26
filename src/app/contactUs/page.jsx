"use client";

import Loading from "@/components/Loading/Loading";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactUs = () => {
  const [loading,setLoading] = useState(true)
      useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
  
      return () => clearTimeout(timer);
    }, []);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Thank you for reaching out! We will get back to you soon.");
    reset();
  };
  if(loading) return <Loading></Loading>
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
       <title>Contact us | Book Crafters</title>
      {/* Hero Section */}
      <section className="bg-pink-600 text-white py-24 text-center rounded-full">
        <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          We’re always happy to hear from readers, authors, and partners. Reach out with questions, suggestions, or just to say hello.
        </p>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-semibold text-pink-600 mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block font-medium">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full border border-gray-300 rounded-lg p-2 mt-1"
              />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full border border-gray-300 rounded-lg p-2 mt-1"
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block font-medium">Message</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="w-full border border-gray-300 rounded-lg p-2 mt-1"
              />
              {errors.message && <p className="text-red-500">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-8 flex justify-center space-x-6 text-pink-600">
            <a href="#" className="hover:text-pink-800"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-pink-800"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-pink-800"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-pink-800"><FaLinkedinIn size={20} /></a>
          </div>
        </div>

        {/* Map + Text */}
        <div className="flex flex-col gap-6">
          {/* Info Text */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-pink-600 mb-4">Our Location</h3>
            <p className="text-gray-700 mb-2">
              Visit us at our office in Dhaka, Bangladesh. We welcome all book enthusiasts to connect with us in person or virtually.
            </p>
            <p className="text-gray-700 mb-2">
              Our team is always ready to help you with book recommendations, partnership queries, or any questions you may have.
            </p>
            <p className="text-gray-700"><strong>Address:</strong> 123 Book Street, Dhaka, Bangladesh</p>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902593026197!2d90.39133791542696!3d23.7509034845891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7f4a78b1f45%3A0x5d76cbb6c3a64f2e!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1701000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;
