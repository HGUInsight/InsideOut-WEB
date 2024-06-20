// src/pages/Charts.js
import React from "react";
import ChartArea from "../components/Chart/ChartArea";
import ChartBar from "../components/Chart/ChartBar";
import ChartPie from "../components/Chart/ChartPie";
import Card from "../components/Chart/Card";

function Charts() {
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">Charts</h1>
      <p className="mb-4">
        Chart.js is a third party plugin that is used to generate the charts in
        this theme. The charts below have been customized - for further
        customization options, please visit the{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.chartjs.org/docs/latest/"
        >
          official Chart.js documentation
        </a>
        .
      </p>

      <div className="row">
        <div className="col-xl-8 col-lg-7">
          <Card title="Area Chart">
            <div className="chart-area">
              <ChartArea />
            </div>
          </Card>
          <Card title="Bar Chart">
            <div className="chart-bar">
              <ChartBar />
            </div>
          </Card>
        </div>
        <div className="col-xl-4 col-lg-5">
          <Card title="Donut Chart">
            <div className="chart-pie pt-4">
              <ChartPie />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Charts;
