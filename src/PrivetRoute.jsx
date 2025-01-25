import React, { useContext } from "react";
import { UserContext } from "./AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();
  if (loading) {
    return;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/login" />;
};
