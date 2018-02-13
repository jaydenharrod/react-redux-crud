const INITIAL_STATE = {
  showAddPost: false
};

const appReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_ADD_POST":
      return {
        ...currentState,
        showAddPost: !currentState.showAddPost
      };
    default:
      return currentState;
  }
};

export default appReducer;
