import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

function ChartPie({ data }) {
  const options = {
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        backgroundColor: "rgb(255,255,255)",
        bodyColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        padding: 15,
        displayColors: false,
        caretPadding: 10,
      },
      legend: {
        display: false,
      },
    },
    cutout: "80%",
  };

  return (
    <div className="chart-pie">
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default ChartPie;
