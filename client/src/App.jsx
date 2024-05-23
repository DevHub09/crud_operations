import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './assets/Users.jsx'
// import User from './assets/User.jsx'
import CreateUser from './assets/CreateUser'
import UpdateUser from './assets/UpdateUser'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
<BrowserRouter>
<Routes>
  {/* <Route path='/' element={<User/>}/> */}
  <Route path='/' element={<Users/>}/>
  <Route path='/create' element={<CreateUser/>}/>
  <Route path='/update' element={<UpdateUser/>}/>
</Routes>
</BrowserRouter>

    </div>
  )
}

export default App
