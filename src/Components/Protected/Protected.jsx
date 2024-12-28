import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  useEffect(() => {
    console.log("i am in protected");
  }, []);
  return localStorage.getItem("token") ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;
