import React from "react";

function CalendarTileContent({ date, view, calendarData }) {
  if (view === "month") {
    const day = date.getDate();
    const data = calendarData.find((item) => item.day === day);
    if (data) {
      return (
        <div className="td-calendar-tile-content">
          {data.completed === data.total ? (
            <span className="td-check-icon">✔️</span>
          ) : (
            <span className="td-partial-complete">
              {data.completed}/{data.total}
            </span>
          )}
        </div>
      );
    }
  }
  return null;
}

export default CalendarTileContent;
