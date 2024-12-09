import { Route, Routes } from "react-router-dom";
import App from "./pages/App/App";
import Login from "./pages/Login/Login";
import Register  from "./pages/Register/Register"
import { AuthProvider } from "./context/AuthContext";

function AppRoutes() {
    return (

        <AuthProvider>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/Login" element={<Login />}/>
                <Route path="/Register" element={<Register/>}/>
            </Routes>
        </AuthProvider>
    )
}
export default AppRoutes