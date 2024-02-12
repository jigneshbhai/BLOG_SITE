import React, { useEffect, useState } from "react";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import { useLocation } from "react-router-dom";
import DashPosts from "../components/DashPosts";
import DashUser from "../components/DashUser";
import DashComment from "../components/DashComment";
import DashBoardCom from "../components/DashBoardCom";

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
      {tab === "users" && <DashUser />}
      {tab === "comments" && <DashComment />}
      {tab === "dash" && <DashBoardCom />}
    </div>
  );
};

export default Dashboard;
