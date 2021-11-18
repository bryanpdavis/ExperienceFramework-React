import { MenuItem as _MenuItem } from '@mui/material'

const MenuItem = (props) => (
    <_MenuItem value={props.value} label={props.label} {...props.disabled ? 'disabled' : null } />
  );

export default MenuItem;