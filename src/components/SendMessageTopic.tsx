import React from "react";

const SendMessageTopic = () => {
  return (
    <div className="flex p-2 rounded-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 ">
      <div className="flex flex-col gap-1 flex-1">
        <label htmlFor="topic" className="text-md">
          TOPIC
        </label>
        <input
          type="text"
          id="topic"
          name="topic"
          className="w-full font-serif bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-pink-500 text-white"
          placeholder="Enter topic"
          required
        />
      </div>
    </div>
  );
};

export default SendMessageTopic;
