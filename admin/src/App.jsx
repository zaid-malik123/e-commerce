import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Add from "./pages/Add"
import Orders from "./pages/Orders"
import Lists from "./pages/Lists"
import Login from "./pages/Login"
const App = () => {
  return (
    <div>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/add" element={<Add/>}></Route>
         <Route path="/orders" element={<Orders/>}></Route>
         <Route path="/list" element={<Lists/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  )
}

export default App
