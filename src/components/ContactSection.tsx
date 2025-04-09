import React from "react";
import GetInTouch from "./GetInTouch";
import SendUsAMessage from "./SendUsAMessage";

const ContactSection = () => {
  return (
    <section id="contact" className="flex flex-col">
      <main className="text-white   w-full  flex flex-col md:flex-row px-5  gap-10 md:px-10  xl:px-50  ">
        <GetInTouch></GetInTouch>
        <SendUsAMessage />
      </main>
    </section>
  );
};

export default ContactSection;
