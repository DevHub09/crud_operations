import express from "express";
import {
  allUsers,
  singleUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
} from "../controllers/crudController.js";

const router = express.Router(); //router object
//routing
//get all users
router.get("/get-users", allUsers);
//get single user
router.get("/getUser/:id", singleUser);
//create user
router.post("/createUser", CreateUser);
//update user
router.put("/updateUser/:id", UpdateUser);
// delete
router.delete("/deleteUser/:id", DeleteUser);

export default router;
