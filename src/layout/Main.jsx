import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Heder } from "./Heder";

export const Main = () => {
  return (
    <div>
      <Heder />
      <Outlet />
      <Footer />
    </div>
  );
};
