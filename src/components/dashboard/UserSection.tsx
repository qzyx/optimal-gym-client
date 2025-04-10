import { formatTime, getDaysBetweenDates } from "@/lib/time";
import { Clock, Star } from "lucide-react";
import Image from "next/image";
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
    <div className="flex flex-col flex-1 lg:px-4 p-4 bg-gradient-to-r from-slate-700/50 to-slate-800/10 rounded-md    border-gray-400  items-center gap-2 text-base lg:text-base sm:text-lg ">
      <div className="flex flex-col w-full gap-5   ">
        <div id="userInfo" className="flex flex-col gap-1 items-center ">
          <Image
            src={user.pfp ? user.pfp : "/defaultUser.png"}
            height={80}
            width={80}
            alt="user"
            className="p-2 rounded-full shadow-xl border border-white"
          ></Image>
          <span className=" tracking-widest text-white">{user.name}</span>
        </div>
        <div className="w-full gap-1 flex flex-col  rounded-md p-2 ">
          <div className="flex justify-between w-full ">
            <span className="text-white">Completed Sessions</span>
            <span>{user.sessionCount}</span>
          </div>
          <div className="flex justify-between w-full ">
            <span className="text-white">Time Elapsed</span>
            <span>{formatTime(user.timeElapsed)}</span>
          </div>
        </div>
      </div>
      <div id="memberShip" className="flex flex-col w-full gap-2 ">
        <div className="flex flex-col w-full   rounded-md p-2 ">
          <span className="text-white">Membership</span>
          <span
            className={`${
              user.membership.name === "Yearly"
                ? "text-yellow-300 "
                : " text-blue-500"
            } `}
          >
            {user.membership.name}
          </span>
        </div>
        <div className="w-full gap-2 flex flex-col  rounded-md p-2 ">
          <div className=" flex flex-col ">
            <div className="flex justify-between w-full">
              <span className="text-green-500 flex items-center gap-1">
                Started
              </span>
              <span>{user.membershipDateStarted}</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="text-red-600 flex items-center gap-1">
                Ending
              </span>
              <span>{user.membershipDateEnding}</span>
            </div>
          </div>
          <div className="flex justify-between w-full ">
            <span className="text-white">Time Left</span>
            <span>{getDaysBetweenDates(user.membershipDateEnding)} Days</span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-1  rounded-md p-2  ">
          <span className="text-lg sm:text-xl text-white">Benefits:</span>
          <div className="flex flex-col gap-0.5 bg-gradient-to-b text-transparent bg-clip-text from-yellow-200 to-yellow-400   select-none">
            {pricingPlans
              .find((plan) => plan.id === user.membership.id)
              ?.benefits.map((benefit, idx) => (
                <div
                  className="flex gap-2 hover:gap-4 items-center hover:tracking-wider transition-all duration-200"
                  key={idx}
                >
                  <span>
                    <Star color="gold"></Star>
                  </span>
                  <span>{benefit}</span>
                </div>
              ))}
          </div>
        </div>
        <div className="flex self-center flex-col w-full ">
          <span className="text-white lg:text-sm self-center ">
            Last Payment: {user.lastPayment}
          </span>
          <button className="px-5 py-2 bg-gradient-to-br from-green-950 via-green-500 to-green-200 text-white rounded-md border border-white cursor-pointer transition-all duration-200 ite bg-[length:200%_200%] bg-[position:5%_50%] hover:bg-[position:100%_50%] ease-in-out ">
            RE-CHARGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSection;
