import ChangeThemeContext from '@/providers/changeTheme'
import { FormControl, InputLabel, MenuItem } from '@mui/material'
import { Select } from '@mui/material'
import { useContext } from 'react'

export default function SelectMiu() {
  const { themeValue, handleThemeValue } = useContext(ChangeThemeContext)

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Color</InputLabel>
      <Select
        sx={{ width: '20%' }}
        defaultValue={themeValue || 'dark'}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Color"
        onChange={(event) => handleThemeValue(event.target.value as string)}
      >
        <MenuItem value="dark">Dark</MenuItem>
        <MenuItem value="pink">Pink</MenuItem>
      </Select>
    </FormControl>
  )
}
