import { connect } from "react-redux";
import * as postActions from "../contexts/actions/postActions";
import CreatePost from "../components/CreatePost";

const mapStateToProps = state => {
  return {
    mappedAppState: state.appState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    mappedAddPost: post => dispatch(postActions.addNewPost(post))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
