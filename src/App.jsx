import { BrowserRouter,Route,Routes} from "react-router-dom"
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import ForgetPassword from "./Components/ForgetPassword"
import ResetPassword from "./Components/ResetPassword"
import Dashboard from "./Components/Dashboard"
function App() {
  return <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>} ></Route>
        <Route path="/signup" element={<Signup/>} ></Route>
        <Route path="/forgotpassword" element={<ForgetPassword/>} ></Route>
        <Route path="/resetpassword" element={<ResetPassword/>} ></Route>
        <Route path="/dashboard" element={<Dashboard/>} ></Route>

        
      </Routes>
      </BrowserRouter>
    </>
  
}

export default App