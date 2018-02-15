const apiUrl = "/api/";

export const toggleAddBook = () => {
  return {
    type: "TOGGLE_ADD_POST"
  };
};

export const addNewPost = post => {
  return dispatch => {
    dispatch(addNewPostRequest(post));
    return fetch(apiUrl, {
      method: "post",
      body: post
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(addNewPostRequestSuccess(data.post, data.message));
        });
      } else {
        response.json().then(error => {
          dispatch(addNewPostRequestFailed(error));
        });
      }
    });
  };
};

export const addNewPostRequest = post => {
  return {
    type: "ADD_NEW_POST_REQUEST",
    post
  };
};

export const addNewPostRequestSuccess = (post, message) => {
  return {
    type: "ADD_NEW_POST_REQUEST_SUCCESS",
    post: post,
    message: message
  };
};

export const addNewPostRequestFailed = error => {
  return {
    type: "ADD_NEW_POST_REQUEST_FAILED",
    error
  };
};

//Async action
export const fetchPosts = () => {
  return dispatch => {
    dispatch(fetchPostsRequest());
    return fetch(apiUrl).then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(fetchPostsSuccess(data.posts, data.message));
        });
      } else {
        response.json().then(error => {
          dispatch(fetchPostsFailed(error));
        });
      }
    });
  };
};

export const fetchPostsRequest = () => {
  return {
    type: "FETCH_POSTS_REQUEST"
  };
};

//Sync action
export const fetchPostsSuccess = (posts, message) => {
  return {
    type: "FETCH_POSTS_SUCCESS",
    posts: posts,
    message: message,
    receivedAt: Date.now
  };
};

export const fetchPostsFailed = error => {
  return {
    type: "FETCH_POSTS_FAILED",
    error
  };
};

export const fetchPostById = postId => {
  return dispatch => {
    dispatch(fetchPostRequest());
    return fetch(apiUrl + postId).then(response => {
      console.log(response);
      if (response.ok) {
        response.json().then(data => {
          dispatch(fetchPostSuccess(data.post[0], data.message));
        });
      } else {
        response.json().then(error => {
          dispatch(fetchPostFailed(error));
        });
      }
    });
  };
};

export const fetchPostRequest = () => {
  return {
    type: "FETCH_POST_REQUEST"
  };
};

export const fetchPostSuccess = (post, message) => {
  return {
    type: "FETCH_POST_SUCCESS",
    post: post,
    message: message,
    receivedAt: Date.now
  };
};

export const fetchPostFailed = error => {
  return {
    type: "FETCH_POST_FAILED",
    error
  };
};

export const editPost = post => {
  return dispatch => {
    dispatch(editPostRequest(post));
    return fetch(apiUrl, {
      method: "put",
      body: post
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(editPostSuccess(data.post, data.message));
        });
      } else {
        response.json().then(error => {
          dispatch(editPostFailed(error));
        });
      }
    });
  };
};

export const editPostRequest = post => {
  return {
    type: "EDIT_POST_REQUEST",
    post
  };
};

export const editPostSuccess = (post, message) => {
  return {
    type: "EDIT_POST_SUCCESS",
    post: post,
    message: message
  };
};

export const editPostFailed = error => {
  return {
    type: "EDIT_POST_FAILED",
    error
  };
};

export const deletePost = post => {
  return dispatch => {
    dispatch(deletePostRequest(post));
    return fetch(apiUrl + post._id, {
      method: "delete"
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(deletePostSuccess(data.message));
        });
      } else {
        response.json().then(error => {
          dispatch(deletePostFailed(error));
        });
      }
    });
  };
};

export const deletePostRequest = post => {
  return {
    type: "DELETE_POST_REQUEST",
    post
  };
};

export const deletePostSuccess = message => {
  return {
    type: "DELETE_POST_SUCCESS",
    message: message
  };
};

export const deletePostFailed = error => {
  return {
    type: "DELETE_POST_FAILED",
    error
  };
};