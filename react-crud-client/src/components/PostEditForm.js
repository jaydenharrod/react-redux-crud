import React from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";
import "../styles/PostEditForm.css";

const PostEditForm = props => {
  return (
    <form
      className="form form-horizontal"
      id="EditPostForm"
      onSubmit={props.editPost}
    >
      <div className="row">
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Title: </ControlLabel>
            <input type="hidden" value={props.postData._id} name="id" />
            <FormControl
              type="text"
              placeholder="Enter your post"
              name="postTitle"
              defaultValue={props.postData.postTitle}
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Body: </ControlLabel>
            <FormControl
              componentClass="textarea"
              placeholder="Enter your body text"
              name="postBody"
              defaultValue={props.postData.postBody}
            />
          </FormGroup>
        </div>
      </div>
      <FormGroup>
        <Button type="submit" className="submit-button">
          Submit
        </Button>
      </FormGroup>
    </form>
  );
};

export default PostEditForm;
