import { ArrowLeftToLine, MoveLeft } from "lucide-react";
import TimeElapsedChart from "../charts/TimeElapsedChart";
import UserSection from "./UserSection";
import Link from "next/link";
type workout = {
  time: number;
  date: string;
};
export type User = {
  name: string;
  sessionCount: number;
  timeElapsed: number;
  pfp: string | null;
  lastPayment: string;
  membershipDateStarted: string;
  membershipDateEnding: string;
  workouts: workout[];

  membership: {
    name: string;
    id: string;
  };
};
export const user: User = {
  name: "Jano Mrkva",
  sessionCount: 123,
  timeElapsed: 794532,
  lastPayment: "2024-01-01",
  membershipDateStarted: "2025-01-01",
  membershipDateEnding: "2026-01-01",
  workouts: [
    { time: 3600, date: "1.5" },
    { time: 4200, date: "7.5" },
    { time: 2700, date: "14.5" },
    { time: 5400, date: "21.5" },
    { time: 3900, date: "28.5" },
    { time: 4800, date: "4.6" },
  ],
  pfp: null,
  membership: {
    name: "Yearly",
    id: "year",
  },
};

const DashBoard = () => {
  return (
    <div className="p-2  flex flex-col gap-10 lg:gap-0 lg:flex-row  lg:w-[95%] lg:my-[5vh] text-black  bg-slate-300/80 lg:rounded-md shadow-2xl">
      <Link
        href={"/"}
        className="absolute  lg:hidden top-3 left-3 sm:left-5 sm:top-5 shadow-xl px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium  rounded-md transition-colors duration-300 "
      >
        Back to Home
      </Link>
      <div className="lg:w-1/4">
        <UserSection user={user} />
      </div>
      <div className="flex flex-col lg:w-3/8 gap-5">
        <div className="h-1/2">
          <TimeElapsedChart user={user} />
        </div>
        <div className="h-1/2 w-full"></div>
      </div>
      <div className="lg:w-3/8 px-4 w-full"></div>
    </div>
  );
};

export default DashBoard;
