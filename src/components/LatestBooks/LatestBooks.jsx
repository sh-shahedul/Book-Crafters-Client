"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function LatestBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/latestbooks")
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error(err));
  }, []);


  // Function to render stars
const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) stars.push('★');
  if (halfStar) stars.push('☆'); // you can replace with half star icon if you want
  for (let i = 0; i < emptyStars; i++) stars.push('☆');

  return stars.join(' ');
};
  return (
<div className="p-6 mt-5 ">
  <h2 className="text-3xl font-extrabold mb-4 text-center text-pink-600">Latest Books</h2>
  <p className="text-gray-600 text-center max-w-[850px] mx-auto mb-10">Explore our latest collection of books, where every page brings a new adventure, valuable knowledge, and inspiring ideas. From thrilling stories that ignite your imagination to insightful guides that help you grow personally and professionally, these carefully selected titles are perfect for curious minds, passionate readers, and anyone eager to discover something new every day</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {books.map((book) => (
  <div
    key={book._id || book.bookName}
    className="group relative bg-linear-to-br from-pink-50 via-white to-pink-100 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500"
  >
    {/* Book Cover */}
    <div className="relative h-72 w-full overflow-hidden rounded-t-3xl">
      <img
        src={book.image}
        alt={book.bookName}
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
    </div>

    {/* Book Info */}
    <div className="p-5 relative z-10 text-gray-800 flex flex-col gap-2">
      <h3 className="text-2xl font-bold mb-1">{book.bookName}</h3>
      <p className="text-sm mb-1">
        <span className="font-semibold">Author:</span> {book.author}
      </p>
      <p className="text-sm mb-1">
        <span className="font-semibold">Category:</span> {book.category}
      </p>
      <p className="text-sm mb-2">
        <span className="font-semibold">Publisher:</span> {book.publisher} ({book.yearOfPublishing})
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-2">
        {book.tags?.map((tag, idx) => (
          <span
            key={idx}
            className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center text-sm text-gray-600 mb-1">
        <span>Pages: {book.totalPages}</span>
        <span className="font-semibold text-pink-600">৳{book.price}</span>
      </div>

      {/* Rating at bottom */}
      <div className="text-yellow-500 font-semibold text-sm">
        {renderStars(book.rating)} ({book.rating})
      </div>

      {/* View More Button */}
      <Link
        href={`/book-details/${book._id || book.bookName}`}
        className="inline-block mt-2 text-center bg-linear-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-md"
      >
        View More
      </Link>
    </div>
  </div>
))}



  </div>

       <Link href={'/allBooks'} className="flex justify-center items-center mt-20 btn w-35 mx-auto rounded-full bg-linear-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white">Explore More <MdOutlineArrowOutward /> </Link>
   
</div>




  );
}

