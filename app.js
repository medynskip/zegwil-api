// require("dotenv").config();

const express = require("express");
const app = express();
const port = 5001;
const mongoose = require("mongoose");
var cors = require("cors");
// var path = require("path");

//routes import
const profilesRouter = require("./routers/profiles");
const configsRouter = require("./routers/configs");

app.use(express.json());

app.use(cors());

//routes assign
app.use("/profiles", profilesRouter);
app.use("/configs", configsRouter);

//connect to db
mongoose.connect(
  "mongodb://localhost:27017/zegwil",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("connected to ZEGWIL_db");
  }
);

app.listen(port, () => console.log(`ZEGWIL_DB server started on port ${port}`));
