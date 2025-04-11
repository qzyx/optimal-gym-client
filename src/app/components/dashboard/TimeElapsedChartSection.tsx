import React from "react";
import TimeElapsedChart from "./charts/TimeElapsedChart";
import { User } from "./Main/Dashboard";

const TimeElapsedChartSection = ({ user }: { user: User }) => {
  return (
    <div className="flex-1 w-full">
      <TimeElapsedChart user={user} />
    </div>
  );
};

export default TimeElapsedChartSection;
