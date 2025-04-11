import WorkoutsCountsChart from "./charts/WorkoutsCountsChart";
import { User } from "./Main/Dashboard";

const WorkoutsCountsChartSection = ({
  user,
  setOpenedMonth,
}: {
  user: User;
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
