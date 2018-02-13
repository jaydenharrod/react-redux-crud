import React, { Component } from "react";
import { Link } from "react-router";
import NewPostForm from "./NewPostForm";

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
      <div>
        <div className="customNav">
          <div>
            <div>
              <a href="/">Posts</a>
            </div>
          </div>
          <div>
            <div>
              <Link
                to={{ pathname: "/", query: {} }}
                onClick={this.toggleAddPost}
              >
                <div>
                  <button eventkey={1}>Create Post</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          {appState.showAddPost && <NewPostForm addPost={this.addPost} />}
          {this.props.children}
        </div>
      </div>
    );
  }
}
