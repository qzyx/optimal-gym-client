import React from "react";
import TimeElapsedChartSection from "../TimeElapsedChartSection";
import WorkoutHistory from "../WorkoutHistory";
import { User } from "./Dashboard";

const FirstDashboardPart = ({ user }: { user: User }) => {
  return (
    <div className="lg:w-3/8 lg:px-4 w-full gap-5 flex flex-col justify-between">
      <TimeElapsedChartSection user={user} />
      <WorkoutHistory user={user} />
    </div>
  );
};

export default FirstDashboardPart;
