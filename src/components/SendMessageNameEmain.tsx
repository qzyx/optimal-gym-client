import React from "react";

const SendMessageNameEmail = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5   p-2 rounded-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 ">
      <div className="flex flex-col gap-1 flex-1 ">
        <label htmlFor="name" className="text-md">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full font-serif bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-pink-500 text-white"
          placeholder="Your Name"
          required
        />
      </div>
      <div className="flex flex-col gap-1 flex-1">
        <label htmlFor="email" className="text-md">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="w-full font-serif bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-pink-500 text-white"
          placeholder="Your email"
          required
        />
      </div>
    </div>
  );
};

export default SendMessageNameEmail;
