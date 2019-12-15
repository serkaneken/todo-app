const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("./models/Todo");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

require("./routes")(app);

const port = 5000;
app.listen(port, () => {
  console.log("Server is running on " + port);
});
