import React from "react";
import { Link } from "react-router-dom";
import SidebarHeading from "./SidebarHeading";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">
          Inside-out
          <br />
          <sup>관리자용 페이지</sup>
        </div>
      </a>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item">
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-home" />
          <span>Home</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />
      <SidebarHeading text="목록" />
      {/* 생활관 리스트 */}
      <li className="nav-item">
        <Link className="nav-link collapsed btn btn-link" to="/dorm">
          <i className="fas fa-fw fa-building" />
          <span>생활관</span>
        </Link>
      </li>
      {/* 투두 리스트 */}
      <li className="nav-item">
        <Link className="nav-link collapsed btn btn-link" to="/todolist">
          <i className="fas fa-fw fa-tasks" />
          <span>투두리스트</span>
        </Link>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />

      {/* 아래부분 */}
      <div className="sidebar-bottom-items">
        <li className="nav-item">
          <Link className="nav-link" to="/setting">
            <i className="fas fa-fw fa-user-circle" />
            <span>계정관리</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/logout">
            <i className="fas fa-fw fa-sign-out-alt" />
            <span>로그아웃</span>
          </Link>
        </li>
      </div>
    </ul>
  );
}

export default Sidebar;
