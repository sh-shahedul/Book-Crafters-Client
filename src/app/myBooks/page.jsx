"use client";

import React, { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import Swal from "sweetalert2";
import axios from "axios";
import PrivateRoute from "@/PrivateRoute/PrivateRoute";
import Loading from "@/components/Loading/Loading";

const MyAddedBooks = () => {
  const { user } = useAuth();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const fetchBooks = async () => {
      try {
        const res = await fetch(`https://book-crafters-server.vercel.app/books?email=${user.email}`);
        const data = await res.json();
        setBooks(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [user]);

  // DELETE function
  const handleDelete = async (id) => {
     Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    axios.delete(`https://book-crafters-server.vercel.app/books/${id}`)
    .then((res) => {
        console.log(res.data)
      setBooks(books.filter((book) => book._id !== id));
       Swal.fire({
      title: "Deleted!",
      text: "Your book has been deleted.",
      icon: "success"
    });
     
    })
    .catch((err) => {
      console.error(err);
      
    });   
   
  }
});

  };

  if (loading) return <Loading></Loading>
  if (!books.length) return <p className="text-pink-600 md:text-4xl text-2xl text-center mt-20">No books added yet.</p>;
    <title> My Books | Book Crafters</title>
  return (
   <PrivateRoute>
    <div>
     <title> My Books | Book Crafters</title>
    <h1 className=" text-3xl  text-center font-bold my-10 text-pink-600">Manage My Books</h1>
     <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border border-gray-400">Book Name</th>
            <th className="px-4 py-2 border border-gray-400">Author</th>
            <th className="px-4 py-2 border border-gray-400">Publisher</th>
            <th className="px-4 py-2 border border-gray-400">Price</th>
            <th className="px-4 py-2 border border-gray-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id} className="text-center">
              <td className="px-4 py-2 border border-gray-400">{book.bookName}</td>
              <td className="px-4 py-2 border border-gray-400">{book.author}</td>
              <td className="px-4 py-2 border border-gray-400">{book.publisher}</td>
              <td className="px-4 py-2 border border-gray-400">{book.price} Tk</td>
              <td className="px-4 py-2 border border-gray-400 flex justify-center gap-2">
                <Link
                  href={`/book-details/${book._id}`}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  View
                </Link>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => handleDelete(book._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </div>
   </PrivateRoute>
  );
};

export default MyAddedBooks;
