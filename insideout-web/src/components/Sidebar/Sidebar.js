// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

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
      <div className="sidebar-heading">생활관</div>
      <li className="nav-item">
        <Link className="nav-link" to="/charts">
          <i className="fas fa-fw fa-chart-area" />
          <span>Charts</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/tables">
          <i className="fas fa-fw fa-table" />
          <span>Tables</span>
        </Link>
      </li>
      <hr className="sidebar-divider d-none d-md-block" />
      <div className="text-center d-none d-md-inline">
        <button
          className="rounded-circle border-0"
          id="sidebarToggle"
          type="button"
          aria-label="Toggle Sidebar"
        />
      </div>
    </ul>
  );
}

export default Sidebar;
