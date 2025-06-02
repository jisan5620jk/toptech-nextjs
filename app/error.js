"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-SecondaryColor-0">
      <div className="relative inline-block">
        <h1 className="font-Nunito text-8xl sm:text-9xl font-extrabold text-white tracking-widest">
          404
        </h1>
        <span className="bg-PrimaryColor-0 px-2 text-sm text-white font-Rajdhani rounded rotate-12 absolute left-1/2 -translate-x-1/2 bottom-5">
          Page Not Found
        </span>
      </div>
      <h2 className="font-Rajdhani text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-7 mt-4">
        Something went wrong!
      </h2>
      <button
        className="primary-btn !py-3"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try Again
      </button>
    </div>
  );
}
