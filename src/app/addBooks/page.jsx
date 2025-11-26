"use client";

import useAuth from "@/hooks/useAuth";
import PrivateRoute from "@/PrivateRoute/PrivateRoute";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

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

      const response = await fetch("https://book-crafters-server.vercel.app/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Failed to add book");
      }
      toast.success("🎉Book added successfully!")
     
      reset();
    } catch (err) {
      console.error(err);
      toast.error("something Errror");
    }
  };

  return (
 <PrivateRoute>
     <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg mt-10">
  <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">
    Add New Book
  </h2>

  <form onSubmit={handleSubmit(submitHandler)} className="grid grid-cols-1 md:grid-cols-2 gap-6   ">

    {/* Author */}
    <div className="flex flex-col">
      <label className="font-medium">Author</label>
      <input
        type="text"
        {...register("author", { required: "Author is required" })}
        className="border border-gray-300 rounded-lg p-2 mt-1 bg-gray-100"
        readOnly
      />
      {errors.author && <p className="text-red-500">{errors.author.message}</p>}
    </div>

    {/* Email */}
    <div className="flex flex-col">
      <label className="font-medium">Email</label>
      <input
        type="email"
        {...register("email", { required: "Email is required" })}
        className="border border-gray-300 rounded-lg p-2 mt-1 bg-gray-100"
        readOnly
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
    </div>

    {/* Book Name */}
    <div className="flex flex-col">
      <label className="font-medium">Book Name</label>
      <input
        type="text"
        {...register("bookName", { required: "Book name is required" })}
        className="border border-gray-300 rounded-lg p-2 mt-1"
      />
      {errors.bookName && <p className="text-red-500">{errors.bookName.message}</p>}
    </div>

    {/* Image URL */}
    <div className="flex flex-col">
      <label className="font-medium">Image URL</label>
      <input
        type="url"
        {...register("image", { required: "Image URL is required" })}
        className="border border-gray-300 rounded-lg p-2 mt-1"
      />
      {errors.image && <p className="text-red-500">{errors.image.message}</p>}
    </div>

    {/* Review (full width) */}
    <div className="flex flex-col md:col-span-2">
      <label className="font-medium">Review</label>
      <textarea
        {...register("review", { required: "Review is required" })}
        className="border border-gray-300 rounded-lg p-2 mt-1 h-24"
      />
      {errors.review && <p className="text-red-500">{errors.review.message}</p>}
    </div>

    {/* Total Pages */}
    <div className="flex flex-col">
      <label className="font-medium">Total Pages</label>
      <input
        type="number"
        {...register("totalPages", { required: "Total pages are required", min: 1 })}
        className="border border-gray-300 rounded-lg p-2 mt-1"
      />
      {errors.totalPages && <p className="text-red-500">{errors.totalPages.message}</p>}
    </div>

    {/* Rating */}
    <div className="flex flex-col">
      <label className="font-medium">Rating</label>
      <input
        type="number"
        step="0.1"
        min="0"
        max="5"
        {...register("rating", { required: "Rating is required", min: 0, max: 5 })}
        className="border border-gray-300 rounded-lg p-2 mt-1"
      />
      {errors.rating && <p className="text-red-500">{errors.rating.message}</p>}
    </div>

    {/* Category */}
    <div className="flex flex-col">
      <label className="font-medium">Category</label>
      <input
        type="text"
        {...register("category", { required: "Category is required" })}
        className="border border-gray-300 rounded-lg p-2 mt-1"
      />
      {errors.category && <p className="text-red-500">{errors.category.message}</p>}
    </div>

    {/* Tags */}
    <div className="flex flex-col">
      <label className="font-medium">Tags (comma separated)</label>
      <input
        type="text"
        {...register("tags", { required: "At least one tag is required" })}
        placeholder="Romance, Satire"
        className="border border-gray-300 rounded-lg p-2 mt-1"
      />
      {errors.tags && <p className="text-red-500">{errors.tags.message}</p>}
    </div>

    {/* Publisher */}
    <div className="flex flex-col">
      <label className="font-medium">Publisher</label>
      <input
        type="text"
        {...register("publisher", { required: "Publisher is required" })}
        className="border border-gray-300 rounded-lg p-2 mt-1"
      />
      {errors.publisher && <p className="text-red-500">{errors.publisher.message}</p>}
    </div>

    {/* Year of Publishing */}
    <div className="flex flex-col">
      <label className="font-medium">Year of Publishing</label>
      <input
        type="number"
        {...register("yearOfPublishing", { required: "Year of publishing is required", min: 0 })}
        className="border border-gray-300 rounded-lg p-2 mt-1"
      />
      {errors.yearOfPublishing && <p className="text-red-500">{errors.yearOfPublishing.message}</p>}
    </div>

    {/* Price */}
    <div className="flex flex-col md:col-span-2">
  <label className="font-medium">Price (BDT)</label>
  <input
    type="number"
    step="0.01"
    {...register("price", { required: "Price is required", min: 0 })}
    className="border border-gray-300 rounded-lg p-2 mt-1 w-full"
  />
  {errors.price && <p className="text-red-500">{errors.price.message}</p>}
  </div>

    {/* Submit Button (full width) */}
    <div className="md:col-span-2">
      <button
        type="submit"
        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-lg transition"
      >
        Add Book
      </button>
    </div>
  </form>
</div>
 </PrivateRoute>

  );
};

export default AddBookForm;
