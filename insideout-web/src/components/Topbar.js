import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Topbar() {
  const [alertsOpen, setAlertsOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const alertsDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        alertsDropdownRef.current &&
        !alertsDropdownRef.current.contains(event.target)
      ) {
        setAlertsOpen(false);
      }
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setUserOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [alertsDropdownRef, userDropdownRef]);

  const handleDropdownClick = (e, dropdownType) => {
    e.preventDefault();
    if (dropdownType === "alerts") {
      setAlertsOpen(!alertsOpen);
    } else if (dropdownType === "user") {
      setUserOpen(!userOpen);
    }
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
        type="button"
        aria-label="Toggle sidebar"
      >
        <i className="fa fa-bars" />
      </button>
      <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input
            type="text"
            className="form-control bg-light border-0 small"
            placeholder="Search for..."
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              aria-label="Primary button"
            >
              <i className="fas fa-search fa-sm" />
            </button>
          </div>
        </div>
      </form>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow d-sm-none">
          <a
            className="nav-link dropdown-toggle"
            href="/"
            id="searchDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="Search dropdown"
            onClick={(e) => handleDropdownClick(e, "search")}
          >
            <i className="fas fa-search fa-fw" />
          </a>
          <div
            className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
            aria-labelledby="searchDropdown"
          >
            <form className="form-inline mr-auto w-100 navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary"
                    type="button"
                    aria-label="input-group-append"
                  >
                    <i className="fas fa-search fa-sm" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>
        <li className="nav-item dropdown no-arrow mx-1">
          <a
            className="nav-link dropdown-toggle"
            href="/"
            id="alertsDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={alertsOpen}
            onClick={(e) => handleDropdownClick(e, "alerts")}
          >
            <i className="fas fa-bell fa-fw" />
            <span className="badge badge-danger badge-counter">3+</span>
          </a>
          <div
            ref={alertsDropdownRef}
            className={`dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in ${alertsOpen ? "show" : ""}`}
            aria-labelledby="alertsDropdown"
          >
            <h6 className="dropdown-header">Alerts Center</h6>
            <a className="dropdown-item d-flex align-items-center" href="/">
              <div className="mr-3">
                <div className="icon-circle bg-primary">
                  <i className="fas fa-file-alt text-white" />
                </div>
              </div>
              <div>
                <div className="small text-gray-500">2024년 6월 28일</div>
                <span className="font-weight-bold">
                  새로운 입주자가 있습니다. 확인해보세요.
                </span>
              </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="/">
              <div className="mr-3">
                <div className="icon-circle bg-warning">
                  <i className="fas fa-exclamation-triangle text-white" />
                </div>
              </div>
              <div>
                <div className="small text-gray-500">2024년 6월 28일</div>
                멘탈지수가 떨어지고 있는 사람이 있습니다. 확인해보세요.
              </div>
            </a>
            <a
              className="dropdown-item text-center small text-gray-500"
              href="/"
            >
              Show All Alerts
            </a>
          </div>
        </li>
        <div className="topbar-divider d-none d-sm-block" />
        <li className="nav-item dropdown no-arrow">
          <a
            className="nav-link dropdown-toggle"
            href="/"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={userOpen}
            onClick={(e) => handleDropdownClick(e, "user")}
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              홍길동 님
            </span>
            <img
              className="img-profile rounded-circle"
              src="img/undraw_profile.svg"
              alt="..."
            />
          </a>
          <div
            ref={userDropdownRef}
            className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${userOpen ? "show" : ""}`}
            aria-labelledby="userDropdown"
          >
            <a className="dropdown-item" href="/">
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
              Profile
            </a>
            <a className="dropdown-item" href="/">
              <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
              Settings
            </a>
            <a className="dropdown-item" href="/">
              <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
              Activity Log
            </a>
            <div className="dropdown-divider" />
            <a
              className="dropdown-item"
              href="/"
              data-toggle="modal"
              data-target="#logoutModal"
            >
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
              Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Topbar;
