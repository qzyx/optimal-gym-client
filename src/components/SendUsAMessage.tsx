import React from "react";
import SendMessageNameEmail from "./SendMessageNameEmain";
import SendMessageTopic from "./SendMessageTopic";
import SendMessageMessage from "./SendMessageMessage";

const SendUsAMessage = () => {
  return (
    <div className="p-4 rounded-md flex   flex-col bg-gradient-to-b flex-1/3 border  from-black  border-gray-600 to-pink-800">
      <span className="text-2xl self-center ">SEND US A MESSAGGE</span>
      <form className="flex flex-col gap-4 outline-none h-full">
        <SendMessageNameEmail />
        <SendMessageTopic />
        <SendMessageMessage />
      </form>
    </div>
  );
};

export default SendUsAMessage;
