import React, { Component } from "react";
import { browserHistory } from "react-router";
import "../styles/Form.css";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.addPost = this.addPost.bind(this);
  }

  addPost(e) {
    e.preventDefault();
    browserHistory.push("/");
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
    return (
      <form className="form-container" id="addPostForm" onSubmit={this.addPost}>
        <h1>Create Post</h1>
        <div className="form-body">
          <h2>Title</h2>
          <input
            className="input-title"
            aria-label="Title input"
            type="text"
            placeholder="Enter title"
            name="postTitle"
            autofocus
          />
          <h2>Body</h2>
          <textarea
            className="textarea-body"
            aria-label="Body input"
            placeholder="Enter body text"
            name="postBody"
          />
        </div>
        <div className="form-footer">
          <button
            type="cancel"
            aria-label="Cancel form creation"
            className="cancel-button"
            onClick={() => browserHistory.push("/")}
          >
            Cancel
          </button>
          <button
            type="submit"
            aria-label="Submit form input"
            className="submit-button"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default CreatePost;
