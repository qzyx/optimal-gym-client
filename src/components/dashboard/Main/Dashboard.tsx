"use client";

import Link from "next/link";
import { useState } from "react";
import { theme } from "../../../../public/theme";
import FirstDashboardPart from "./FirstDashboardPart";
import SecondDashboardPart from "./SecondDashboardPart";
import UserSection from "./UserSection";
import { X } from "lucide-react";
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
  lastWorkouts: workout[];
  workouts: {
    [month: string]: workout[];
  };
  wourkoutCount: {
    month: string;
    count: number;
  }[];
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
  wourkoutCount: [
    { month: "JAN", count: 15 },
    { month: "FEB", count: 12 },
    { month: "MAR", count: 8 },
    { month: "APR", count: 10 },
    { month: "MAY", count: 5 },
    { month: "JUN", count: 1 },
    { month: "JUL", count: 7 },
    { month: "AUG", count: 20 },
    { month: "SEP", count: 18 },
    { month: "OCT", count: 14 },
    { month: "NOV", count: 9 },
    { month: "DEC", count: 4 },
  ],
  lastWorkouts: [
    { time: 1203, date: "2024-01-01" },
    { time: 1547, date: "2024-01-02" },
    { time: 1832, date: "2024-01-03" },
    { time: 925, date: "2024-01-04" },
    { time: 678, date: "2024-01-05" },
    { time: 678, date: "2024-01-05" },
    { time: 678, date: "2024-01-05" },
    { time: 925, date: "2024-01-04" },
    { time: 925, date: "2024-01-04" },
    { time: 925, date: "2024-01-04" },
    { time: 925, date: "2024-01-04" },
    { time: 925, date: "2024-01-04" },
    { time: 678, date: "2024-01-05" },
    { time: 678, date: "2024-01-05" },
    { time: 678, date: "2024-01-05" },
    { time: 1678, date: "2024-01-05" },
  ],
  workouts: {
    january: [
      { time: 1203, date: "2024-01-01" },
      { time: 1547, date: "2024-01-02" },
      { time: 1832, date: "2024-01-03" },
      { time: 925, date: "2024-01-04" },
      { time: 678, date: "2024-01-05" },
      { time: 2445, date: "2024-01-06" },
      { time: 3072, date: "2024-01-07" },
      { time: 3612, date: "2024-01-08" },
      { time: 4257, date: "2024-01-09" },
      { time: 4819, date: "2024-01-10" },
    ],
    february: [
      { time: 1278, date: "2024-02-01" },
      { time: 1535, date: "2024-02-02" },
      { time: 1873, date: "2024-02-03" },
      { time: 946, date: "2024-02-04" },
      { time: 623, date: "2024-02-05" },
      { time: 2387, date: "2024-02-06" },
      { time: 3121, date: "2024-02-07" },
      { time: 3589, date: "2024-02-08" },
      { time: 4182, date: "2024-02-09" },
      { time: 4856, date: "2024-02-10" },
    ],
    march: [
      { time: 1234, date: "2024-03-01" },
      { time: 1567, date: "2024-03-02" },
      { time: 1845, date: "2024-03-03" },
      { time: 912, date: "2024-03-04" },
      { time: 645, date: "2024-03-05" },
      { time: 2367, date: "2024-03-06" },
      { time: 3042, date: "2024-03-07" },
      { time: 3578, date: "2024-03-08" },
      { time: 4198, date: "2024-03-09" },
      { time: 4767, date: "2024-03-10" },
    ],
    april: [
      { time: 1189, date: "2024-04-01" },
      { time: 1512, date: "2024-04-02" },
      { time: 1789, date: "2024-04-03" },
      { time: 937, date: "2024-04-04" },
      { time: 615, date: "2024-04-05" },
      { time: 2423, date: "2024-04-06" },
      { time: 3015, date: "2024-04-07" },
      { time: 3623, date: "2024-04-08" },
      { time: 4215, date: "2024-04-09" },
      { time: 4865, date: "2024-04-10" },
    ],
    may: [
      { time: 1221, date: "2024-05-01" },
      { time: 1523, date: "2024-05-02" },
      { time: 1819, date: "2024-05-03" },
      { time: 897, date: "2024-05-04" },
      { time: 634, date: "2024-05-05" },
      { time: 2378, date: "2024-05-06" },
      { time: 3087, date: "2024-05-07" },
      { time: 3567, date: "2024-05-08" },
      { time: 4231, date: "2024-05-09" },
      { time: 4778, date: "2024-05-10" },
    ],
    june: [
      { time: 1156, date: "2024-06-01" },
      { time: 1489, date: "2024-06-02" },
      { time: 1823, date: "2024-06-03" },
      { time: 956, date: "2024-06-04" },
      { time: 612, date: "2024-06-05" },
      { time: 2412, date: "2024-06-06" },
      { time: 3021, date: "2024-06-07" },
      { time: 3632, date: "2024-06-08" },
      { time: 4167, date: "2024-06-09" },
      { time: 4834, date: "2024-06-10" },
    ],
    july: [
      { time: 1243, date: "2024-07-01" },
      { time: 1534, date: "2024-07-02" },
      { time: 1812, date: "2024-07-03" },
      { time: 923, date: "2024-07-04" },
      { time: 656, date: "2024-07-05" },
      { time: 2398, date: "2024-07-06" },
      { time: 3056, date: "2024-07-07" },
      { time: 3645, date: "2024-07-08" },
      { time: 4187, date: "2024-07-09" },
      { time: 4845, date: "2024-07-10" },
    ],
    august: [
      { time: 1267, date: "2024-08-01" },
      { time: 1521, date: "2024-08-02" },
      { time: 1856, date: "2024-08-03" },
      { time: 932, date: "2024-08-04" },
      { time: 623, date: "2024-08-05" },
      { time: 2432, date: "2024-08-06" },
      { time: 3045, date: "2024-08-07" },
      { time: 3598, date: "2024-08-08" },
      { time: 4256, date: "2024-08-09" },
      { time: 4823, date: "2024-08-10" },
    ],
    september: [
      { time: 1232, date: "2024-09-01" },
      { time: 1543, date: "2024-09-02" },
      { time: 1876, date: "2024-09-03" },
      { time: 913, date: "2024-09-04" },
      { time: 642, date: "2024-09-05" },
      { time: 2456, date: "2024-09-06" },
      { time: 3023, date: "2024-09-07" },
      { time: 3612, date: "2024-09-08" },
      { time: 4178, date: "2024-09-09" },
      { time: 4876, date: "2024-09-10" },
    ],
    october: [
      { time: 1198, date: "2024-10-01" },
      { time: 1563, date: "2024-10-02" },
      { time: 1834, date: "2024-10-03" },
      { time: 942, date: "2024-10-04" },
      { time: 632, date: "2024-10-05" },
      { time: 2421, date: "2024-10-06" },
      { time: 3067, date: "2024-10-07" },
      { time: 3621, date: "2024-10-08" },
      { time: 4243, date: "2024-10-09" },
      { time: 4812, date: "2024-10-10" },
    ],
    november: [
      { time: 1278, date: "2024-11-01" },
      { time: 1523, date: "2024-11-02" },
      { time: 1867, date: "2024-11-03" },
      { time: 921, date: "2024-11-04" },
      { time: 643, date: "2024-11-05" },
      { time: 2385, date: "2024-11-06" },
      { time: 3065, date: "2024-11-07" },
      { time: 3634, date: "2024-11-08" },
      { time: 4223, date: "2024-11-09" },
      { time: 4789, date: "2024-11-10" },
    ],
    december: [
      { time: 1254, date: "2024-12-01" },
      { time: 1532, date: "2024-12-02" },
      { time: 1798, date: "2024-12-03" },
      { time: 923, date: "2024-12-04" },
      { time: 617, date: "2024-12-05" },
      { time: 2445, date: "2024-12-06" },
      { time: 3012, date: "2024-12-07" },
      { time: 3598, date: "2024-12-08" },
      { time: 4212, date: "2024-12-09" },
      { time: 4863, date: "2024-12-10" },
    ],
  },
  pfp: null,

  membership: {
    name: "Yearly",
    id: "year",
  },
};

