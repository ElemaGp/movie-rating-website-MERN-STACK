

import React from 'react'
import {Field} from 'formik'
import { TextField } from '@mui/material'


function MuiTextarea(props) {
    const { label, name, type, error, helperText, multiline, rows, maxRows, ...rest } = props
  return (
    <div>
        <Field as={TextField} name={name} type={name}  variant="outlined" color="primary" label={label} sx={{width: {xs: 250, sm: 700}}} multiline rows={rows} maxRows={maxRows} error={error} helperText={helperText}/> {/*The "error" props makes the border red it is true (ie when there's an error), the helper text displays the error message*/}
    </div>
  )
}

export default MuiTextarea