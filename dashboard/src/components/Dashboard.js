import React, { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import GeneralContext from "./GeneralContext";
import Funds from "./Funds";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import "./Dashboard.css";

const Dashboard = () => {
  const { user, logout } = useContext(GeneralContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="user-info">
          <span>Welcome, {user?.username}</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>
      <WatchList />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route exact path="orders" element={<Orders />} />
          <Route exact path="holdings" element={<Holdings />} />
          <Route exact path="positions" element={<Positions />} />
          <Route exact path="funds" element={<Funds />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;  