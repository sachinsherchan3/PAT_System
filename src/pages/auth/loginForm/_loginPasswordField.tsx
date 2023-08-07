import { TextField, InputAdornment, IconButton } from "@mui/material";
import { useState } from "react";
import { FC, ReactElement } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ITextField } from "./interfaces/iTextField";

const LoginPasswordField: FC<ITextField> = (props): ReactElement => {
  const { onChange } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <TextField
        id="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        variant="outlined"
        sx={{ width: "480px" }} // Set the custom width here
        required
        onChange={onChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default LoginPasswordField;
