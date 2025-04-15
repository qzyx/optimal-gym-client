import React from "react";
import TimeElapsedChart from "./charts/TimeElapsedChart";
import { UserDataFromDatabase } from "@/types/UserDataFromDatabase";

const TimeElapsedChartSection = ({ user }: { user: UserDataFromDatabase }) => {
  return (
    <div className="flex-1 w-full">
      <TimeElapsedChart user={user} />
    </div>
  );
};

export default TimeElapsedChartSection;
