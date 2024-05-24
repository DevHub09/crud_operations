import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  
    
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3001/api/v1/user/createUser", { name, email, age });
      console.log(result);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h2 class="text-center mb-4">Add User</h2>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="age">Age</label>
              <input
                type="number"
                class="form-control"
                id="age"
                placeholder="Enter age"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <button type="submit" class="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
