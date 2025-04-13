import { formatTime } from "@/helpers/time";
import Image from "next/image";
import React from "react";
import { User } from "./Main/Dashboard";

const UserStats = ({ user }: { user: User }) => {
  return (
    <div className="flex flex-col w-full gap-5">
      <div id="userInfo" className="flex flex-col gap-1 items-center ">
        <Image
          src={user.pfp ? user.pfp : "/defaultUser.png"}
          height={80}
          width={80}
          alt="user"
          className="p-2 rounded-full bg-white text-xl"
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
  );
};

export default UserStats;
