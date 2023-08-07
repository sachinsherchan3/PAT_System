import { TextField } from "@mui/material";
import { FC, ReactElement } from "react";
import { ITextField } from "./interfaces/iTextField";

const LoginEmailField: FC<ITextField> = (props): ReactElement => {
  const { onChange } = props;
  return (
    <>
      <TextField
        id="email"
        name="email"
        label="Enter email"
        variant="outlined"
        type="email"
        sx={{ width: "480px" }}
        required
        onChange={onChange}
      />
    </>
  );
};

export default LoginEmailField;
