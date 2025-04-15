import { UserDataFromDatabase } from "@/types/UserDataFromDatabase";
import WorkoutsCountsChart from "./charts/WorkoutsCountsChart";

const WorkoutsCountsChartSection = ({
  user,
  setOpenedMonth,
}: {
  user: UserDataFromDatabase;
  setOpenedMonth: (month: string) => void;
}) => {
  const handleClick = (month: string) => {
    setOpenedMonth(month);
  };

  return (
    <div className="flex-1 w-full">
      <WorkoutsCountsChart user={user} onClick={handleClick} />
    </div>
  );
};

export default WorkoutsCountsChartSection;
