import { Route, Routes } from "react-router-dom";

import Home from './pages/Home/Home';
import Maps from './pages/Maps/Maps';
import Alert from './pages/Alert/Alert'; 
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { AuthProvider } from "./context/AuthContext";

function AppRoutes() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/maps" element={<Maps />} />
                <Route path="/alert" element={<Alert />} /> 
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </AuthProvider>
    );
}

export default AppRoutes;
