import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Container} from "@mui/material";
import { atom } from "jotai";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import FormEvent from "./components/ManageEvent/FormEvent";
import Login from "./components/Auth/Login";
import RequireAuth from "./components/Auth/RequireAuth";
import LogOut from "./components/LogOut/LogOut";
import LocalStorageService from "./localStorage";
import Register from "./components/Auth/Register";
import NotFound from "./components/NotFound";

export const userAtom = atom(LocalStorageService.getCurrentUserFromLocalStorage());

function App() {
    return (
        <BrowserRouter>
        <Container maxWidth="lg">
           <Navbar/>
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path="/" exact element={<Home/>}/>
                <Route path="/register" exact element={<Register/>}/>
                <Route path="/login" exact element={<Login/>}/>
                <Route path="/logout" exact element={<RequireAuth><LogOut/></RequireAuth>}/>
                <Route path="/manage-event" exact element={<RequireAuth><FormEvent/></RequireAuth>} />
            </Routes>
        </Container>
        </BrowserRouter>
    );
}

export default App;
