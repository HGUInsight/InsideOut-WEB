import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // useNavigate로 변경
import BasicInfo from "../components/Personal/BasicInfo";
import MentalScore from "../components/Personal/MentalScore";
import Todolist from "../components/Personal/Todolist";
import userData from "../dummyData/users";
import "../css/PersonalPage.css";

function PersonalPage() {
  const { id } = useParams(); // Get the user ID from the URL
  const navigate = useNavigate(); // Use useNavigate hook for navigation
  const [activeTab, setActiveTab] = useState("basicInfo");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const user = userData.find((u) => u.userId === parseInt(id, 10));
    if (user) {
      setUserName(user.name);
    }
  }, [id]);

  const renderTabContent = () => {
    switch (activeTab) {
      case "basicInfo":
        return <BasicInfo selectedUserId={parseInt(id, 10)} />;
      case "mentalScore":
        return <MentalScore selectedUserId={parseInt(id, 10)} />;
      case "todolist":
        return <Todolist selectedUserId={parseInt(id, 10)} />;
      default:
        return <BasicInfo selectedUserId={parseInt(id, 10)} />;
    }
  };

  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <>
      <div className="container-fluid personal-page">
        <div className="tabs">
          <button
            type="button"
            className={activeTab === "basicInfo" ? "active" : ""}
            onClick={() => setActiveTab("basicInfo")}
          >
            기본정보
          </button>
          <button
            type="button"
            className={activeTab === "mentalScore" ? "active" : ""}
            onClick={() => setActiveTab("mentalScore")}
          >
            멘탈지수
          </button>
          <button
            type="button"
            className={activeTab === "todolist" ? "active" : ""}
            onClick={() => setActiveTab("todolist")}
          >
            투두리스트
          </button>
        </div>
        <div className="tab-content card">
          <div className="card-header">
            <h5 className="font-weight-bold text-primary">{userName} 님</h5>
          </div>
          <div className="card-body">{renderTabContent()}</div>
        </div>
      </div>
      <div className="card-footer">
        <button
          className="btn btn-secondary"
          onClick={handleGoBack}
          type="button"
        >
          뒤로가기
        </button>
      </div>
    </>
  );
}

export default PersonalPage;
