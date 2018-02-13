import mongoose from "mongoose";
import Post from "../models/post.server.model";

export const getPosts = (req, res) => {
  Post.find().exec((err, posts) => {
    if (err) {
      return res.json({ success: false, message: "An Error Occured" });
    }

    return res.json({
      success: true,
      message: "Data fetched successfully",
      posts
    });
  });
};

export const addPost = (req, res) => {
  console.log(req.body);
  const newPost = new Post(req.body);
  newPost.save((err, post) => {
    if (err) {
      return res.json({ success: false, message: "An Error Occured" });
    }

    return res.json({
      success: true,
      message: "Post added successfully",
      post
    });
  });
};

export const updatePost = (req, res) => {
  Post.findOneAndUpdate(
    { _id: req.body.id },
    req.body,
    { new: true },
    (err, post) => {
      if (err) {
        return res.json({ success: false, message: "An Error Occured", error: err });
      }
      console.log(post);
      return res.json({ success: true, message: "Data updated successfully", post });
    }
  );
};

export const getPost = (req, res) => {
  Post.find({ _id: req.params.id }).exec((err, post) => {
    if (err) {
      return res.json({ success: false, message: "An Error Occured" });
    }
    if (post.length) {
      return res.json({
        success: true,
        message: "Data fetched by id successfully",
        post
      });
    } else {
      return res.json({
        success: false,
        message: "Data with the given id not found"
      });
    }
  });
};

export const deletePost = (req, res) => {
  Post.findByIdAndRemove(req.params.id, (err, post) => {
    if (err) {
      return res.json({ success: false, message: "An Error Occured" });
    }

    return res.json({
      success: true,
      message: post.postTitle + " deleted successfully"
    });
  });
};
