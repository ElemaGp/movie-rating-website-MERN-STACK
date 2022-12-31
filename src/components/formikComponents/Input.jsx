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
      <Field id={name} name={name} {...rest} style={{border:"none"}} >
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