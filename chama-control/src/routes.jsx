import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/App/App";
import Login from "./pages/Login/Login";
import Register  from "./pages/Register/Register"

function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/Login" element={<Login />}/>
                <Route path="/Register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes