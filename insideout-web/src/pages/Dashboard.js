import React from "react";
import InformationCard from "../components/InformationCard";

function Dashboard() {
  return (
    <div className="container-fluid">
      {/* 페이지 제목 */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">어서오세요, 관리자님!</h1>
      </div>

      {/* 카드들 */}
      <div className="row">
        <InformationCard
          title="일일 체크리스트를 완료한 사람"
          value="8명"
          icon="fa-calendar"
        />
        <InformationCard
          title="평균 진행현황"
          value="70%"
          icon="fa-dollar-sign"
        />
        <InformationCard
          title="평균 멘탈지수 증가율"
          value="50%"
          icon="fa-clipboard-list"
        />
        <InformationCard
          title="일자리 연계 가능 인원"
          value="2명"
          icon="fa-comments"
        />
      </div>
    </div>
  );
}

export default Dashboard;
