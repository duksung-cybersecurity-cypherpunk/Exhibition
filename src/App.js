import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Project from "./pages/Project";
import Guestbook from "./pages/Guestbook";
import Info from "./pages/Info";
import {isMobile} from "react-device-detect";
import {useEffect} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    useEffect(() => {
        setScreenSize();
    });

    return (
        <div className={isMobile? "MobileApp" : "App"}>
            <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/project" element={<Project />}/>
                    <Route path="/guest" element={<Guestbook />}/>
                    <Route path="/info" element={<Info />}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
