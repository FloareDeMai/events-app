import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import {Container} from "@mui/material";

function App() {
    return (
        <Container maxWidth="lg">
           <Navbar/>
            <Home/>
        </Container>
    );
}

export default App;
