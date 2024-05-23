import React from 'react'

function UpdateUser() {
  return (
   
<div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h2 class="text-center mb-4">Update_User</h2>
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Enter name"/>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Enter email"/>
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input type="number" class="form-control" id="age" placeholder="Enter age"/>
        </div>
        <button type="submit" class="btn btn-success btn-block">update</button>
      </form>
    </div>
  </div>
</div>

  )
}

export default UpdateUser
