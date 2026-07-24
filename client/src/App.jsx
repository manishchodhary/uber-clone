import {Routes,Route} from "react-router-dom"
import Start from "./pages/Start.jsx"
import UserLogin from "./pages/UserLogin"
import UserSignup from "./pages/UserSignup"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainSignUp from "./pages/CaptainSignUp"
import { UserContext } from "./context/UserContext.jsx"
import UserProtectWrapper from "./pages/UserProtectWrapper.jsx"
import Home from "./pages/Home.jsx"
import Vehicle from "./pages/Vehicle.jsx"


function App() {
  return (
    <div>
      <UserContext>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/signup" element={<UserSignup/>}/>
        <Route path="/captain-login" element={<CaptainLogin/>}/>
        <Route path="/captain-signup" element={<CaptainSignUp/>}/>
        <Route path="*" element={<Start/>}/>
        {/* <Route path="/home" element={<UserProtectWrapper><Home/></UserProtectWrapper>}/> */}
        <Route path="/home" element={<Home/>}/>
        <Route path="/v" element={<Vehicle/>}/>
    
      </Routes></UserContext>
    </div>
  )
}

export default App
