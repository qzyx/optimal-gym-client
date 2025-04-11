"use client";

import { useState } from "react";
import SelectedMonth from "../SelectedMonth";
import WorkoutsCountsChartSection from "../WorkoutsCountsChartSection";
import { User } from "./Dashboard";

const SecondDashboardPart = ({ user }: { user: User }) => {
  const [openedMonth, setOpenedMonth] = useState<string | null>(null);

  return (
    <div className="lg:w-3/8 lg:px-4 w-full gap-5 flex flex-col justify-between">
      <WorkoutsCountsChartSection user={user} setOpenedMonth={setOpenedMonth} />
      <SelectedMonth user={user} openedMonth={openedMonth} />
    </div>
  );
};

export default SecondDashboardPart;
