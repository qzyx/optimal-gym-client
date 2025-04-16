import { UserDataFromDatabase } from "@/types/UserDataFromDatabase";
import TimeElapsedChart from "./charts/TimeElapsedChart";

const TimeElapsedChartSection = ({ user }: { user: UserDataFromDatabase }) => {
  return (
    <div className="flex-1 w-full">
      <TimeElapsedChart user={user} />
    </div>
  );
};

export default TimeElapsedChartSection;
