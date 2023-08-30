import { FC, ReactElement } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import TeacherDashboard from "./pages/dashboard/TeacherDashboard";
import Splash from "./pages/auth/Splash";
import Login from "./pages/auth/loginForm/LoginForm";
import VerificationSend from "./pages/auth/verificationSend";

const App: FC = (): ReactElement => {
  // const user = false;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/teacherdashboard" element={<TeacherDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/verification-email-send"
            element={<VerificationSend />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
