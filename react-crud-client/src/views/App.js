import { connect } from "react-redux";
import * as appActions from "../contexts/actions/appActions";
import * as postActions from "../contexts/actions/postActions";
import App from "../components/App";

const mapStateToProps = state => {
  return {
    mappedAppState: state.appState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    mappedToggleAddPost: () => dispatch(appActions.toggleAddPost()),
    mappedAddPost: post => dispatch(postActions.addNewPost(post))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
