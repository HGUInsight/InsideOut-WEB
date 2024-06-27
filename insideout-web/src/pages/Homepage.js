import React from "react";
import HomeCard from "../components/HomeCard";
import users from "../dummyData/users";
import mentalTest from "../dummyData/mentalTests";
import toDoListByMentalTest from "../dummyData/toDoListByMentalTest";
import Card from "../components/Chart/Card";
import ChartArea from "../components/Chart/ChartArea";
import ChartPie from "../components/Chart/ChartPie";

function Homepage() {
  // 일일 체크리스트를 완료한 사람
  const selectedDate = new Date(2024, 5, 5); // 2024-06-05
  const completedUsers = toDoListByMentalTest
    .filter(
      (todo) =>
        todo.day.getTime() === selectedDate.getTime() && todo.isComplete,
    )
    .map((todo) => todo.userId);

  const uniqueCompletedUsers = [...new Set(completedUsers)];
  const completedUserNames = uniqueCompletedUsers.map(
    (id) => users.find((user) => user.userId === id)?.name,
  );

  const dailyChecklistDetails = (
    <ul>
      {completedUserNames.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );

  // 평균 진행현황
  const userCompletionRates = users.map((user) => {
    const userTodos = toDoListByMentalTest.filter(
      (todo) => todo.userId === user.userId,
    );
    const completedTodos = userTodos.filter((todo) => todo.isComplete).length;
    return userTodos.length ? (completedTodos / userTodos.length) * 100 : 0;
  });

  const averageCompletionRate = (
    userCompletionRates.reduce((acc, rate) => acc + rate, 0) /
    userCompletionRates.length
  ).toFixed(2);

  const averageCompletionDetails = (
    <ul>
      {users.map((user, index) => (
        <li key={user.userId}>
          {user.name}: {userCompletionRates[index]?.toFixed(2) || 0}%
        </li>
      ))}
    </ul>
  );

  // 평균 멘탈지수 증가율
  const userDateScores = {};
  users.forEach((user) => {
    userDateScores[user.userId] = mentalTest
      .filter((test) => test.userId === user.userId)
      .map((test) => ({ date: test.date, score: test.totalResult }));
  });

  const dateIncreases = {};
  Object.values(userDateScores).forEach((scores) => {
    scores.forEach((test, idx) => {
      if (idx === 0) return;
      const prevScore = scores[idx - 1].score;
      const increase = ((test.score - prevScore) / prevScore) * 100;
      const { date } = test;
      if (!dateIncreases[date]) dateIncreases[date] = [];
      dateIncreases[date].push(increase);
    });
  });

  const labels = Object.keys(dateIncreases).sort();
  const avgIncreases = labels.map((date) => {
    const increases = dateIncreases[date];
    return increases.reduce((acc, inc) => acc + inc, 0) / increases.length;
  });

  const cumulativeAvgIncreases = avgIncreases.reduce((acc, inc) => {
    const cumulativeSum = (acc.length ? acc[acc.length - 1] : 0) + inc;
    acc.push(cumulativeSum);
    return acc;
  }, []);

  const chartData = {
    labels,
    values: cumulativeAvgIncreases,
  };

  const mentalScoreIncreaseDetails = (
    <ul>
      {labels.map((dateLabel, index) => (
        <li key={dateLabel}>
          {dateLabel}: {cumulativeAvgIncreases[index].toFixed(2)}%
        </li>
      ))}
    </ul>
  );

  // 일자리 연계 가능 인원
  const jobReadyUsers = users.filter((user) => {
    const userTests = mentalTest.filter((test) => test.userId === user.userId);
    const lastTest = userTests[userTests.length - 1];
    return lastTest?.totalResult >= 90;
  });

  const jobReadyUserNames = jobReadyUsers.map((user) => user.name);

  const jobReadyDetails = (
    <ul>
      {jobReadyUserNames.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );

  // 일일리스트 완수율 (도미터리별)
  const dormCompletionRates = {};
  users.forEach((user) => {
    const userTodos = toDoListByMentalTest.filter(
      (todo) => todo.userId === user.userId,
    );
    const completedTodos = userTodos.filter((todo) => todo.isComplete).length;
    const completionRate = userTodos.length
      ? (completedTodos / userTodos.length) * 100
      : 0;
    if (!dormCompletionRates[user.dorm]) dormCompletionRates[user.dorm] = [];
    dormCompletionRates[user.dorm].push(completionRate);
  });

  const dormAverageCompletionRates = {};
  Object.keys(dormCompletionRates).forEach((dorm) => {
    const rates = dormCompletionRates[dorm];
    dormAverageCompletionRates[dorm] = (
      rates.reduce((acc, rate) => acc + rate, 0) / rates.length
    ).toFixed(2);
  });

  const pieChartData = {
    labels: Object.keys(dormAverageCompletionRates),
    datasets: [
      {
        data: Object.values(dormAverageCompletionRates),
        backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#f6c23e"],
      },
    ],
  };

  return (
    <div className="container-fluid">
      {/* 페이지 제목 */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">어서오세요, 관리자님!</h1>
      </div>

      {/* 카드들 */}
      <div className="row">
        <HomeCard
          title="일일 체크리스트를 완료한 사람"
          value={`${uniqueCompletedUsers.length}명`}
          icon="fa-calendar"
          details={dailyChecklistDetails}
        />
        <HomeCard
          title="평균 진행현황"
          value={`${averageCompletionRate}%`}
          icon="fa-dollar-sign"
          details={averageCompletionDetails}
        />
        <HomeCard
          title="평균 멘탈지수 증가율"
          value={`${(cumulativeAvgIncreases.reduce((a, b) => a + b, 0) / cumulativeAvgIncreases.length).toFixed(2)}%`}
          icon="fa-clipboard-list"
          details={mentalScoreIncreaseDetails}
        />
        <HomeCard
          title="일자리 연계 가능 인원"
          value={`${jobReadyUsers.length}명`}
          icon="fa-comments"
          details={jobReadyDetails}
        />
      </div>

      {/* 차트들 */}
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          <Card title="평균 멘탈지수 증가율">
            <div className="chart-area">
              <ChartArea data={chartData} />
            </div>
          </Card>
        </div>
        <div className="col-xl-4 col-lg-5">
          <Card title="일일리스트 완수율">
            <div className="chart-pie pt-4">
              <ChartPie data={pieChartData} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
