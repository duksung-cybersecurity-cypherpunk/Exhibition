import React, {useEffect, useState} from "react";
import "../../styles/MobileMenuBar.css"
import {Link} from "react-router-dom";

const MobileMenuBar = ({isVisible, headerHandler}) => {
    const [visibility, setVisibility] = useState('hide');

    useEffect(() => {
        setVisibility(isVisible ? 'show' : 'hide');
    }, [isVisible]);

    const selectPageHandler = () => {
        setVisibility('hide')
        headerHandler(false)
    }

    return (
        <div className={`MobileMenuBarContainer ${visibility}`}>
            <div className="SideBar">
                <div onClick={() => headerHandler(false)} className="mobileHeaderOffBtn">
                    <img src={require("../../assets/images/Icon/HeaderMenuOut.png")} alt="사이드바 닫기"/>
                </div>
                <div className="menuContainer">
                    <Link to="/Exhibition/" className="mobileHeaderMenu" onClick={selectPageHandler}> Main </Link>
                    <Link to="/Exhibition/about" className="mobileHeaderMenu" onClick={selectPageHandler}> About </Link>
                    <Link to="/Exhibition/projects" className="mobileHeaderMenu" onClick={selectPageHandler}> Projects </Link>
                    <Link to="/Exhibition/guest" className="mobileHeaderMenu" onClick={selectPageHandler}> GuestBook </Link>
                    <Link to="/Exhibition/info" className="mobileHeaderMenu" onClick={selectPageHandler}> Information </Link>
                </div>
            </div>
        </div>
    )
}

export default MobileMenuBar