import React from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

const NewPostForm = props => {
  return (
    <form
      className="form form-horizontal"
      id="addPostForm"
      onSubmit={props.addPost}
    >
      <div className="row">
        <h3 className="centerAlign">Create Your Post</h3>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Title: </ControlLabel>
            <FormControl type="text" placeholder="Enter a title" name="postTitle" />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Body: </ControlLabel>
            <FormControl
              componentClass="textarea"
              placeholder="Enter your body text"
              name="postBody"
            />
          </FormGroup>
        </div>
      </div>
      <FormGroup>
        <Button type="submit" bsStyle="success" bsSize="large" block>
          Submit
        </Button>
      </FormGroup>
    </form>
  );
};

export default NewPostForm;
