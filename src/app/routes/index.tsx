import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { Home, Login} from "../pages";
export const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />  
                <Route path="*" element={<Navigate to="/"/>} />           
            </Routes>
        </BrowserRouter>
    );
}
