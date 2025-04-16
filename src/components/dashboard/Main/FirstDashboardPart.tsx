import { UserDataFromDatabase } from "@/types/UserDataFromDatabase";
import TimeElapsedChartSection from "../TimeElapsedChartSection";
import WorkoutHistorySection from "../WorkoutHistorySection";

const FirstDashboardPart = ({ user }: { user: UserDataFromDatabase }) => {
  
  return (
    <div className="lg:w-3/8  w-full gap-5 flex flex-col justify-between">
      <TimeElapsedChartSection user={user} />
      <WorkoutHistorySection user={user} />
    </div>
  );
};

export default FirstDashboardPart;
