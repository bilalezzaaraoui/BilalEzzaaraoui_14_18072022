import React from "react";
import { Routes, Route } from "react-router";
import EmployeList from "../pages/EmployeList/EmployeList";
import Index from "../pages/Index/Index";
import Error from "../pages/Error/Error";

/**
 * Component to display a Router
 *
 * @component
 *
 *
 * @returns (
 *  <Router />
 *)
 */

const Router = () => {
  return (
    <Routes>
      <Route path="/BilalEzzaaraoui_14_18072022/" element={<Index />} />
      <Route
        path="/BilalEzzaaraoui_14_18072022/employe-list"
        element={<EmployeList />}
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Router;
