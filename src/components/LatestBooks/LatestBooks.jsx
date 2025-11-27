"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { TbCategoryFilled } from "react-icons/tb";
import { ImPriceTags } from "react-icons/im";
import Loading from "../Loading/Loading";

export default function LatestBooks() {
  const [books, setBooks] = useState([]);
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    fetch("https://book-crafters-server.vercel.app/latestbooks")
      .then(res => res.json())
      .then(data => {
        setBooks(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      });
  }, []);


  // Function to render stars
const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) stars.push('★');
  if (halfStar) stars.push('☆'); 
  for (let i = 0; i < emptyStars; i++) stars.push('☆');

  return stars.join(' ');
};

   if(loading){
    return <Loading></Loading>
   }
  return (
<div className="p-6 mt-5 ">
  <h2 className="text-3xl font-extrabold mb-4 text-center text-pink-600">Latest Books</h2>
  <p className="text-gray-600 text-center max-w-[850px] mx-auto mb-10">Explore our latest collection of books, where every page brings a new adventure, valuable knowledge, and inspiring ideas. From thrilling stories that ignite your imagination to insightful guides that help you grow personally and professionally, these carefully selected titles are perfect for curious minds, passionate readers, and anyone eager to discover something new every day</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {books.map((book) => (
  <div
    key={book._id || book.bookName}
    className="group  rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500"
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
    <div className="p-5  z-10 text-gray-800 flex flex-col gap-2">
      <h3 className="md:text-2xl text-xl font-bold mb-1 text-pink-600"> {book.bookName}</h3>
      <p className="font-bold flex items-center gap-1"><IoIosContact />
      Author : <span className="font-medium text-gray-600"> {book.author}</span>
      </p>
     <div className="flex justify-between items-center">
        <p className="font-bold flex items-center gap-1"><TbCategoryFilled />
        Category: <span className="font-medium text-gray-600">{book.category}</span>
      </p>
       <p className="text-yellow-500 font-bold ">
        {renderStars(book.rating)} ({book.rating})
      </p>
    </div>
      <div className="flex justify-between items-center">

         <p className="font-bold flex items-center gap-1 "><ImPriceTags /> Price :  <span className="font-medium text-pink-600  gap-1 flex items-center"> {book.price} <FaBangladeshiTakaSign /> </span> </p> 
         <p className="font-bold">Pages: <span className="font-medium text-gray-600">  {book.totalPages}</span></p>
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

       <Link href={'/allBooks'} className="flex justify-center items-center mt-20 btn  mx-auto rounded-full bg-linear-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white">Explore More <MdOutlineArrowOutward /> </Link>
   
</div>




  );
}

