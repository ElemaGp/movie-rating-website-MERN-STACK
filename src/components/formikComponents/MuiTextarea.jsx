

import React from 'react'
import {Field} from 'formik'
import { TextField } from '@mui/material'


function MuiTextarea(props) {
    const { label, name, type, error, helperText, ...rest } = props
  return (
    <div>
        <Field as={TextField} name={name} type={name}  variant="outlined" color="primary" label={label} sx={{width: {xs: 250, sm: 500}}} error={error} helperText={helperText}/>
    </div>
  )
}

export default MuiTextarea