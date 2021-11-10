import { Button as _Button } from '@mui/material'

const Button = (config) => {
  return (
    <div>
    <_Button style={config.props.style} variant={config.props.variant ? config.props.variant : "contained"}>{config.props.title}</_Button>
    </div>
  )
};

export default Button;