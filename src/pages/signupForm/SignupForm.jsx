import style from "./signupForm.module.css"

import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from "../../components/formikComponents/FormikControl"


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
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords much match').required('Required')
  })

  const onSubmit = values => {
    console.log('Form data', values)
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
            <FormikControl
              control='input'
              // control='chakraInput'
              type='text'
              label='First Name'
              name='firstName'    //the "name" has to match with the initial value's name above.
            />
            <FormikControl
              control='input'
              type='text'
              label='Last Name'
              name='lastName'    //the "name's" value has to match with the initial value's name above.
            />
            <FormikControl
              control='input'
              type='email'
              label='Email'
              name='email'    //the "name's" value has to match with the initial value's name above.
            />
            <FormikControl
              control='input'
              type='password'
              label='Password'
              name='password'    //the "name's" value has to match with the initial value's name above.
            />
            <FormikControl
              control='input'
              type='password'
              label='Confirm Password'
              name='confirmPassword'    //the "name's" value has to match with the initial value's name above.
            />
            <button type='submit' disabled={!formik.isValid} className={style.btn}>Submit</button> {/*"formik.isValid is false whenever there is an error" */}
          </Form>
        )
      }}
    </Formik>
  )
}

export default SignupForm
