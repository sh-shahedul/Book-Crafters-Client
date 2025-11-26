// "use client";

// import React, { useState, useEffect, useContext } from "react";
// // import toast from "react-hot-toast";

// import { useSearchParams } from "next/navigation";
// import { AuthContext } from "@/contexts/AuthContext/AuthContext";

// const ForgotPassword = () => {
//   const { forgotUser } = useContext(AuthContext);
//   const [email, setEmail] = useState(""); // always a string
//   const [error, setError] = useState("");
//   // const searchParams = useSearchParams();

//   // Pre-fill email from query param if available
//   useEffect(() => {
//     const emailFromQuery = searchParams.get("email");
//     if (emailFromQuery) setEmail(emailFromQuery);
//   }, [searchParams]);

//   const handleReset = (e) => {
//     e.preventDefault();
//     if (!email) {
//       toast.error("Please enter your email address!");
//       return;
//     }
//  forgetPassword(email)
//       .then(() => {
//         toast.success("📧 Password reset link sent! Redirecting to Gmail...");
//         setTimeout(() => {
//           window.location.href = "https://mail.google.com/";
//         }, 1000);
//       })
//       .catch((err) => {
//         setError(err.message);
//         toast.error("❌ Failed to send reset email!");
//       });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
//       <div className="border border-white shadow-2xl rounded-3xl p-8 w-full max-w-md text-center bg-white dark:bg-gray-800">
//         <h2 className="text-2xl font-semibold text-center pb-5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-transparent bg-clip-text">
//           Forgot Password?
//         </h2>
//         <p className="text-gray-500 dark:text-gray-300 mb-6">
//           Enter your email address and we’ll send you a password reset link.
//         </p>

//         <form onSubmit={handleReset} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="input input-bordered w-full focus:outline-none focus:border-pink-400 rounded-full dark:placeholder-gray-300"
//             value={email || ""} // ensures controlled input
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           {error && <p className="text-red-600 font-medium">{error}</p>}

//           <button
//             type="submit"
//             className="w-full bg-linear-to-r from-pink-500 via-purple-600 to-indigo-500 text-white font-medium py-2 rounded-full hover:from-indigo-500 hover:to-pink-500 transition-all duration-300"
//           >
//             Reset Password
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;
