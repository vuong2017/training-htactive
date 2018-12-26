import React from 'react'

import Form from './Form'

class Login extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row" id="pwd-container">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Form />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    )
  }
}


export default Login
