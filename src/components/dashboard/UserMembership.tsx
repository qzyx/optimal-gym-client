import { getDaysBetweenDates } from "@/helpers/time";
import { Crown, Star } from "lucide-react";
import { pricingPlans } from "../../../public/pricingPlans";

import { UserDataFromDatabase } from "@/types/UserDataFromDatabase";
import UserRechargeButton from "./UsertRechargeButton";

const UserMembership = ({ user }: { user: UserDataFromDatabase }) => {
  const crownColors: {
    [key: string]: string;
  } = {
    month: "silver",
    year: "gold",
    single: "silver",
  };
  return (
    <div id="memberShip" className="flex lg:grow flex-col w-full gap-5">
      <div className="flex flex-col w-full gap-1">
        <span className="text-xl">Membership</span>
        <span className="text-xl  self-center flex flex-col items-center text-center">
          <Crown color={crownColors[user.membershipType]}></Crown>
          <span
            className={`${
              user.membershipType === "year" && "text-yellow-300 "
            } ${user.membershipType === "month" && "text-gray-300 "} ${
              user.membershipType === "single" && "text-gray-300 "
            } `}
          >
            {user.membershipType || "No Membership"}
          </span>
        </span>
      </div>
      <div className="w-full gap-2 flex flex-col ">
        <div className="gap-1 flex flex-col border-b border-gray-400">
          <div className="flex justify-between w-full">
            <span>Started</span>
            <span>{user.MembershipStartedDate || "Not Started Yet"}</span>
          </div>
          <div className="flex justify-between w-full">
            <span>Ending</span>
            <span>{user.MembershipEndedDate || "Not Started Yet"}</span>
          </div>
        </div>
        <div className="flex justify-between w-full text-lg">
          <span>Time Left</span>
          <span>{getDaysBetweenDates(user.MembershipEndedDate)} Days</span>
        </div>
      </div>
      <div className="w-full flex flex-col lg:grow gap-1 ">
        <span>Benefits:</span>
        <div className="flex flex-col lg:grow  gap-1 text-sm select-text overflow-x-scroll no-scrollbar">
          {pricingPlans
            .find((plan) => plan.id === user.membershipType)
            ?.benefits.map((benefit, idx) => (
              <div
                className="flex gap-2 hover:gap-4 lg:text-xs xl:text-base tracking-wider transition-all duration-200 items-center whitespace-nowrap"
                key={idx}
              >
                <span>
                  <Star
                    color={user.membershipType === "gold" ? "gold" : "silver"}
                  ></Star>
                </span>
                <span>{benefit}</span>
              </div>
            )) || (
            <span className="flex py-20 lg:py-0 w-full h-full justify-center items-center">
              Buy a membership first
            </span>
          )}
        </div>
      </div>
      <div className="flex self-center flex-col w-full ">
        <span className="text-sm  ">
          Last Payment: {user.lastPayment || "No Payment for now"}
        </span>
        <UserRechargeButton />
      </div>
    </div>
  );
};

export default UserMembership;
