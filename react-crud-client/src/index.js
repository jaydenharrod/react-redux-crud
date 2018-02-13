import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { Router, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import configureStore from "./contexts/store/configureStore";
import routes from "./routes";

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router history={history} routes={routes} />
        </div>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object,
  history: PropTypes.object
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
