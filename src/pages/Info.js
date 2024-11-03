import React, {useEffect, useState} from "react";
import "../styles/Info.css"
import {Container as MapDiv, NaverMap, Marker, useNavermaps} from 'react-naver-maps'
import Divider from "../components/Divider";
import keywordList from "../assets/data/search.json"
import {isMobile} from "react-device-detect"

const Info = () => {
    const [keywords, setKeywords] = useState([])
    const [searchKeyword, setSearchKeyword] = useState("")
    const [focusTeam, setFocusTeam] = useState(1)
    const [isAutoScrolling, setIsAutoScrolling] = useState(true)
    const navermaps = useNavermaps()
    const [isNavermapLoaded, setIsNavermapLoaded] = useState(false)

    useEffect(() => {
        setKeywords(keywordList.data)
    }, []);

    useEffect(() => {
        if (navermaps) {
            setIsNavermapLoaded(true)
        }
    }, [navermaps])

    useEffect(() => {
        // 1초마다 focusTeam을 증가시키는 타이머
        const interval = setInterval(() => {
            if (isAutoScrolling) {
                setFocusTeam((prevFocusTeam) => (prevFocusTeam % 12) + 1);
            }
        }, 1000);

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 타이머 정리
    }, [isAutoScrolling]);

    const dividerOption1 = {
        margin: {
            top: 50,
            right: 0,
            left: 0,
            bottom: 50
        },
        border: {
            height: 1,
            color: "#FEE1E8"
        }
    }
    const dividerOption2 = {
        margin: {
            top: 10,
            right: 0,
            left: 0,
            bottom: 10
        },
        border: {
            height: 1,
            color: "#FEE1E8"
        }
    }

    const submitHandler = (e) => {
        if (e.key === 'Enter') {
            const keyword = `_${searchKeyword.trim()}_`
            console.log(keyword)
            for (let i = 0; i < keywords.length; i++) {
                if (keywords[i].includes(keyword)) {
                    setFocusTeam(i + 1)
                    setSearchKeyword('')
                    setIsAutoScrolling(false)
                }
            }
        }
    }

    const submitClickHandler = () => {
        const keyword = `_${searchKeyword.trim()}_`
        console.log(keyword)
        for (let i = 0; i < keywords.length; i++) {
            if (keywords[i].includes(keyword)) {
                setFocusTeam(i + 1)
                setSearchKeyword('')
                setIsAutoScrolling(false)
            }
        }
    }

    const teamClickHandler = (teamNum) => {
        setFocusTeam(teamNum)
        setIsAutoScrolling(false)
    }

    return (
        <div className={isMobile ? "informationSectionMobile" : "informationSection"}>
            <div className="title">
                <div className="infoTitle">Exhibition Information</div>
            </div>
            <div className="topContainer">
                <div className="topWrapper">
                    {
                        isMobile
                            ? <>
                                <img src={require('../assets/images/InfoImage.png')} alt="info1" className="infoImage2"/>

                            </>
                            : <>
                                <div className="mapWrapper">
                                    <img src={require('../assets/images/MapContainer.png')} alt="info1"
                                         className="infoImage"/>
                                    <div className="mapContainer">
                                        {isNavermapLoaded
                                            ? <MapDiv style={{height: "100%", width: "100%"}}>
                                                <NaverMap
                                                    defaultCenter={new navermaps.LatLng(37.6521918, 127.0166020)}
                                                    zoom={15}
                                                >
                                                    <Marker defaultPosition={{lat: 37.6521918, lng: 127.0166020}}/>
                                                </NaverMap>
                                            </MapDiv>
                                            : <div>Loading map...</div>
                                        }
                                    </div>
                                </div>
                                <img src={require('../assets/images/InfoConnectLine.png')} alt="info1"
                                     className="connectLine"/>
                                <img src={require('../assets/images/InfoImage.png')} alt="info1" className="infoImage2"/>
                            </>
                    }
                </div>
            </div>
            <Divider option={dividerOption1}/>
            <div className="boothHeader">
                <span className="spacer"/>
                <div className="boothTitle">Booth Map</div>
                <div className="searchWrapper">
                    <img src={require("../assets/images/SearchContainer.png")} alt="search" className="searchImage"/>
                    <div className="inputContainer">
                        <input className="inputField"
                               value={searchKeyword}
                               onChange={(e) => setSearchKeyword(e.target.value)}
                               placeholder="김덕우, 덕우"
                               onKeyDown={(e) => submitHandler(e)}
                               onKeyPress={(e) => submitHandler(e)}
                        />
                        <img src={require("../assets/images/SearchBtn.png")} alt="searchButton" className="searchBtn"
                             onClick={submitClickHandler}
                        />
                    </div>
                </div>
            </div>
            <div className="teamContainer">
                <div className="boothPositionContainer">
                    <div className="infoBox">INFO</div>
                    <div className="boothWrapper">
                        <img src={require("../assets/images/WallLeft.png")} alt="leftWall" className="boothWallLeft"/>
                        <div className="leftTeamContainer">
                            <div className={focusTeam === 1 ? "team active" : "team"}> 1</div>
                            <div className={focusTeam === 2 ? "team active" : "team"}> 2</div>
                            <div className={focusTeam === 3 ? "team active" : "team"}> 3</div>
                            <div className={focusTeam === 4 ? "team center active" : "team center"}> 4</div>
                            <div className={focusTeam === 5 ? "team active" : "team"}> 5</div>
                            <div className={focusTeam === 6 ? "team active" : "team"}> 6</div>
                        </div>
                        <div className="rightTeamContainer">
                            <div className={focusTeam === 7 ? "team active" : "team"}> 7</div>
                            <div className={focusTeam === 8 ? "team active" : "team"}> 8</div>
                            <div className={focusTeam === 9 ? "team active" : "team"}> 9</div>
                            <div className={focusTeam === 10 ? "team center active" : "team center"}> 10</div>
                            <div className={focusTeam === 11 ? "team active" : "team"}> 11</div>
                            <div className={focusTeam === 12 ? "team active" : "team"}> 12</div>
                        </div>
                        <img src={require("../assets/images/WallRight.png")} alt="rightWall"
                             className="boothWallRight"/>
                    </div>
                </div>
                <div className="teamNameContainer">
                    {
                        isMobile
                            ? <></>
                            : <>
                                <div className="boothTeamTitle">Booth</div>
                                <Divider option={dividerOption2}/>
                            </>
                    }
                    <div className={focusTeam === 1 ? "boothTeamName active" : "boothTeamName"}
                         onClick={() => teamClickHandler(1)}
                    >
                        <div>01. 체셔</div>
                        <div className="teamDescription">혼합현실 RC카 게임</div>
                    </div>
                    <div className={focusTeam === 2 ? "boothTeamName active" : "boothTeamName"}
                         onClick={() => teamClickHandler(2)}
                    >
                        <div>02. 베스트 드라이버</div>
                        <div className="teamDescription">Klaxon</div>
                    </div>
                    <div className={focusTeam === 3 ? "boothTeamName active" : "boothTeamName"}
                         onClick={() => teamClickHandler(3)}
                    >
                        <div>03. Truffle</div>
                        <div className="teamDescription">Pumble</div>
                    </div>
                    <div className={focusTeam === 4 ? "boothTeamName active" : "boothTeamName"}
                         onClick={() => teamClickHandler(4)}
                    >
                        <div>04. 사이버커비</div>
                        <div className="teamDescription">Priv Stream</div>
                    </div>
                    <div className={focusTeam === 5 ? "boothTeamName active" : "boothTeamName"}
                         onClick={() => teamClickHandler(5)}
                    >
                        <div>05. 딥디크</div>
                        <div className="teamDescription">FACT CHECK</div>
                    </div>
                    <div className={focusTeam === 6 ? "boothTeamName active" : "boothTeamName"}
                         onClick={() => teamClickHandler(6)}
                    >
                        <div>06. BS</div>
                        <div className="teamDescription">무생체</div>
                    </div>
                    <div className={focusTeam === 7 ? "boothTeamName active" : "boothTeamName"}
                         onClick={() => teamClickHandler(7)}
                    >
                        <div>07. 사이버 소닉 가디언즈</div>
                        <div className="teamDescription">음성의 감시탑</div>
                    </div>
                    <div className={focusTeam === 8 ? "boothTeamName active" : "boothTeamName"}
                         onClick={() => teamClickHandler(8)}
                    >
                        <div>08. 2dac2dac</div>
                        <div className="teamDescription">보안을 고려한 의료 마이데이터 활용 어플리케이션</div>
                    </div>
                    <div className={focusTeam === 9 ? "boothTeamName active" : "boothTeamName"}
                         onClick={() => teamClickHandler(9)}
                    >
                        <div>09. F4</div>
                        <div className="teamDescription">NewStrike</div>
                    </div>
                    <div className={focusTeam === 10 ? "boothTeamName active" : "boothTeamName"}
                         onClick={() => teamClickHandler(10)}
                    >
                        <div>10. WWM</div>
                        <div className="teamDescription">Walk With Me</div>
                    </div>
                    <div className={focusTeam === 11 ? "boothTeamName active" : "boothTeamName"}
                         onClick={() => teamClickHandler(11)}
                    >
                        <div>11. 진실을 찾아서</div>
                        <div className="teamDescription">Purge</div>
                    </div>
                    <div className={focusTeam === 12 ? "boothTeamName active" : "boothTeamName"}
                         onClick={() => teamClickHandler(12)}
                    >
                        <div>12. 심해의 방랑문어</div>
                        <div className="teamDescription">Purge</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info