import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import GeneralContext from "../components/GeneralContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(GeneralContext);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
