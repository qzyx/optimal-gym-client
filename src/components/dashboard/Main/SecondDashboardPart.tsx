"use client";

import { useState } from "react";
import SelectedMonthSection from "../SelectedMonthSection";
import WorkoutsCountsChartSection from "../WorkoutsCountsChartSection";
import { UserDataFromDatabase } from "@/types/UserDataFromDatabase";

const SecondDashboardPart = ({ user }: { user: UserDataFromDatabase }) => {
  const [openedMonth, setOpenedMonth] = useState<string | null>(null);

  return (
    <div className="lg:w-3/8  w-full gap-5 flex flex-col justify-between">
      <WorkoutsCountsChartSection user={user} setOpenedMonth={setOpenedMonth} />
      <SelectedMonthSection user={user} openedMonth={openedMonth} />
    </div>
  );
};

export default SecondDashboardPart;
