import { FC, ReactElement } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import TeacherDashboard from "./pages/dashboard/TeacherDashboard";
import Splash from "./pages/auth/Splash";
import Login from "./pages/auth/loginForm/LoginForm";

const App: FC = (): ReactElement => {
  const user = false;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route
            path="/teacherdashboard"
            element={user ? <TeacherDashboard /> : <Navigate to="/" />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
