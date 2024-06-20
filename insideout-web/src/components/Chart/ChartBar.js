// src/components/ChartBar.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Revenue",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: [4215, 5312, 6251, 7841, 9821, 14984],
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  layout: {
    padding: {
      left: 10,
      right: 25,
      top: 25,
      bottom: 0,
    },
  },
  scales: {
    x: {
      time: {
        unit: "month",
      },
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        maxTicksLimit: 6,
      },
      maxBarThickness: 25,
    },
    y: {
      ticks: {
        min: 0,
        max: 15000,
        maxTicksLimit: 5,
        padding: 10,
        callback(value) {
          return `$${new Intl.NumberFormat().format(value)}`;
        },
      },
      grid: {
        color: "rgb(234, 236, 244)",
        zeroLineColor: "rgb(234, 236, 244)",
        drawBorder: false,
        borderDash: [2],
        zeroLineBorderDash: [2],
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      titleMarginBottom: 10,
      titleFontColor: "#6e707e",
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: "#dddfeb",
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label(tooltipItem) {
          return `${tooltipItem.dataset.label}: $${new Intl.NumberFormat().format(tooltipItem.raw)}`;
        },
      },
    },
  },
};

function ChartBar() {
  return <Bar data={data} options={options} />;
}

export default ChartBar;
