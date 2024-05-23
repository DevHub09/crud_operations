import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/getUser/${id}`)
        .then(result => {
          console.log(result);
          setName(result.data.name);
          setEmail(result.data.email);
          setAge(result.data.age);
        })
        .catch(err => {
          console.error('Error fetching user:', err);
          alert('Error fetching user data. Please try again later.');
        });
    } else {
      console.error('User ID is undefined');
    }
  }, [id]);

  const update = (e) => {
    e.preventDefault();
    if (id) {
      axios.post(`http://localhost:3001/updateUser/${id}`, { name, email, age })
        .then(result => {
          console.log(result);
          navigate('/');
        })
        .catch(err => {
          console.error('Error updating user:', err);
          alert('Error updating user data. Please try again later.');
        });
    } else {
      console.error('User ID is undefined');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Update User</h2>
          <form onSubmit={update}>
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
            <button type="submit" className="btn btn-success btn-block">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;

// import React from 'react'
// import { useParams,useNavigate } from 'react-router-dom'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import axios from 'axios'
// function UpdateUser() {
//   const {id}=useParams()
//   const[ name ,setName] = useState()
//   const[ email ,setEmail] = useState()
//   const[ age ,setAge] = useState()
//   const navigate = useNavigate()

//   useEffect(()=>{
//     axios.get('http://localhost:3001/getUser/'+id)
//     .then(result=> {console.log(result) 
//       setName(result.data.name)
//       setEmail(result.data.email)
//       setAge(result.data.age)


//     })
//     .catch(err => console.log(err))
//   },[])

// const Update = (e) =>{
//   e.preventDefault()
//   axios.post("http://localhost:3001/updateUser/"+id,{name,email,age})
//   .then(result =>{ console.log(result),
//       navigate('/')
//   })
//   .catch(err => console.log(err))
// }

//     return (
   
// <div class="container mt-5">
//   <div class="row justify-content-center">
//     <div class="col-md-6">
//       <h2 class="text-center mb-4">Update_User</h2>
//       <form onSubmit={Update}>
//         <div class="form-group">
//           <label for="name">Name</label>
//           <input type="text" class="form-control" id="name" placeholder="Enter name"
//           value={name} onChange={(e) => setName(e.target.value)}/>
//         </div>
//         <div class="form-group">
//           <label for="email">Email</label>
//           <input type="email" class="form-control" id="email" placeholder="Enter email"
//           value={email} onChange={(e) => setEmail(e.target.value)}/>
//         </div>
//         <div class="form-group">
//           <label for="age">Age</label>
//           <input type="number" class="form-control" id="age" placeholder="Enter age" value={age} onChange={(e) => setAge(e.target.value)}/>
//         </div>
//         <button type="submit" class="btn btn-success btn-block">update</button>
//       </form>
//     </div>
//   </div>
// </div>

//   )
// }

// export default UpdateUser
