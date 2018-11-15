import React from 'react';
import { connect } from 'react-redux';
import { exampleActions } from '../../action/admin/example.action';

class Login extends React.Component {
  componentDidMount() {
    this.props.fetchDataExample();
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>Login Component</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errMessagge: state.ExampleReducer.errMessagge,
    isRequest: state.ExampleReducer.isRequest,
    data: state.ExampleReducer.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataExample: () => dispatch(exampleActions.fetchDataExample())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
