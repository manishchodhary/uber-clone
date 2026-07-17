import {Routes,Route} from "react-router-dom"
import Start from "./pages/Start.jsx"
import UserLogin from "./pages/UserLogin"
import UserSignup from "./pages/UserSignup"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainSignUp from "./pages/CaptainSignUp"
import { UserContext } from "./context/UserContext.jsx"


function App() {
  return (
    <div>
      <UserContext>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/signup" element={<UserSignup/>}/>
        <Route path="/captain-login" element={<CaptainLogin/>}/>
        <Route path="/captain-Signup" element={<CaptainSignUp/>}/>
        <Route path="*" element={<Start/>}/>
    
      </Routes></UserContext>
    </div>
  )
}

export default App
