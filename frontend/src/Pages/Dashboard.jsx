import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import DashProfile from "../components/DashComponents/DashProfile";
import DashPosts from "../components/DashComponents/DashPosts";
import DashComment from "../components/DashComponents/DashComment";
import DashUsers from "../components/DashComponents/DashUser";
import DashSidebar from "../components/DashComponents/DashSidebar";
import DashBoardCom from "../components/DashComponents/DashBoardCom"

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        <DashSidebar />
      </div>
      {tab === "profile" && <DashProfile />}
      {tab === "posts" && <DashPosts />}
      {tab === "users" && <DashUsers />}
      {tab === "comments" && <DashComment />}
      {tab === "dash" && <DashBoardCom />}
    </div>
  );
};

export default Dashboard;
