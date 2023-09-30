import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

const CheckboxFilters = () => {
  return (
    <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Parking" />
        <FormControlLabel control={<Checkbox />} label="Swimming pool" />
        <FormControlLabel control={<Checkbox />} label="Breakfast" />
        <FormControlLabel control={<Checkbox />} label="Gymnesium" />
        <FormControlLabel control={<Checkbox />} label="Wi Fi" />
    </FormGroup>
  )
}

export default CheckboxFilters