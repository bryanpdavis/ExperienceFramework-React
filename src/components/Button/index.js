import { Button as _Button } from '@mui/material'

const Button = (props) => (
  <_Button style={props.style} variant={props.variant ? props.variant : "contained"}>{props.title}</_Button>
);

export default Button;