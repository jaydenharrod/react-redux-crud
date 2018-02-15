const INITIAL_STATE = {
  posts: [],
  post: null,
  isFetching: false,
  error: null,
  successMsg: null,
  postToDelete: null,
  postToEdit: null,
  newPost: null
};

export const postReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      return {
        ...currentState,
        posts: [],
        post: null,
        isFetching: true,
        error: null,
        successMsg: null,
        postToDelete: null,
        postToEdit: null
      };

    case "FETCH_POSTS_SUCCESS":
      return {
        ...currentState,
        posts: action.posts,
        post: null,
        isFetching: false,
        error: null,
        successMsg: action.message,
        postToDelete: null,
        postToEdit: null
      };

    case "FETCH_POSTS_FAILED":
      return {
        ...currentState,
        posts: [],
        post: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        postToDelete: null,
        postToEdit: null
      };

    case "FETCH_POST_REQUEST":
      return {
        ...currentState,
        posts: currentState.posts,
        post: null,
        isFetching: true,
        error: null,
        successMsg: null,
        postToDelete: null,
        postToEdit: null
      };

    case "FETCH_POST_SUCCESS":
      return {
        ...currentState,
        posts: currentState.posts,
        post: action.post,
        isFetching: false,
        error: null,
        successMsg: action.message,
        postToDelete: null,
        postToEdit: null
      };

    case "FETCH_POST_FAILED":
      return {
        ...currentState,
        posts: [],
        post: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        postToDelete: null,
        postToEdit: null
      };

    case "ADD_NEW_POST_REQUEST":
      return {
        ...currentState,
        posts: currentState.posts,
        post: null,
        isFetching: true,
        error: null,
        successMsg: null,
        postToDelete: null,
        postToEdit: null,
        newPost: action.post
      };

    case "ADD_NEW_POST_REQUEST_FAILED":
      return {
        ...currentState,
        posts: currentState.posts,
        post: null,
        isFetching: true,
        error: action.error,
        successMsg: null,
        postToDelete: null,
        postToEdit: null,
        newPost: null
      };

    case "ADD_NEW_POST_REQUEST_SUCCESS":
      const nextState = {
        ...currentState,
        posts: [...currentState.posts, action.post],
        post: null,
        isFetching: false,
        error: null,
        successMsg: action.message,
        postToDelete: null,
        postToEdit: null,
        newPost: action.post
      };
      return nextState;

    case "SHOW_EDIT_MODAL":
      return {
        ...currentState,
        posts: currentState.posts,
        post: null,
        isFetching: false,
        error: null,
        successMsg: null,
        postToDelete: null,
        postToEdit: action.post,
        newPost: null
      };

    case "HIDE_EDIT_MODAL":
      return {
        ...currentState,
        posts: currentState.posts,
        post: null,
        isFetching: false,
        error: null,
        successMsg: null,
        postToDelete: null,
        postToEdit: null,
        newPost: null
      };

    case "EDIT_POST_REQUEST":
      return {
        ...currentState,
        posts: currentState.posts,
        post: null,
        isFetching: true,
        error: null,
        successMsg: null,
        postToDelete: null,
        postToEdit: action.post,
        newPost: null
      };

    case "EDIT_POST_SUCCESS":
      const updatedPosts = currentState.posts.map(post => {
        if (post._id !== action.post._id) {
          return post;
        }
        return { ...post, ...action.post };
      });
      return {
        ...currentState,
        posts: updatedPosts,
        post: null,
        isFetching: false,
        error: null,
        successMsg: action.message,
        postToDelete: null,
        postToEdit: action.post,
        newPost: null
      };

    case "EDIT_POST_FAILED":
      return {
        ...currentState,
        posts: currentState.posts,
        post: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        postToDelete: null,
        postToEdit: currentState.postToEdit,
        newPost: null
      };

    case "DELETE_POST_REQUEST":
      return {
        ...currentState,
        posts: currentState.posts,
        post: null,
        isFetching: true,
        error: null,
        successMsg: null,
        postToDelete: action.post,
        postToEdit: null,
        newPost: null
      };

    case "DELETE_POST_SUCCESS":
      const filteredPosts = currentState.posts.filter(
        post => post._id !== currentState.postToDelete._id
      );
      return {
        ...currentState,
        posts: filteredPosts,
        post: null,
        isFetching: false,
        error: null,
        successMsg: action.message,
        postToDelete: null,
        postToEdit: null,
        newPost: null
      };

    case "DELETE_POST_FAILED":
      return {
        ...currentState,
        posts: currentState.posts,
        post: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        postToDelete: null,
        postToEdit: null,
        newPost: null
      };

    case "SHOW_DELETE_MODAL":
      return {
        ...currentState,
        posts: currentState.posts,
        post: null,
        isFetching: false,
        error: null,
        successMsg: null,
        postToDelete: action.post,
        postToEdit: null,
        newPost: null
      };

    case "HIDE_DELETE_MODAL":
      return {
        ...currentState,
        posts: currentState.posts,
        post: null,
        isFetching: false,
        error: null,
        successMsg: null,
        postToDelete: null,
        postToEdit: null,
        newPost: null
      };

    default:
      return currentState;
  }
};

export default postReducer;
