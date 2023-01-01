//I'm using the "MuiInput.jsx" component instead of this "input.jsx" component, because the Muiinput component uses Material-ui library which helps me style the form better, especially for error state. (So the components being used for the form is MuiInput.jsx, FormikControl.jsx and SignupForm.jsx)

import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import style from "./input.module.css"

function Input (props) {
  const { label, name, ...rest } = props
  
  return (
    <div className={style.formControl}>
      <div className={style.formLabelAndFieldAndError}>
      <label htmlFor={name} className={style.formLabel}>{label}</label>
      <Field id={name} name={name} {...rest} >
      { ({ 
       field,  /*destructured the field component to get the "field" and "meta"* objects*/
       meta: { touched, error }  /*further destructured the meta object to get its"touched" and "error" properties*/
    }) => <input className={ touched && error ? style.invalid : style.formField } { ...field } />
  }
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  </div>
  )
}

export default Input