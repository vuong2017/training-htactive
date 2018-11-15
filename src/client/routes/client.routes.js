import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { SubjectActions } from '../action/client/subjects.action';
import { Training, NotFound } from "../views";

import { Header, SideBar, Content, Footer } from "../components/Training";

export const routes = [
  {
    path: "/:client",
    component: Training,
    exact: true
  },
  {
    path: "/:client/:id",
    component: Training,
    exact: true
  },
  {
    path: "",
    component: NotFound,
    exact: false
  }
];

class ClientRoutes extends React.Component {

  componentDidMount() {
    this.props.fetchDataSubjects(this.props.match.params.client);
  }
  render() {
    const { isRequest, data, isLoading, status } = this.props;
    if (isLoading || isRequest) {
      return <h1>dang fetch</h1>;
    }
    if (!status && !isLoading) {
      return <NotFound />
    }
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <SideBar data={data} />
          <Content>
            <Switch>
              {routes.map(route => (
                <Route key={route.path} {...route} />
              ))}
            </Switch>
          </Content>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ SubjectsReducer }) => {
  return {
    isLoading: SubjectsReducer.isLoading,
    messages: SubjectsReducer.messages,
    isRequest: SubjectsReducer.isRequest,
    data: SubjectsReducer.data,
    status: SubjectsReducer.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataSubjects: (id) => dispatch(SubjectActions.fetchDataSubjects(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientRoutes);

