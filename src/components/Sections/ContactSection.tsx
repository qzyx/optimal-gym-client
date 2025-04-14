import React from "react";
import GetInTouch from "../main/GetInTouch";
import SendUsAMessage from "../main/SendUsAMessage";
import ContactHeading from "../main/ContactHeading";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col mb-[10vh] items-center gap-8"
    >
      <ContactHeading></ContactHeading>
      <main className="text-white   w-full  flex flex-col md:flex-row px-2 sm:px-4  gap-10 md:px-10  xl:px-50 overflow-x-hidden ">
        <GetInTouch />
        <SendUsAMessage />
      </main>
    </section>
  );
};

export default ContactSection;
