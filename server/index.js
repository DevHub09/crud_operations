import express from "express"
import mongoose  from "mongoose";
import cors from "cors"
import connectDB from "./config/db.js";
import dotenv from "dotenv"
import UserModel from "./models/users.js"
import crudRoutes from "./routes/crudRoutes.js"

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/user", crudRoutes);




app.listen(3001, () => {
  console.log(".....server is running.......");
});

