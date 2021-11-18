<<<<<<< Updated upstream
import { FormGroup, FormControlLabel, Checkbox as _Checkbox } from '@mui/material';

const Checkbox = (config) => (
  <FormGroup>
    <FormControlLabel control={<_Checkbox style={config.props.style} />} label={config.props.title} />
  </FormGroup>
=======
import { Checkbox as _Checkbox } from '@mui/material'

const Checkbox = (config) => (
  <_Checkbox style={config.props.style} label={config.props.label} disabled={config.props.disabled} />
>>>>>>> Stashed changes
);

export default Checkbox;
