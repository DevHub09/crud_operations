const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/users");

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(
  "mongodb+srv://elsa:03017158007@cluster0.y2evc02.mongodb.net/crud"
);

app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log(".....server is running.......");
});
