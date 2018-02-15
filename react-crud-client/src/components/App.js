import React, { Fragment } from "react";
import { browserHistory } from "react-router";
import "../styles/App.css";

const App = props => {
  return (
    <Fragment>
      <div className="header">
        <div className="header-container">
          <a href="/">
            <h1>React Posts</h1>
          </a>
          <button onClick={() => browserHistory.push("/create-post")}>
            Create Post
          </button>
        </div>
      </div>
      <div className="app-container">{props.children}</div>
    </Fragment>
  );
};

export default App;
