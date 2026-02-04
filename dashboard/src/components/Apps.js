import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GeneralContextProvider } from "./GeneralContext";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
import PrivateRoute from "./PrivateRoute";

const Apps = () => {
  const syncAuthFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const userParam = params.get("user");

    if (!token && !userParam) {
      return;
    }

    if (token) {
      localStorage.setItem("token", token);
    }

    if (userParam) {
      try {
        const decoded = decodeURIComponent(userParam);
        const jsonStr = decodeURIComponent(escape(atob(decoded)));
        const user = JSON.parse(jsonStr);
        localStorage.setItem("user", JSON.stringify(user));
      } catch (error) {
        // Ignore user decoding errors
      }
    }

    params.delete("token");
    params.delete("user");
    const newSearch = params.toString();
    const newUrl = `${window.location.pathname}${
      newSearch ? `?${newSearch}` : ""
    }${window.location.hash}`;
    window.history.replaceState({}, document.title, newUrl);
  };

  syncAuthFromUrl();

  return (
    <BrowserRouter>
      <GeneralContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </GeneralContextProvider>
    </BrowserRouter>
  );
};

export default Apps;