import { FC, ReactElement } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import TeacherDashboard from "./pages/dashboard/TeacherDashboard";
import Login from "./pages/auth/Splash";

const App: FC = (): ReactElement => {
  const user = false;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/teacherdashboard"
            element={user ? <TeacherDashboard /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
