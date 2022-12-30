import style from "./loginForm.module.css"
import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from "../../components/formikComponents/FormikControl"


function LoginForm () {
  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    password: Yup.string().required('Required')
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
            <h1 className={style.signupText}>LOG IN</h1>
            <FormikControl
              control='input'
              // control='chakraInput'
              type='email'
              label='Email'
              name='email'    //the "name" has to match with the initial value's name above.
            />
            <FormikControl
              control='input'
              type='password'
              label='Password'
              name='password'    //the "name's" value has to match with the initial value's name above.
            />
            
            <button type='submit' disabled={!formik.isValid} className={style.btn}>Sign Up</button> {/*"formik.isValid is false whenever there is an error" */}
          </Form>
        )
      }}
    </Formik>
    
  )
}

export default LoginForm
