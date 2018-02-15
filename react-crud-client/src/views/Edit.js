import { connect } from "react-redux";
import * as postActions from "../contexts/actions/postActions";
import EditPost from "../components/EditPost";

const mapStateToProps = (state, ownProps) => {
  return {
    mappedPostState: state.postState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(postActions.fetchPosts()),
    mappedEditPost: postToEdit => dispatch(postActions.editPost(postToEdit))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
