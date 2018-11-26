import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { configureStore } from "app/redux/store";
import { Route, Router, Switch } from "react-router";
import "./app/sass/style.scss";
import App from "app/components/App";

// prepare store
const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);