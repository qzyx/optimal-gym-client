import TimeElapsedChartSection from "../TimeElapsedChartSection";
import WorkoutHistorySection from "../WorkoutHistorySection";
import { User } from "./Dashboard";

const FirstDashboardPart = ({ user }: { user: User }) => {
  return (
    <div className="lg:w-3/8  w-full gap-5 flex flex-col justify-between">
      <TimeElapsedChartSection user={user} />
      <WorkoutHistorySection user={user} />
    </div>
  );
};

export default FirstDashboardPart;
