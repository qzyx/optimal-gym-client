"use client";

import {
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
import { Line } from "react-chartjs-2";
import { User } from "../dashboard/Dashboard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function TimeElapsedChart({ user }: { user: User }) {
  const labels = user.workouts.map((workout) => workout.date); // Extract date
  const dataValues = user.workouts.map((workout) => workout.time / 60); // Convert time to hours
  const maxValue = Math.max(...dataValues) + Math.min(...dataValues) / 2; // Calculate max value for y-axis
  const minValue = Math.min(...dataValues) - Math.min(...dataValues) / 2;
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Workout Time Elapsed",
        data: dataValues,
        borderColor: "rgb(0, 0, 0)",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
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
        min: minValue, // Ensure the y-axis starts at 0
        max: maxValue, // Set the maximum value for the y-axis
        title: {
          display: true,
          text: "Time (Minutes)", // Y-axis label
        },
      },
    },
  };
  return <Line data={data} options={options} />;
}
