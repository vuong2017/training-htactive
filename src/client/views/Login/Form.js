import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, 'Name must be 6 characters!')
    .max(30, 'Name must be less than 30 characters!')
    .required('Username required'),
  password: Yup.string()
    .min(6, 'Password must be 6 characters!')
    .max(30, 'Password must be less than 30 characters!')
    .required('Password required'),
})

class Form extends React.Component {

  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(values, actions) {
    this.props.loginRequest(values)
    console.log(values)
  }

  render() {
    return (
      <section className="login-form">
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={this.handleAdd}
          component={(props) =>
            <FormLogin
              {...props}
            />
          }
        />
      </section>
    )
  }
}

const FormLogin = (props) => {
  return (
    <form role="login" onSubmit={props.handleSubmit}>
      <img
        src="http://recruit.htactive.com/assets/logo_light_blue.png"
        className="custom-img-login img-responsive" alt="HT Active"
      />
      <input
        type="text"
        name="username"
        placeholder="Enter Username"
        className="form-control input-lg"
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.username}
      />
      {props.errors.username && <span id="feedback" className="span-red">{props.errors.username}</span>}
      <input
        type="password"
        name="password"
        placeholder="Enter Passowrd"
        className="form-control input-lg"
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.password}
      />
      {props.errors.password && <span id="feedback" className="span-red">{props.errors.password}</span>}
      <div className="pwstrength_viewport_progress"></div>
      <button
        type="submit"
        className="btn btn-lg btn-primary btn-block"
      >
        Sign in
      </button>
    </form>
  )
}

export default Form