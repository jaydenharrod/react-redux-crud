import React from "react";
import { browserHistory } from "react-router";
import "../styles/Posts.css";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.confirmDeletePost = this.confirmDeletePost.bind(this);
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  confirmDeletePost(postToDelete) {
    this.props.mappedDeletePost(postToDelete);
  }

  render() {
    const data = this.props.mappedPostState.posts;
    return (
      <div className="post-container">
        {data.map((data, i) => (
          <div key={i} className="posts">
            <h4>{data.postTitle}</h4>
            <div>
              <button
                className="button-edit"
                onClick={() => browserHistory.push("/edit-post")}
              >
                Edit
              </button>
              <button
                className="button-delete"
                onClick={() => this.confirmDeletePost(data)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
