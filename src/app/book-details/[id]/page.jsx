"use client";
import ErrorDetails from "@/components/Error/ErrorDetails";
import Loading from "@/components/Loading/Loading";
import PrivateRoute from "@/PrivateRoute/PrivateRoute";
import axios from "axios";
import React, { useEffect, useState } from "react";

const BookDetails = ({ params }) => {
  const { id } = React.use(params) ; 
  const [book, setBook] = useState();
  const [loading ,setLoading] =useState(true)

  // console.log(id);

  useEffect(() => {
    axios
      .get(`https://book-crafters-server.vercel.app/books/${id}`)
      .then((data) => {
        setBook(data.data);
        setLoading(false)
        console.log(data.data);
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      });
  }, [id]);

  if (loading) {
    return <Loading></Loading>
  }

  // if(!book || !id){
  //   return <ErrorDetails></ErrorDetails>
  // }

  return (

  <PrivateRoute>
     <title> Book Details | Book Crafters</title>
     <div className="bg-linear-to-r from-white/80 via-white/90 to-white/80 shadow-2xl rounded-3xl flex flex-col md:flex-row overflow-hidden backdrop-blur-sm">
  {/* Book Cover */}
  <div className="md:w-1/3 flex justify-center items-start p-10">
    <img
      src={book.image}
      alt={book.bookName}
      className="w-full object-cover rounded-2xl shadow-lg"
    />
  </div>

  {/* Book Info */}
  <div className="md:w-2/3 p-8 flex flex-col justify-between">
    <div>
      <h1 className="md:text-5xl text-2xl font-extrabold text-gray-900 mb-3 hover:text-pink-600 transition-colors">
        {book.bookName}
      </h1>

      {/* Author & Category */}
      <p className="text-lg text-gray-600 mb-1">
        <span className="font-semibold">Author:</span> {book.author}
      </p>
      <p className="text-md text-gray-500 mb-1">
        <span className="font-semibold">Category:</span> {book.category}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 my-2">
        {book.tags.map((tag) => (
          <span
            key={tag}
            className="bg-pink-100 text-pink-700 font-medium px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Rating */}
      <div className="flex items-center mb-4">
        <span className="text-yellow-500 font-bold mr-2">{book.rating}</span>
        <div className="flex">
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < Math.floor(book.rating) ? "text-yellow-400" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.377 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.378-2.454a1 1 0 00-1.175 0l-3.378 2.454c-.785.57-1.839-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Review */}
      <p className="text-gray-700 mb-6 leading-relaxed">{book.review}</p>

      {/* Extra Info */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-6">
        {[
          { label: "Pages", value: book.totalPages },
          { label: "Publisher", value: book.publisher },
          { label: "Year Published", value: book.yearOfPublishing },
          { label: "Price", value: `৳${book.price}` },
          { label: "Date Added", value: new Date(book.dateAdded).toLocaleDateString() },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-pink-50 hover:bg-pink-100 rounded-2xl p-4 text-center shadow-md transition transform hover:scale-105"
          >
            <p className="font-semibold text-pink-600 mb-1">{item.label}</p>
            <p className="text-gray-800">{item.value}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Back Button */}
    <div className="mt-8">
      <button
        onClick={() => window.history.back()}
        className="px-6 py-2 bg-linear-to-r from-pink-500 to-red-500 text-white font-medium rounded-full shadow-lg hover:scale-105 transition transform"
      >
        ← Back
      </button>
    </div>
  </div>
</div>

  </PrivateRoute>
  )
};

export default BookDetails;
