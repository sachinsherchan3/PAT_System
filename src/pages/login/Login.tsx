import { Container, Typography } from "@mui/material";
import { FC, ReactElement } from "react";

const Login: FC = (): ReactElement => {
  return (
    <div>
      <Container maxWidth="xl">
        <Typography variant="h2" color="primary">
          Login to PAT System
        </Typography>
      </Container>
    </div>
  );
};

export default Login;
