import { formatTime, getDaysBetweenDates } from "@/lib/time";
import Image from "next/image";
import React from "react";
import { pricingPlans } from "../../../public/pricingPlans";
type User = {
  name: string;
  sessionCount: number;
  timeElapsed: number;
  pfp: string | null;
  lastPayment: string;
  membershipDateStarted: string;
  membershipDateEnding: string;
  membership: {
    name: string;
    id: string;
  };
};
const UserSection = ({ user }: { user: User }) => {
  return (
    <div className="flex flex-col flex-1 lg:px-4 py-4 lg:py-0 lg:border-r lg:border-b-0 border-b border-gray-400  items-center gap-5 ">
      <div className="flex flex-col w-full gap-5">
        <div id="userInfo" className="flex flex-col gap-1 items-center ">
          <Image
            src={user.pfp ? user.pfp : "/defaultUser.png"}
            height={80}
            width={80}
            alt="user"
            className="p-2 rounded-full shadow-xl"
          ></Image>
          <span className="text-xl">{user.name}</span>
        </div>
        <div className="w-full gap-1 flex flex-col">
          <div className="flex justify-between w-full">
            <span>Completed Sessions</span>
            <span>{user.sessionCount}</span>
          </div>
          <div className="flex justify-between w-full">
            <span>Time Elapsed</span>
            <span>{formatTime(user.timeElapsed)}</span>
          </div>
        </div>
      </div>
      <div id="memberShip" className="flex flex-col w-full gap-5">
        <div className="flex flex-col w-full gap-1">
          <span className="text-xl">Membership</span>
          <span
            className={`${
              user.membership.name === "Yearly"
                ? "text-yellow-500 "
                : " text-black "
            } text-xl  self-center`}
          >
            {user.membership.name}
          </span>
        </div>
        <div className="w-full gap-2 flex flex-col ">
          <div className="gap-1 flex flex-col border-b border-gray-400">
            <div className="flex justify-between w-full">
              <span>Started</span>
              <span>{user.membershipDateStarted}</span>
            </div>
            <div className="flex justify-between w-full">
              <span>Ending</span>
              <span>{user.membershipDateEnding}</span>
            </div>
          </div>
          <div className="flex justify-between w-full text-lg">
            <span>Time Left</span>
            <span>{getDaysBetweenDates(user.membershipDateEnding)} Days</span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-1 ">
          <span>Benefits:</span>
          <div className="flex flex-col gap-1 text-sm select-text">
            {pricingPlans
              .find((plan) => plan.id === user.membership.id)
              ?.benefits.map((benefit, idx) => (
                <div key={idx}>{benefit}</div>
              ))}
          </div>
        </div>
        <div className="flex self-center flex-col w-full ">
          <span className="text-sm ">Last Payment: {user.lastPayment}</span>
          <button className="px-5 py-2 bg-gradient-to-br from-green-950 via-green-500 to-green-200 rounded-xl cursor-pointer transition-all duration-200 text-white bg-[length:200%_200%] bg-[position:5%_50%] hover:bg-[position:100%_50%] ease-in-out ">
            RE-CHARGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSection;
