import { Box, Typography, Button, Divider } from "@mui/material";
import { FC, ReactElement } from "react";
import Googleicon from "../../components/icons/googleIcon";
import { Link } from "react-router-dom";

const SplashScreen: FC = (): ReactElement => {
  const googleLogin = () => {
    window.open(
      "http://localhost:3000/api/users/registration/auth/google",
      "_self"
    );
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
          Welcome to HCK PAT System!
        </Typography>
        <Typography variant="body1" marginBottom={8}>
          Sign in using college email.
        </Typography>
        <Button
          variant="contained"
          startIcon={<Googleicon />}
          sx={{
            fontSize: "20px",
            color: "white",
            width: "528px",
            height: "58px",
            textTransform: "none",
            "& .css-1d6wzja-MuiButton-startIcon": {
              marginRight: "16px",
            },
          }}
          onClick={googleLogin}
        >
          Sign in with Google
        </Button>
        <Box
          display="flex"
          alignItems="center"
          width="80%"
          justifyContent="center"
          marginY={2}
        >
          <Divider sx={{ width: "50%" }} />
          <Typography variant="body1" sx={{ px: 2 }}>
            Or
          </Typography>
          <Divider sx={{ width: "50%" }} />
        </Box>
        {/* continue with email button */}
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            sx={{
              fontSize: "20px",
              color: "#747474",
              width: "528px",
              height: "58px",
              borderColor: "#bbbbbb",
              textTransform: "none",
            }}
          >
            Continue with email
          </Button>
        </Link>
        <Typography
          variant="body1"
          sx={{ fontSize: "16px", marginTop: "135px" }}
        >
          Already have an account?
          <Link style={{ marginLeft: "4px" }} to="/login">
            Sign in
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

export default SplashScreen;
