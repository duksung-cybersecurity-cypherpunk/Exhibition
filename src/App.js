import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Guestbook from "./pages/Guestbook";
import Info from "./pages/Info";
import {isMobile} from "react-device-detect";
import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileMenuBar from "./components/MobileMenuBar";

function App() {
    const [isMobileMenuOn, setIsMobileMenuOn] = useState(false)
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    useEffect(() => {
        setScreenSize();
    }, []);

    useEffect(() => {
        if (isMobileMenuOn) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = '';
        }

        return () => {
            document.documentElement.style.overflow = '';
        };
    }, [isMobileMenuOn]);

    const handleMobileMenu = (value) => {
        setIsMobileMenuOn(value)
    }

    return (
        <div className={isMobile? "MobileApp" : "App"}>
            <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
                { isMobile ? <MobileMenuBar isVisible={isMobileMenuOn} headerHandler={handleMobileMenu} /> : <></> }
                <Header headerHandler={handleMobileMenu} />
                <div className={isMobile? "MobileAppBody" : "AppBody"}>
                    <Routes>
                        <Route path="/" element={<Main />}/>
                        <Route path="/about" element={<About />}/>
                        <Route path="/projects" element={<Projects />}/>
                        <Route path="/guest" element={<Guestbook />}/>
                        <Route path="/info" element={<Info />}/>
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
