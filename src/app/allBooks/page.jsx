"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import { IoIosContact } from "react-icons/io";
import { TbCategoryFilled } from "react-icons/tb";
import { ImPriceTags } from "react-icons/im";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Loading from "@/components/Loading/Loading";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const[loading,setLoading] = useState(true)
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    fetch("https://book-crafters-server.vercel.app/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setFilteredBooks(data);
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      });
      
  }, []);

  // Filter books based on search
  useEffect(() => {
    const filtered = books.filter((book) =>
      book.bookName.toLowerCase().includes(search.toLowerCase())
     
    );
    setFilteredBooks(filtered);
  }, [search, books]);

  // Function to render stars
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) stars.push("★");
    if (halfStar) stars.push("☆"); // can replace with half star icon
    for (let i = 0; i < emptyStars; i++) stars.push("☆");

    return stars.join(" ");
  };
 if(loading) return <Loading></Loading>
  return (
    <div className="p-6 mt-5 w-[97%] mx-auto">
       <title>All Books | Book Crafters</title>
       <h2  className="text-3xl font-extrabold text-center text-pink-600 mb-5">
      📚 Explore All Books at Book Crafters
    </h2>
    <p className="text-gray-600 max-w-4xl mx-auto text-center pb-6">
      Welcome to <span className="font-semibold text-pink-600">Book Crafters</span>,  
      your ultimate destination for book lovers!  
      Discover a wide range of books—from timeless classics to modern bestsellers, and even hidden gems.  
      Our carefully curated collection is designed to inspire, entertain, and educate.  
      Explore, browse, and find your next favorite read today with Book Crafters!
    </p>

      {/* Header: Total Books + Search Bar */}
      <div className="md:flex justify-between items-center mb-6">
        <div className="md:text-2xl text-lg font-bold text-pink-600 ">
           Total Books: <span className="text-lg">({filteredBooks.length})</span>
        </div>
        <div className="form-control">


          <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search"  value={search}
               onChange={(e) => setSearch(e.target.value)}
               required
               placeholder="Search books..."
                 className=" w-80 " />
            </label>
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {filteredBooks.map((book) => (
  <div
    key={book._id || book.bookName}
    className=" group flex flex-col   rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500"
  >
    {/* Book Cover */}
    <div className=" h-72 w-full overflow-hidden rounded-t-3xl">
      <img
        src={book.image}
        alt={book.bookName}
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    {/* Book Info */}
    <div className="p-5 z-10 text-gray-800 flex flex-col justify-between flex-1">

      <div className="flex flex-col gap-2">
        <h3 className="md:text-2xl text-xl font-bold mb-1 text-pink-600">
          {book.bookName}
        </h3>

        <p className="font-bold flex items-center gap-1">
          <IoIosContact />
          Author : <span className="font-medium text-gray-600">{book.author}</span>
        </p>

        <div className="flex justify-between items-center">
          <p className="font-bold flex items-center gap-1">
            <TbCategoryFilled />
            Category: <span className="font-medium text-gray-600">{book.category}</span>
          </p>
          <p className="text-yellow-500 font-bold ">
            {renderStars(book.rating)} ({book.rating})
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="font-bold flex items-center gap-1 ">
            <ImPriceTags /> Price :
            <span className="font-medium text-pink-600  gap-1 flex items-center">
              {book.price} <FaBangladeshiTakaSign />
            </span>
          </p>
          <p className="font-bold">
            Pages: <span className="font-medium text-gray-600">{book.totalPages}</span>
          </p>
        </div>
      </div>

      {/* View More Button (Now stays bottom ALWAYS) */}
      <Link
        href={`/book-details/${book._id || book.bookName}`}
        className="mt-4 text-center bg-linear-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-md"
      >
        View More
      </Link>
    </div>
  </div>
))}



        {filteredBooks.length === 0 && (
          <p className="text-gray-500 col-span-full text-center">
            No books found
          </p>
        )}
      </div>

      
    </div>
  );
}
