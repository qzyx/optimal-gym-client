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
import { User } from "../dashboard/Main/Dashboard";

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
  user: User;
  onClick: (month: string) => void;
}) {
  const monthNames: Record<string, string> = {
    JAN: "January",
    FEB: "February",
    MAR: "March",
    APR: "April",
    MAY: "May",
    JUN: "June",
    JUL: "July",
    AUG: "August",
    SEP: "September",
    OCT: "October",
    NOV: "November",
    DEC: "December",
  };

  const labels = user.wourkoutCount.map((workout) => workout.month); // Extract date
  const dataValues = user.wourkoutCount.map((workout) => workout.count); // Convert time to hours
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
