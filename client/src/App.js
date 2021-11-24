import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Container} from "@mui/material";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import FormEvent from "./components/ManageEvent/FormEvent";


function App() {
    return (
        <BrowserRouter>
        <Container maxWidth="lg">
           <Navbar/>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/manage-event" exact element={<FormEvent/>}/>
            </Routes>
        </Container>
        </BrowserRouter>
    );
}

export default App;
