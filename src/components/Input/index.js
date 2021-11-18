import { TextField } from "@mui/material";

const Input = (config) => (
  <TextField variant={config.props.variant ? config.props.variant : "outlined"} label={config.props.title} />
);

export default Input;
