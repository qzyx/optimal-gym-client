import TimeElapsedChartSection from "./TimeElapsedChartSection";
import UserSection from "./UserSection";
import WorkoutHistory from "./WorkoutHistory";
import WorkoutsCountsChartSection from "./WorkoutsCountsChartSection";
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
    { month: "Jan", count: 15 },
    { month: "Feb", count: 12 },
    { month: "Mar", count: 8 },
    { month: "Apr", count: 10 },
    { month: "May", count: 5 },
    { month: "Jun", count: 1 },
    { month: "Jul", count: 7 },
    { month: "Aug", count: 20 },
    { month: "Sep", count: 18 },
    { month: "Oct", count: 14 },
    { month: "Nov", count: 9 },
    { month: "Dec", count: 4 },
  ],
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
    <div className="py-4 px-4 flex flex-col gap-10 lg:gap-0 lg:flex-row lg:w-[90%] lg:my-[5vh] bg-neutral-900/80  text-white lg:rounded-md lg:shadow-lg">
      <div className="lg:w-1/4">
        <UserSection user={user} />
      </div>
      <div className="flex flex-col lg:w-3/8 px-4 gap-5">
        <TimeElapsedChartSection user={user} />
        <WorkoutHistory user={user} />
      </div>
      <div className="lg:w-3/8 px-4 w-full">
        <WorkoutsCountsChartSection user={user} />
        <div className="h-1/2"></div>
      </div>
    </div>
  );
};

export default DashBoard;
