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


app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on 5***");
});
