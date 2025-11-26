

import { AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const ErrorDetails = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="bg-indigo-100 p-10 rounded-full shadow-sm mb-6">
        <AlertTriangle className="text-pink-500 w-16 h-16" />
      </div>

      <h2 className="text-2xl md:text-3xl font-semibold text-pink-600 mb-2">
        Course is Not Found
      </h2>
      <p className="max-w-md mb-8">
        The course you are looking for does not exist or has been removed.
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => router.push("/")}
          className="px-6 py-2 rounded-full bg-linear-to-r from-pink-500 via-purple-600 to-indigo-500 text-white font-medium hover:from-indigo-500 hover:to-pink-500 transition-colors duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorDetails;
