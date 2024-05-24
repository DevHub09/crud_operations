import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const fetchUser = async () => {
      if (id) {
        try {
          const result = await axios.get(`http://localhost:3001/api/v1/user/getUser/${id}`);
          setName(result.data.name);
          setEmail(result.data.email);
          setAge(result.data.age);
        } catch (err) {
          console.error("Error fetching user:", err);
          alert("Error fetching user data. Please try again later.");
        }
      } else {
        console.error("User ID is undefined");
      }
    };
  
    fetchUser();
  }, [id]);


  const handleUpdate = async (e) => {
    e.preventDefault();
    if (id) {
      try {
        const result = await axios.put(`http://localhost:3001/api/v1/user/updateUser/${id}`, { name, email, age });
        console.log(result)
        navigate("/");
      } catch (err) {
        console.error("Error updating user:", err);
        alert("Error updating user data. Please try again later.");
      }
    } else {
      console.error("User ID is undefined");
    }
  };
  

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Update User</h2>
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-success btn-block">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
