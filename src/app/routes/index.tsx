import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { Home, Login, SignUp} from "../pages";
export const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />  
                <Route path="/sign-up" element={<SignUp/>} />  
                <Route path="*" element={<Navigate to="/"/>} />                           
            </Routes>
        </BrowserRouter>
    );
}
