import WorkoutsCountsChart from "../charts/WorkoutsCountsChart";
import { User } from "./Dashboard";

const WorkoutsCountsChartSection = ({user} : {user:User}) => {
  return (
    <div className="h-1/2">
      <WorkoutsCountsChart user={user} />
    </div>
  );
};

export default WorkoutsCountsChartSection;
