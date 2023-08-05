import { Container, Typography } from "@mui/material";
import { FC, ReactElement } from "react";

const TeacherDashboard: FC = (): ReactElement => {
  return (
    <div>
      <Container maxWidth="xl">
        <Typography variant="h2" color="primary">
          Welcome to teacher's dashboard
        </Typography>
      </Container>
    </div>
  );
};

export default TeacherDashboard;
