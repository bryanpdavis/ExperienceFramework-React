import { FormGroup, FormControlLabel, Checkbox as _Checkbox } from '@mui/material';

const Checkbox = (config) => (
  <FormGroup>
    <FormControlLabel control={<_Checkbox style={config.props.style} />} label={config.props.title} />
  </FormGroup>
);

export default Checkbox;
