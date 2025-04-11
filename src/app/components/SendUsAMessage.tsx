import React from "react";
import SendMessageNameEmail from "./SendMessageNameEmain";
import SendMessageTopic from "./SendMessageTopic";
import SendMessageMessage from "./SendMessageMessage";
import FadeIn from "./Animations/FadeIn";

const SendUsAMessage = () => {
  return (
    <FadeIn
      inView={true}
      x={50}
      classname={
        "p-4 rounded-md flex   flex-col bg-gradient-to-b flex-1/3 border  from-black  border-gray-600 to-pink-800"
      }
    >
      <span className="text-2xl self-center ">SEND US A MESSAGGE</span>
      <form className="flex flex-col gap-4 outline-none h-full">
        <SendMessageNameEmail />
        <SendMessageTopic />
        <SendMessageMessage />
      </form>
    </FadeIn>
  );
};

export default SendUsAMessage;
