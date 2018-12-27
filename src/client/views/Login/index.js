import React from 'react'
import { connect } from 'react-redux'

import { loginActions } from '../../action/admin/login.action'
import Form from './Form'

class Login extends React.Component {

  render() {
    const { loginRequest } = this.props
    return (
      <div className="container">
        <div className="row" id="pwd-container">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Form loginRequest={loginRequest} />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginRequest: (data) => dispatch(loginActions.loginRequest(data)),
  }
}

export default connect(null,mapDispatchToProps)(Login)
