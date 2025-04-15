"use client";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { monthNames } from "../../../../public/monthNames";
import { Workout } from "@/types/Workout";
import { UserDataFromDatabase } from "@/types/UserDataFromDatabase";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default function WorkoutsCountsChart({
  user,
  onClick,
}: {
  user: UserDataFromDatabase;
  onClick: (month: string) => void;
}) {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dataValues = labels.map(
    (month) =>
      user.workouts?.filter(
        (workout: Workout) =>
          new Date(workout.date).getMonth() === labels.indexOf(month)
      ).length
  );
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Workouts",
        data: dataValues,
        borderColor: "rgb(0, 0, 0)",
        backgroundColor: "rgba(0, 255, 0, 0.5)",
        fill: true,
      },
    ],
  };
  const options = {
    /* eslint-disable */
    // @ts-ignore
    onClick: (e: any) => {
      const elements = e.chart.getElementsAtEventForMode(
        e.native,
        "nearest",
        { intersect: true },
        false
      );

      if (elements.length > 0) {
        const { index } = elements[0];
        const month = labels[index];
        const count = dataValues[index];
        console.log(month, count);
        onClick(monthNames[month]);
      }
    },
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return <Bar data={data} options={options} />;
}
