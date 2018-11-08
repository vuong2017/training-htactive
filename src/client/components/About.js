import React from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

const Test = () => <h1>test</h1>;

const Test1 = () => <h1>user</h1>;


const NotFound = () => <h1>not found</h1>;

class About extends React.Component {
  render() {
    return (
      <div>
        <Link to="/about">admin</Link>
        <Link to="/about/dfgdfg">not</Link>
        <Switch>
          <Route exact path="/about" component={Test} />
          <Route path="/about/user" component={Test1} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default About;
