import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import mentalTest from "../../dummyData/mentalTests";
import "../../css/MentalScore.css";

function MentalScore({ selectedUserId }) {
  const [chartData, setChartData] = useState(null);
  const [latestScore, setLatestScore] = useState(null);
  const [latestDate, setLatestDate] = useState(null);

  useEffect(() => {
    const userTests = mentalTest.filter(
      (test) => test.userId === selectedUserId,
    );
    if (userTests.length > 0) {
      const dates = userTests.map((test) => test.date);
      const scores = userTests.map((test) => test.totalResult);
      const latestTest = userTests[userTests.length - 1];

      setChartData({
        labels: dates,
        datasets: [
          {
            label: "Total Result",
            data: scores,
            borderColor: "rgba(78, 115, 223, 1)",
            backgroundColor: "rgba(78, 115, 223, 0.1)",
            fill: true,
            lineTension: 0.3,
            pointRadius: 3,
            pointBackgroundColor: "rgba(78, 115, 223, 1)",
            pointBorderColor: "rgba(78, 115, 223, 1)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
            pointHoverBorderColor: "rgba(78, 115, 223, 1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
          },
        ],
      });

      setLatestScore(latestTest.totalResult);
      setLatestDate(latestTest.date);
    }
  }, [selectedUserId]);

  return (
    <div>
      <div className="recent-score">
        <h3>최근 멘탈 지수: {latestScore}</h3>
        <p>({latestDate})</p>
      </div>
      <div className="chart-area">
        {chartData ? <Line data={chartData} /> : <p>데이터를 불러오는 중...</p>}
      </div>
    </div>
  );
}

MentalScore.propTypes = {
  selectedUserId: PropTypes.number.isRequired,
};

export default MentalScore;
