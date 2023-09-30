import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

const RatingFilters = () => {
  return (
    <FormGroup>
        <FormControlLabel control={<Checkbox />} label="1 Star" />
        <FormControlLabel control={<Checkbox />} label="2 Star" />
        <FormControlLabel control={<Checkbox />} label="3 Star" />
        <FormControlLabel control={<Checkbox />} label="4 Star" />
        <FormControlLabel control={<Checkbox />} label="5 Star" />
        <FormControlLabel control={<Checkbox />} label="Unrated" />
    </FormGroup>
  )
}

export default RatingFilters