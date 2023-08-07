import { FC, ReactElement, useState } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import LoginEmailField from "./_loginEmailField";
import LoginPasswordField from "./_loginPasswordField";

const Login: FC = (): ReactElement => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authenticateUser = () => {
    // authenticate logic here for super admin
  };

  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        maxWidth={713}
        alignItems="center"
        justifyContent="center"
        margin="auto"
        marginTop={20}
        padding={5}
        borderRadius={6}
        boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
      >
        <img
          src="./images/logo_full.png"
          alt="Herald College Logo"
          height={62}
          width="auto"
          style={{ marginBottom: 55 }}
        />
        <Typography variant="h1" marginBottom={1}>
          Welcome Back Admin!
        </Typography>
        <Typography variant="body1" marginBottom={6}>
          Sign in to continue with PAT System
        </Typography>

        {/* login form here */}
        <Stack spacing={4}>
          <LoginEmailField onChange={(e) => setEmail(e.target.value)} />
          <LoginPasswordField onChange={(e) => setPassword(e.target.value)} />
          <Button
            variant="contained"
            sx={{
              fontSize: "20px",
              color: "white",
              height: "48px",
              textTransform: "none",
            }}
            onClick={authenticateUser}
          >
            Login
          </Button>
        </Stack>

        <Typography
          variant="body1"
          sx={{ fontSize: "16px", marginTop: "35px" }}
        >
          <Link to="/register" style={{ textDecoration: "none" }}>
            Forgort password?
          </Link>
        </Typography>
      </Box>
      <Typography
        variant="body1"
        sx={{ textAlign: "center", marginTop: "55px" }}
      >
        Copyright &copy; Herald College Kathmandu | All Right Reserved.
      </Typography>
    </div>
  );
};

export default Login;
