"use client";

import React from "react";
import { useForm } from "react-hook-form";

const AddBookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitHandler = async (data) => {
    try {
      // Convert numeric fields
      data.rating = parseFloat(data.rating);
      data.totalPages = parseInt(data.totalPages);
      data.price = parseFloat(data.price);

      // Convert tags to array
      if (data.tags) data.tags = data.tags.split(",").map(tag => tag.trim());
      else data.tags = [];

      // Optional: dateAdded as string (frontend) or leave backend to add Date object
      data.dateAdded = new Date().toISOString().split("T")[0];

      const response = await fetch("http://localhost:5000/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Failed to add book");
      }

      alert("Book added successfully!");
      reset(); // clear form
    } catch (err) {
      console.error(err);
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-pink-600">Add New Book</h2>
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
        {/* Book Name */}
        <div>
          <label className="block font-medium">Book Name</label>
          <input
            type="text"
            {...register("bookName", { required: "Book name is required" })}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
          {errors.bookName && <p className="text-red-500">{errors.bookName.message}</p>}
        </div>

        {/* Author */}
        <div>
          <label className="block font-medium">Author</label>
          <input
            type="text"
            {...register("author", { required: "Author is required" })}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
          {errors.author && <p className="text-red-500">{errors.author.message}</p>}
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-medium">Image URL</label>
          <input
            type="url"
            {...register("image", { required: "Image URL is required" })}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
        </div>

        {/* Review */}
        <div>
          <label className="block font-medium">Review</label>
          <textarea {...register("review")} className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
        </div>

        {/* Total Pages */}
        <div>
          <label className="block font-medium">Total Pages</label>
          <input type="number" {...register("totalPages")} className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
        </div>

        {/* Rating */}
        <div>
          <label className="block font-medium">Rating</label>
          <input type="number" step="0.1" min="0" max="5" {...register("rating")} className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium">Category</label>
          <input type="text" {...register("category")} className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
        </div>

        {/* Tags */}
        <div>
          <label className="block font-medium">Tags (comma separated)</label>
          <input type="text" {...register("tags")} placeholder="Romance, Satire" className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
        </div>

        {/* Publisher */}
        <div>
          <label className="block font-medium">Publisher</label>
          <input type="text" {...register("publisher")} className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
        </div>

        {/* Year of Publishing */}
        <div>
          <label className="block font-medium">Year of Publishing</label>
          <input type="number" {...register("yearOfPublishing")} className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium">Price (BDT)</label>
          <input type="number" step="0.01" {...register("price")} className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg transition">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
