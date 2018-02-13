import mongoose from "mongoose";

var Schema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  postTitle: String,
  postBody: String
});

export default mongoose.model("Post", Schema);
