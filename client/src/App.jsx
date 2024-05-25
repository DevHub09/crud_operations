import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./assets/Users.jsx";
// import User from './assets/User.jsx'
import CreateUser from "./assets/CreateUser";
import UpdateUser from "./assets/UpdateUser";
import homePage from "./assets/homePage.js";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Users />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/update/:id" element={<UpdateUser />} /> */}
          <Route path="/" element={<homePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
