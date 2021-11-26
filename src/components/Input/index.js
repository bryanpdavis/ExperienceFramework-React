import { TextField } from "@mui/material";

const Input = (props) => (
  <TextField variant={props.variant ? props.variant : "outlined"} label={props.title} />
);

export default Input;
