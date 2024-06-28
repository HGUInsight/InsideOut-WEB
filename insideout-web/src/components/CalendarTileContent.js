import React from "react";

function CalendarTileContent({ date, view, calendarData }) {
  if (view === "month") {
    const day = date.getDate();
    const data = calendarData.find((item) => item.day === day) || {
      completed: 0,
      total: 0,
    };
    let content = null;
    if (data.total > 0) {
      if (data.completed === data.total) {
        content = <span className="td-check-icon">✔️</span>;
      } else {
        content = (
          <span className="td-partial-complete">
            {data.completed}/{data.total}
          </span>
        );
      }
    }
    return <div className="td-calendar-tile-content">{content}</div>;
  }
  return null;
}

export default CalendarTileContent;
