import { getDaysBetweenDates } from "@/lib/time";
import { Star } from "lucide-react";
import { pricingPlans } from "../../../../public/pricingPlans";
import { User } from "./Dashboard";
import UserRechargeButton from "./UsertRechargeButton";

const UserMembership = ({ user }: { user: User }) => {
  return (
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
              <div
                className="flex gap-2 hover:gap-4 tracking-wider transition-all duration-200 items-center"
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
        <span className="text-sm ">Last Payment: {user.lastPayment}</span>
        <UserRechargeButton />
      </div>
    </div>
  );
};

export default UserMembership;
