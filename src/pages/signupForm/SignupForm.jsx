import style from "./signupForm.module.css"

import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from "../../components/formikComponents/FormikControl"
import { Button } from "@mui/material"


function SignupForm () {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required("Last name is required").min(2, "Name must be at least two characters"),
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    password: Yup.string().required('Required').min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords much match').required('Required')
  })

  const onSubmit = (values, formikHelpers) => {
    console.log('Form data', values)
    formikHelpers.resetForm();
  }

  return (
    
    
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        return (
          <Form className={style.formContainer}>
            <h1 className={style.signupText}>SIGN UP</h1>
            <FormikControl
              control='MuiInput'
              // control='chakraInput'
              type='text'
              label='First Name'
              name='firstName'    //the "name" has to match with the initial value's name above.
              error={Boolean(formik.errors.firstName) && Boolean(formik.touched.firstName)} //if both "formik.errors" and "formik.touched" are true, then the "error" prop is true.
              helperText={Boolean(formik.touched.firstName) && formik.errors.firstName} //if "formik.touched.firstName" is true, then display the "formik.errors" associated with the "firstName".
            />
            <FormikControl
              control='MuiInput'
              type='text'
              label='Last Name'
              name='lastName'    //the "name's" value has to match with the initial value's name above.
              error={Boolean(formik.errors.lastName) && Boolean(formik.touched.lastName)} //if both "formik.errors" and "formik.touched" are true, then the "error" prop is true.
              helperText={Boolean(formik.touched.lastName) && formik.errors.lastName} //if "formik.touched.lastName" is true, then display the "formik.errors" associated with the "lastName".
            />
            <FormikControl
              control='MuiInput'
              type='email'
              label='Email'
              name='email'    //the "name's" value has to match with the initial value's name above.
              error={Boolean(formik.errors.email) && Boolean(formik.touched.email)} //if both "formik.errors" and "formik.touched" are true, then the "error" prop is true.
              helperText={Boolean(formik.touched.email) && formik.errors.email} //if "formik.touched.email" is true, then display the "formik.errors" associated with the "email".
            />
            <FormikControl
              control='MuiInput'
              type='password'
              label='Password'
              name='password'    //the "name's" value has to match with the initial value's name above.
              error={Boolean(formik.errors.password) && Boolean(formik.touched.password)} //if both "formik.errors" and "formik.touched" are true, then the "error" prop is true.
              helperText={Boolean(formik.touched.password) && formik.errors.password} //if "formik.touched.password" is true, then display the "formik.errors" associated with the "password".
            />
            <FormikControl
              control='MuiInput'
              type='password'
              label='Confirm Password'
              name='confirmPassword'    //the "name's" value has to match with the initial value's name above.
              error={Boolean(formik.errors.confirmPassword) && Boolean(formik.touched.confirmPassword)} //if both "formik.errors" and "formik.touched" are true, then the "error" prop is true.
              helperText={Boolean(formik.touched.confirmPassword) && formik.errors.confirmPassword} //if "formik.touched.confirmPassword" is true, then display the "formik.errors" associated with the "confirmPassword".
            />
            {/* <button type='submit' disabled={!formik.isValid} className={style.btn}>Sign Up</button> "formik.isValid is false whenever there is an error" */}
            <Button type="submit" variant="contained" color="primary" size="large" disabled={!formik.dirty || !formik.isValid}>Sign Up</Button>
          </Form>
        )
      }}
    </Formik>
    
  )
}

export default SignupForm
