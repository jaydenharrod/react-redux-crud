import { connect } from "react-redux";
import * as postActions from "../contexts/actions/postActions";
import Posts from "../components/Posts";

const mapStateToProps = (state, ownProps) => {
  return {
    mappedPostState: state.postState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(postActions.fetchPosts()),
    mappedEditPost: postToEdit => dispatch(postActions.editPost(postToEdit)),
    mappedshowEditModal: postToEdit =>
      dispatch(postActions.showEditModal(postToEdit)),
    mappedhideEditModal: () => dispatch(postActions.hideEditModal()),
    mappedDeletePost: postToDelete =>
      dispatch(postActions.deletePost(postToDelete)),
    mappedshowDeleteModal: postToDelete =>
      dispatch(postActions.showDeleteModal(postToDelete)),
    mappedhideDeleteModal: () => dispatch(postActions.hideDeleteModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
