import React from "react";
import { Alert, Glyphicon, Button, Modal } from "react-bootstrap";
import PostEditForm from "./PostEditForm";

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.hideEditModal = this.hideEditModal.bind(this);
    this.submitEditPost = this.submitEditPost.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
    this.confirmDeletePost = this.confirmDeletePost.bind(this);
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  showEditModal(postToEdit) {
    this.props.mappedshowEditModal(postToEdit);
  }

  hideEditModal() {
    this.props.mappedhideEditModal();
  }

  submitEditPost(e) {
    e.preventDefault();
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

  hideDeleteModal() {
    this.props.mappedhideDeleteModal();
  }

  showDeleteModal(postToDelete) {
    this.props.mappedshowDeleteModal(postToDelete);
  }

  confirmDeletePost() {
    this.props.mappedDeletePost(this.props.mappedPostState.postToDelete);
  }

  render() {
    const postState = this.props.mappedPostState;
    const posts = postState.posts;
    const data = this.props.mappedPostState.posts;
    const editPost = postState.postToEdit;
    return (
      <div className="col-md-12">
        <h3 className="centerAlign">Posts</h3>
        {!posts && postState.isFetching && <p>Loading posts....</p>}
        {posts &&
          posts.length > 0 &&
          !postState.isFetching && (
            <table className="table booksTable">
              <tbody>
                {data.map((data, i) => (
                  <tr key={i}>
                    <td>{data.postTitle}</td>
                    <td className="textCenter">
                      <Button
                        onClick={() => this.showEditModal(data)}
                        bsStyle="info"
                        bsSize="xsmall"
                      >
                        <Glyphicon glyph="pencil" />
                      </Button>
                    </td>
                    <td className="textCenter">
                      <Button
                        onClick={() => this.showDeleteModal(data)}
                        bsStyle="danger"
                        bsSize="xsmall"
                      >
                        <Glyphicon glyph="trash" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        <Modal
          show={postState.showEditModal}
          onHide={this.hideEditModal}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Edit Your Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="col-md-12">
              {editPost && (
                <PostEditForm
                  postData={editPost}
                  editPost={this.submitEditPost}
                />
              )}
              {editPost &&
                postState.isFetching && (
                  <Alert bsStyle="info">
                    <strong>Updating...... </strong>
                  </Alert>
                )}
              {editPost &&
                !postState.isFetching &&
                postState.error && (
                  <Alert bsStyle="danger">
                    <strong>Failed. {postState.error} </strong>
                  </Alert>
                )}
              {editPost &&
                !postState.isFetching &&
                postState.successMsg && (
                  <Alert bsStyle="success">
                    Book <strong> {editPost.postText} </strong>
                    {postState.successMsg}
                  </Alert>
                )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideEditModal}>Close</Button>
          </Modal.Footer>
        </Modal>
        {/* Modal for deleting post */}
        <Modal
          show={postState.showDeleteModal}
          onHide={this.hideDeleteModal}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Delete Your Book
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {postState.postToDelete &&
              !postState.error &&
              !postState.isFetching && (
                <Alert bsStyle="warning">
                  Are you sure you want to delete this post{" "}
                  <strong>{postState.postToDelete.postText} </strong> ?
                </Alert>
              )}
            {postState.postToDelete &&
              postState.error && (
                <Alert bsStyle="warning">
                  Failed. <strong>{postState.error} </strong>
                </Alert>
              )}
            {postState.postToDelete &&
              !postState.error &&
              postState.isFetching && (
                <Alert bsStyle="success">
                  <strong>Deleting.... </strong>
                </Alert>
              )}
            {!postState.postToDelete &&
              !postState.error &&
              !postState.isFetching && (
                <Alert bsStyle="success">
                  post <strong>{postState.successMsg} </strong>
                </Alert>
              )}
          </Modal.Body>
          <Modal.Footer>
            {!postState.successMsg &&
              !postState.isFetching && (
                <div>
                  <Button onClick={this.confirmDeletePost}>Yes</Button>
                  <Button onClick={this.hideDeleteModal}>No</Button>
                </div>
              )}
            {postState.successMsg &&
              !postState.isFetching && (
                <Button onClick={this.hideDeleteModal}>Close</Button>
              )}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
