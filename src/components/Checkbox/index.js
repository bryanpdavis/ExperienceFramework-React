import { FormGroup, FormControlLabel, Checkbox as _Checkbox } from '@mui/material';
import { CSSProperties, ReactElement, JSXElementConstructor } from 'react';

const Checkbox = (props) => (
  <FormGroup>
    <FormControlLabel control={<_Checkbox style={props.style} />} label={props.title} />
  </FormGroup>
);

export default Checkbox;
