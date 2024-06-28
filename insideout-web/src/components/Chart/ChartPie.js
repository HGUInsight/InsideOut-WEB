import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
);

function ChartPie({ data }) {
  const options = {
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        backgroundColor: "#000000",
        bodyFontColor: "#ffffff",
        borderColor: "#dddfeb",
        borderWidth: 1,
        padding: 15,
        displayColors: false,
        caretPadding: 10,
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          fontColor: "#858796",
          padding: 20,
        },
      },
    },
    cutout: "75%",
  };

  return (
    <div
      className="chart-pie"
      style={{ position: "relative", height: "300px", marginBottom: "20px" }}
    >
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default ChartPie;
