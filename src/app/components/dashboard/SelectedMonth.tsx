import React from "react";
import { User } from "./Main/Dashboard";
import { formatTime } from "@/lib/time";

const SelectedMonth = ({
  openedMonth,
  user,
}: {
  openedMonth: string | null;
  user: User;
}) => {
  return (
    <div className="flex-1 w-full flex items-center justify-center">
      {openedMonth ? (
        <div className="w-full gap-2 h-full flex flex-col items-center p-2  rounded-md">
          <span className="tracking-widest text-xl">{openedMonth}</span>
          <div className="grow flex w-full lg:gap-4">
            <div className="flex-1 flex flex-col ">
              <div className="flex justify-between">
                <span>Average Time:</span>
                <span>
                  {user.workouts[openedMonth.toLowerCase()]?.length > 0
                    ? formatTime(
                        user.workouts[openedMonth.toLowerCase()].reduce(
                          (acc, workout) => acc + (workout.time || 0),
                          0
                        ) / user.workouts[openedMonth.toLowerCase()].length
                      )
                    : "0 min"}
                </span>
              </div>
            </div>
            <div className="flex flex-1 w-full "></div>
          </div>
        </div>
      ) : (
        <span>Click on the bar</span>
      )}
    </div>
  );
};

export default SelectedMonth;
