const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

const app = express();

//connect to Mongo
mongoose
  .connect("mongodb://localhost/user")
  .then(() => console.log("mongodb connected..."))
  .catch((err) => console.log(err));

//EJS THE VIEW ENGINE
app.use(expressLayouts);
app.set("view engine", "ejs");

//Bodyparser
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
