import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Project from "./pages/Project";
import Guestbook from "./pages/Guestbook";
import Info from "./pages/Info";

function App() {
    return (
        <div className="App">
            <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/project" element={<Project />}/>
                    <Route path="/guest" element={<Guestbook />}/>
                    <Route path="/info" element={<Info />}/>
                </Routes>
            </BrowserRouter>
            <About />
        </div>
    );
}

export default App;
