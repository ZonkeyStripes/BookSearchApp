const express = require("express");

const mongoose = require("mongoose");
const app = express();
const routes = require("./routes/");
const PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect('mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

app.listen(PORT, function() {
  console.log(`Api server running on: ${PORT}`)
});

