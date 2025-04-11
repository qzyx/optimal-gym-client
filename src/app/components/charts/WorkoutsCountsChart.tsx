"use client";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { User } from "../dashboard/Dashboard";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default function WorkoutsCountsChart({ user }: { user: User }) {
  const labels = user.wourkoutCount.map((workout) => workout.month); // Extract date
  const dataValues = user.wourkoutCount.map((workout) => workout.count); // Convert time to hours
  const maxValue = Math.max(...dataValues) + Math.min(...dataValues) / 2; // Calculate max value for y-axis
  const minValue = Math.min(...dataValues) - Math.min(...dataValues) / 2;
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Workout Time Elapsed",
        data: dataValues,
        borderColor: "rgb(0, 0, 0)",
        backgroundColor: "rgba(0, 255, 0, 0.3)",
        fill: true,
      },
    ],
  };
  const options = {
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
