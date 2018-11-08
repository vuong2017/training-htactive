import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import createBrowserHistory from 'history/createBrowserHistory'

import Layout from "./components/Layout";
import createStore from "./store";

const store = createStore( window.REDUX_DATA );

const jsx = (
    <ReduxProvider store={ store }>
        <Router history={createBrowserHistory()}>
            <Layout />
        </Router>
    </ReduxProvider>
);

const a = () => {
    console.log("co vao");
}
a()

const app = document.getElementById( "app" );
ReactDOM.hydrate( jsx, app );
