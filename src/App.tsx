import { FC, ReactElement } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import TeacherDashboard from "./pages/dashboard/TeacherDashboard";
import Login from "./pages/login/Login";

const App: FC = (): ReactElement => {
  const user = false;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TeacherDashboard />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
