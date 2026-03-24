import React, { useContext } from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
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
    <div className="dashboard-shell">
      <div className="dashboard-header">
        <div className="user-info">
          <span>Welcome, {user?.username}</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>
      <nav className="dashboard-nav" aria-label="Dashboard navigation">
        <NavLink to="/" end className={({ isActive }) => `dashboard-nav-link${isActive ? " active" : ""}`}>
          Summary
        </NavLink>
        <NavLink to="/orders" className={({ isActive }) => `dashboard-nav-link${isActive ? " active" : ""}`}>
          Orders
        </NavLink>
        <NavLink to="/holdings" className={({ isActive }) => `dashboard-nav-link${isActive ? " active" : ""}`}>
          Holdings
        </NavLink>
        <NavLink to="/positions" className={({ isActive }) => `dashboard-nav-link${isActive ? " active" : ""}`}>
          Positions
        </NavLink>
        <NavLink to="/funds" className={({ isActive }) => `dashboard-nav-link${isActive ? " active" : ""}`}>
          Funds
        </NavLink>
      </nav>
      <div className="dashboard-main">
        <WatchList />
        <div className="dashboard-content">
          <Routes>
            <Route exact path="/" element={<Summary />} />
            <Route exact path="orders" element={<Orders />} />
            <Route exact path="holdings" element={<Holdings />} />
            <Route exact path="positions" element={<Positions />} />
            <Route exact path="funds" element={<Funds />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;  