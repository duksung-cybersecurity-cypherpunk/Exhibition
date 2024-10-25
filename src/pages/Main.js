import React, {useState} from "react";
import "../styles/Main.css"
import ImageInfinitySlider from "../assets/elements/ImageInfinitySlider";
import Devider from "../assets/elements/Devider";
import GradientText from "../assets/elements/GradientText";
import {NavLink} from "react-router-dom";
import {BrowserView, isMobile, MobileView} from "react-device-detect";

const Main = () => {
    const [text, setText] = useState("메인입니다. Main")
    const mainImgList = ['Main']
    const deviderOptions = {
        margin: {
            top: 66,
            right: 2,
            left: 2,
            bottom: 0
        },
        border: {
            height: 0.5,
            color: "#FEE1E8"
        }
    }

    const dividerMobileOptions = {
        margin: {
            top: 0,
            right: 2,
            left: 2,
            bottom: 0
        },
        border: {
            height: 0.5,
            color: "#FEE1E8"
        }
    }

    return (
        <>
            {/*<Header />*/}
            <ImageInfinitySlider view={isMobile} imageList={mainImgList}/>
            <div className="mainContainer">
                <Devider option={isMobile ? dividerMobileOptions : deviderOptions} />
                <div className={isMobile ? "mainMobilePhrase1" : "mainPhrase1"}>
                    <div>Embrace the</div>
                    &nbsp;
                    <GradientText text={"Cypherpunk"} />
                    &nbsp;
                    <div>Revolution</div>
                </div>
                <BrowserView>
                    <div className="mainPhrase2">
                        <div>Look Forward to the</div>
                        &nbsp;
                        <GradientText text={"Secure World"} />
                        &nbsp;
                        <div>we will build!</div>
                    </div>
                </BrowserView>
                <MobileView>
                    <div className="mainMobilePhrase2">Look Forward to the</div>
                    <div className="mainMobilePhrase2">
                        <GradientText text={"Secure World"} />
                        &nbsp;
                        <div>we will build!</div>
                    </div>
                </MobileView>
                <div className="ticketContainer">
                    <img src={require("../assets/images/Ticket.png")} className={isMobile ? "ticketMobileImg" : "ticketImg"} />
                </div>
                <NavLink to="/Info" className="findBtnLink">
                    <img src={require("../assets/images/FindButton.png")} className={isMobile ? "findBoothMBtn" : "findBoothBtn"} />
                </NavLink>
            </div>
            {/*<Footer />*/}
        </>
    )
}

export default Main