import React from "react";
import TimeElapsedChart from "../charts/TimeElapsedChart";
import { User } from "./Dashboard";

const TimeElapsedChartSection = ({ user }: { user: User }) => {
  return (
    <div className="h-1/2">
      <TimeElapsedChart user={user} />
    </div>
  );
};

export default TimeElapsedChartSection;
