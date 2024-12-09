import { Route, Routes } from "react-router-dom";
import App from "./pages/App/App";
import Home from './pages/Home/Home';
import Maps from './pages/Maps/Maps';
import Report from './pages/Report/Report';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { AuthProvider } from "./context/AuthContext";

function AppRoutes() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<Home />} />
                <Route path="/maps" element={<Maps />} />
                <Route path="/report" element={<Report />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </AuthProvider>
    );
}

export default AppRoutes;
