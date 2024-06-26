// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar";
import Homepage from "./pages/Homepage";
import SettingPage from "./pages/SettingPage";
import TodolistPage from "./pages/TodolistPage";
import TodoDetailPage from "./pages/TodoDetailPage";
import DormPage from "./pages/DormPage";
import PersonalPage from "./pages/PersonalPage";
import "./css/custom.css";
import "./css/DormGrape.css";
import "./css/PersonalPage.css";
import "./css/BasicInfo.css";
import "./css/sb-admin-2.min.css";

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/dorm" element={<DormPage />} />
              <Route path="/todolist" element={<TodolistPage />} />
              <Route path="/setting" element={<SettingPage />} />
              <Route path="/personal/:id" element={<PersonalPage />} />
              <Route path="/todo/:id" element={<TodoDetailPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
