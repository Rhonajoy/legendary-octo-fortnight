import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home, MainPage } from "./components/pages";
import { Login, Register } from "./components/authentication";
import { useAuth } from "./contexts/authContext";

const AppRoutes: React.FC = () => {
  const { userLoggedIn } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/main"
        element={userLoggedIn ? <MainPage /> : <Navigate to="/login" replace />}
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
