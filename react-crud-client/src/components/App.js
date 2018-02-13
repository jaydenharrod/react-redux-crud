import React, { Component, Fragment } from "react";
import { Link } from "react-router";
import NewPostForm from "./NewPostForm";
import "../styles/App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.toggleAddPost = this.toggleAddPost.bind(this);
    this.addPost = this.addPost.bind(this);
  }

  toggleAddPost(e) {
    e.preventDefault();
    this.props.mappedToggleAddPost();
  }

  addPost(e) {
    e.preventDefault();
    const form = document.getElementById("addPostForm");
    if (form.postTitle.value !== "" && form.postBody.value !== "") {
      const data = new FormData();
      data.append("postTitle", form.postTitle.value);
      data.append("postBody", form.postBody.value);
      this.props.mappedAddPost(data);
    } else {
      return;
    }
  }

  render() {
    const appState = this.props.mappedAppState;

    return (
      <Fragment>
        <div className="header">
          <a href="/">
            <h2>Posts</h2>
          </a>
          <Link to={{ pathname: "/", query: {} }} onClick={this.toggleAddPost}>
            <button eventkey={1}>Create Post</button>
          </Link>
        </div>
        <div className="app-container">
          {appState.showAddPost && <NewPostForm addPost={this.addPost} />}
        </div>
        <div className="app-container">{this.props.children}</div>
      </Fragment>
    );
  }
}
