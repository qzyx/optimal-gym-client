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

import { UserDataFromDatabase } from "@/types/UserDataFromDatabase";
import { Workout } from "@/types/Workout";

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

export default function TimeElapsedChart({
  user,
}: {
  user: UserDataFromDatabase;
}) {
  const workouts = user.workouts?.map((workout: string) => JSON.parse(workout));
  const labels = workouts
    ? workouts.slice(-6).map((workout: Workout) => workout.date)
    : [0]; // Extract date for last 6 workouts
  const dataValues = workouts
    ? workouts.slice(-6).map((workout: Workout) => workout.duration / 60)
    : [0]; // Convert time to hours for last 6 workouts

  const maxValue = Math.max(...dataValues) + Math.min(...dataValues) / 2; // Calculate max value for y-axis
  const minValue = Math.min(...dataValues) - Math.min(...dataValues) / 2;
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Workout Time Elapsed",
        data: dataValues,
        borderColor: "rgb(0, 0, 0)",
        backgroundColor: "rgba(0, 255, 0, 0.5)",
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
