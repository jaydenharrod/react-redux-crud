import express from "express";
import path from "path";
import bodyParser from "body-parser";
import logger from "morgan";
import mongoose from "mongoose";
import SourceMapSupport from "source-map-support";
import bb from "express-busboy";

import postRoutes from "./api/routes/post.server.route";

const app = express();
const port = process.env.PORT || 3001;

bb.extend(app);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

SourceMapSupport.install();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/react-crud-app", {
  useMongoClient: true
});

app.use("/api", postRoutes);

app.get("/", (req, res) => {
  return res.end("API is working...");
});

// catch 404
app.use((req, res, next) => {
  res.status(404).send("<h2 align=center>Page Not Found!</h2>");
});

// start the server
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
