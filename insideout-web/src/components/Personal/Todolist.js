import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import toDoListByMentalTest from "../../dummyData/toDoListByMentalTest";
import toDoListByKeyword from "../../dummyData/toDoListByKeyword";
import CalendarTileContent from "../CalendarTileContent";
import "../../css/Todolist.css";

const formatDate = (date) => {
  const d = new Date(date);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join("-");
};

function Todolist({ userId = 1 }) {
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 5, 1));
  const [todoList, setTodoList] = useState([]);
  const [completionRate, setCompletionRate] = useState(0);
  const [calendarData, setCalendarData] = useState([]);

  useEffect(() => {
    const selectedDateString = formatDate(selectedDate);

    const mentalTestList = toDoListByMentalTest.filter(
      (item) =>
        formatDate(item.day) === selectedDateString && item.userId === userId,
    );
    const keywordList = toDoListByKeyword.filter(
      (item) =>
        formatDate(item.day) === selectedDateString && item.userId === userId,
    );
    const combinedList = [...mentalTestList, ...keywordList];
    setTodoList(combinedList); // Resetting the todoList state

    const completedItems = combinedList.filter(
      (item) => item.isComplete,
    ).length;
    const totalItems = combinedList.length;
    const rate = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;
    setCompletionRate(rate);
  }, [selectedDate, userId]); // Added userId to dependency array to reset state correctly

  useEffect(() => {
    const calendar = [];
    for (let i = 1; i <= 31; i += 1) {
      const date = new Date(2024, 5, i).getTime(); // 6월로 수정
      const dateString = formatDate(date);
      const mentalTestList = toDoListByMentalTest.filter(
        (item) => formatDate(item.day) === dateString && item.userId === userId,
      );
      const keywordList = toDoListByKeyword.filter(
        (item) => formatDate(item.day) === dateString && item.userId === userId,
      );
      const combinedList = [...mentalTestList, ...keywordList];
      const completedItems = combinedList.filter(
        (item) => item.isComplete,
      ).length;
      calendar.push({
        day: i,
        completed: completedItems,
        total: combinedList.length,
      });
    }
    setCalendarData(calendar);
  }, [userId]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setTodoList([]); // Clear the todo list before setting the new date
  };

  const renderTileContent = ({ date, view }) => (
    <CalendarTileContent date={date} view={view} calendarData={calendarData} />
  );

  return (
    <div className="td-checklist-page">
      <div className="td-sidebar">
        <div className="td-progress-chart">
          <Doughnut
            data={{
              labels: ["Complete", "Incomplete"],
              datasets: [
                {
                  data: [completionRate, 100 - completionRate],
                  backgroundColor: ["#4e73df", "#e0e0e0"],
                },
              ],
            }}
            options={{
              cutout: "70%",
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
          <div className="td-progress-rate">{Math.round(completionRate)}%</div>
        </div>
        <Calendar
          value={selectedDate}
          onChange={handleDateChange}
          tileContent={renderTileContent}
        />
      </div>
      <div className="td-content">
        <div className="td-card-header">
          <h5>투두리스트</h5>
        </div>
        <div className="td-card-body">
          {todoList.length > 0 ? (
            todoList.map((item) => (
              <div
                key={item.toDoListByKeywordId || item.toDoListId}
                className="td-todo-item"
              >
                <input type="checkbox" checked={item.isComplete} readOnly />
                <span>{item.k_contents || item.m_contents}</span>
              </div>
            ))
          ) : (
            <p>체크리스트가 없습니다.</p>
          )}
        </div>
        <div className="td-card-footer">
          <button className="td-btn td-btn-primary" type="button">
            수정
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todolist;
