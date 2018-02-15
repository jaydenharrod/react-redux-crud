import React, { Component } from "react";
import { browserHistory } from "react-router";
import "../styles/Form.css";

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.submitEditPost = this.submitEditPost.bind(this);
  }

  submitEditPost(e) {
    e.preventDefault();
    browserHistory.push("/");
    const editForm = document.getElementById("EditPostForm");
    if (editForm.postTitle.value !== "") {
      const data = new FormData();
      data.append("id", editForm.id.value);
      data.append("postTitle", editForm.postTitle.value);
      data.append("postBody", editForm.postBody.value);
      this.props.mappedEditPost(data);
    } else {
      return;
    }
  }

  render() {
    const data = this.props.data;
    return (
      <form
        className="form-container"
        id="EditPostForm"
        onSubmit={this.submitEditPost}
      >
        <h1>Edit Post {data.postData.postTitle}</h1>
        <div className="form-body">
          <h2>Title</h2>
          <input type="hidden" value={data.postData._id} name="id" />
          <input
            className="input-title"
            aria-label="Title input"
            type="text"
            placeholder="Enter title"
            name="postTitle"
            defaultValue={data.postData.postTitle}
            autofocus
          />
          <h2>Body</h2>
          <textarea
            className="textarea-body"
            aria-label="Body input"
            placeholder="Enter body text"
            name="postBody"
            defaultValue={data.postData.postBody}
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

export default EditPost;
