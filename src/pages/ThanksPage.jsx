import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function ThanksPage() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
      <div className="max-w-lg text-center relative bg-white p-8 rounded-2xl shadow-lg">
        <div className="absolute right-3 top-3" onClick={() => navigate("/")}>
          <IoIosCloseCircleOutline size={22} color="red" />
        </div>
        <h1 className="text-3xl font-bold text-green-400 mb-4">
          🎉 Thank You for Registering! 🎉
        </h1>
        <p className="text-lg text-gray-900 mb-6">
          Congratulations! You're now on our exclusive list for the launch
          offer. Stay tuned—exciting updates and your special access details
          will be shared with you soon.
        </p>
        <p className="text-lg text-gray-900 mb-6">
          Keep an eye on your inbox, and make sure to follow us on our Instagram
          page for the latest updates!
        </p>
        <button
          onClick={() => window.open("https://www.instagram.com/glovistacare/")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-all"
        >
          <FaInstagram className="text-2xl" />
          Follow Us
        </button>
      </div>
    </div>
  );
}

export default ThanksPage;
