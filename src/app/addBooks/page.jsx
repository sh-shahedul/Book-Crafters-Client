"use client";

import useAuth from "@/hooks/useAuth";
import React from "react";
import { useForm } from "react-hook-form";

const AddBookForm = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      author: user?.displayName || user?.name || "",
      email: user?.email || "",
    },
  });

  // Update author and email if user loads late
  React.useEffect(() => {
    if (user?.displayName || user?.name) {
      setValue("author", user.displayName || user.name);
    }
    if (user?.email) {
      setValue("email", user.email);
    }
  }, [user, setValue]);

  const submitHandler = async (data) => {
    try {
      data.rating = parseFloat(data.rating);
      data.totalPages = parseInt(data.totalPages);
      data.price = parseFloat(data.price);

      if (data.tags) data.tags = data.tags.split(",").map((tag) => tag.trim());
      else data.tags = [];

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
      reset();
    } catch (err) {
      console.error(err);
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-pink-600">
        Add New Book
      </h2>
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
        
        {/* Author */}
        <div>
          <label className="block font-medium">Author</label>
          <input
            type="text"
            {...register("author", { required: "Author is required" })}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 bg-gray-100"
            readOnly
          />
          {errors.author && <p className="text-red-500">{errors.author.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 bg-gray-100"
            readOnly
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
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

        {/* Image URL */}
        <div>
          <label className="block font-medium">Image URL</label>
          <input
            type="url"
            {...register("image", { required: "Image URL is required" })}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
          {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        </div>

        {/* Review */}
        <div>
          <label className="block font-medium">Review</label>
          <textarea
            {...register("review", { required: "Review is required" })}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
          {errors.review && <p className="text-red-500">{errors.review.message}</p>}
        </div>

        {/* Total Pages */}
        <div>
          <label className="block font-medium">Total Pages</label>
          <input
            type="number"
            {...register("totalPages", { required: "Total pages are required", min: 1 })}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
          {errors.totalPages && <p className="text-red-500">{errors.totalPages.message}</p>}
        </div>

        {/* Rating */}
        <div>
          <label className="block font-medium">Rating</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="5"
            {...register("rating", { required: "Rating is required", min: 0, max: 5 })}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
          {errors.rating && <p className="text-red-500">{errors.rating.message}</p>}
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium">Category</label>
          <input
            type="text"
            {...register("category", { required: "Category is required" })}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
          {errors.category && <p className="text-red-500">{errors.category.message}</p>}
        </div>

        {/* Tags */}
        <div>
          <label className="block font-medium">Tags (comma separated)</label>
          <input
            type="text"
            {...register("tags", { required: "At least one tag is required" })}
            placeholder="Romance, Satire"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
          {errors.tags && <p className="text-red-500">{errors.tags.message}</p>}
        </div>

        {/* Publisher */}
        <div>
          <label className="block font-medium">Publisher</label>
          <input
            type="text"
            {...register("publisher", { required: "Publisher is required" })}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
          {errors.publisher && <p className="text-red-500">{errors.publisher.message}</p>}
        </div>

        {/* Year of Publishing */}
        <div>
          <label className="block font-medium">Year of Publishing</label>
          <input
            type="number"
            {...register("yearOfPublishing", { required: "Year of publishing is required", min: 0 })}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
          {errors.yearOfPublishing && <p className="text-red-500">{errors.yearOfPublishing.message}</p>}
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium">Price (BDT)</label>
          <input
            type="number"
            step="0.01"
            {...register("price", { required: "Price is required", min: 0 })}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
          {errors.price && <p className="text-red-500">{errors.price.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg transition"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
