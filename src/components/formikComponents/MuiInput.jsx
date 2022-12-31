import React from 'react'
import {Field} from 'formik'
import { TextField } from '@mui/material'


function MuiInput(props) {
    const { label, name, type, error, helperText, ...rest } = props
  return (
    <div>
        <Field as={TextField} name={name} type={name}  variant="outlined" color="primary" label={label} sx={{width: "50vw"}} error={error} helperText={helperText}/>
    </div>
  )
}

export default MuiInput