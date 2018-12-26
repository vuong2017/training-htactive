import React from "react"
import { Switch, Route } from "react-router-dom"
import { connect } from "react-redux"

import { TrainingActions } from '../action/client/training.action'
import { Training, NotFound } from "../views"

import { Header, SideBar, Content, Footer } from "../components/Training"

export const routes = [
  {
    path: "/category/:idSubjects",
    component: Training,
    exact: true
  },
  {
    path: "/category/:idSubjects/:idPosts",
    component: Training,
    exact: true
  },
  {
    path: "",
    component: NotFound,
    exact: false
  }
]

class CategoryRoutes extends React.Component {

  componentDidMount() {
    this.props.fetchDataTN(this.props.match.params.idSubjects)
  }
  render() {
    const { isRequest, data, isLoading, status } = this.props
    if (isLoading || isRequest) {
      return <h1>dang fetch</h1>
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
    )
  }
}

const mapStateToProps = ({ TrainingReducer }) => {
  return {
    isLoading: TrainingReducer.isLoading,
    messages: TrainingReducer.messages,
    isRequest: TrainingReducer.isRequest,
    data: TrainingReducer.data,
    status: TrainingReducer.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataTN: (id) => dispatch(TrainingActions.fetchDataTN(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryRoutes)

