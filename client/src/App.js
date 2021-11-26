import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import {Container} from "@mui/material";
import { atom } from "jotai";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import FormEvent from "./components/ManageEvent/FormEvent";
import Login from "./components/Auth/Login";
import LocalStorageService from "./localStorage";
import RequireAuth from "./components/Auth/RequireAuth";


export const userAtom = atom(true);


function App() {

    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    return (
        <BrowserRouter>
        <Container maxWidth="lg">
           <Navbar/>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/login" exact element={<Login/>}/>
                <Route path="/manage-event" exact element={<RequireAuth><FormEvent/></RequireAuth>} />
            </Routes>
        </Container>
        </BrowserRouter>
    );
}

export default App;