const DashBoard = () => {
  const [openSettings, setOpenSettings] = useState<boolean>(false);
  return (
    <>
      {openSettings && (
        <div className="absolute backdrop-blur-lg shadow-2xl border w-60 md:w-100 border-gray-500 top-[50%] z-20 left-[50%] flex flex-col items-center text-white -translate-y-[50%] -translate-x-[50%] p-4 bg-neutral-800/90 rounded-lg space-y-6">
          <button
            className="absolute top-5 right-5 cursor-pointer "
            onClick={() => setOpenSettings(false)}
          >
            <X></X>
          </button>
          <h2 className="text-lg font-semibold tracking-wide">Settings</h2>
          <div className="flex flex-col gap-6 w-full">
            <div className="w-full">
              <span className="text-sm font-medium">Theme</span>
              <div className="mt-2 w-full flex flex-col gap-2">
                {theme.map((theme, idx) => (
                  <div
                    key={idx}
                    className={`${theme.theme} p-3  text-center hover:tracking-wider hover:scale-105 transition-transform duration-200 cursor-pointer rounded-md shadow-md`}
                  >
                    {theme.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full flex justify-end">
              <Link
                href={"/logout"}
                className="px-6 py-2 rounded-md text-white border border-red-500 hover:bg-red-500 hover:shadow-lg transition-all duration-200"
              >
                Log Out
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="py-4 px-4 relative flex flex-col gap-10 overflow-hidden lg:gap-2 lg:flex-row lg:w-[95%] lg:max-h-[90vh] bg-neutral-900/80  text-white lg:rounded-md lg:shadow-lg">
        <UserSection setOpenSettings={setOpenSettings} user={user} />
        <FirstDashboardPart user={user} />
        <SecondDashboardPart user={user} />
      </div>
    </>
  );
};

export default DashBoard;
