import { Routes, Route } from "react-router";
import EmployeList from "../pages/EmployeList/EmployeList";
import Index from "../pages/Index/Index";
import Error from "../pages/Error/Error";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/employe-list" element={<EmployeList />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Router;
