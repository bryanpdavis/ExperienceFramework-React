import { FormControl, InputLabel, MenuItem, Select as _Select } from '@mui/material'

const Select = (config) => {
    const props = config.props;

    return (
      <><_Select label="Age" style={{color:"#A0A0A0"}}>
        {config.props.items.map(item => {
          return <MenuItem key={item.value} value={item.value} label={item.label} {...item.disabled ? 'disabled' : '' }>{item.label}</MenuItem>
        })}
      </_Select></>
    )
}

export default Select;