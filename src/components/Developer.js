import React, {useEffect, useState} from "react";
import developerListObj from "../assets/data/developer.json"
import {isMobile} from "react-device-detect";

const Developer = ({teamId}) => {
    const developerList = developerListObj.data
    const [developers, setDevelopers] = useState(developerList[teamId])

    useEffect(() => {
        setDevelopers(developerList[teamId])
    }, [teamId, developerList]);

    const devImgClassName = (needResize) => {
        if (isMobile && needResize) {
            return "mobileNeedResizeImg"
        } else if (isMobile && !needResize) {
            return "mobileDeveloperImg"
        } else if (!isMobile && needResize) {
            return "needResizeImg"
        } else {
            return "developerImg"
        }
    }

    return (
        <div className="developerContainer">
            <div className="developerHeader">
                <div className="developerTitle">Developers</div>
                <div className="developerDescription">작품을 만든 사람들의 한 마디</div>
            </div>
            <div className={ isMobile ? "mobileChatListContainer" : "chatListContainer"}>
                {
                    developers.map((developer, idx) => (
                        idx % 2 === 0
                            ?
                            (
                                isMobile
                                    ? <div className="mobileChatContainer" key={idx}>
                                        <div className="mobileDeveloperInfoContainer">
                                            <img src={require(`../assets/images/developers/${developer.initial}.png`)}
                                                 className={devImgClassName(developer.needResize)} alt="developer"/>
                                            <div className="mobileDevelopmentInfoWrapper">
                                                <div className="developerName">{developer.name}</div>
                                                <div className="developerRole">{developer.role}</div>
                                            </div>
                                        </div>
                                        <div className="mobileSpeechBubbleContainer">
                                            <img src={require("../assets/images/Icon/MSpeechBubble.png")}
                                                 className="mobileSpeechBubble" alt="speechBubble"/>
                                            <div className="mobileCommentBoxOdd">
                                                {developer.comment}
                                            </div>
                                        </div>
                                    </div>
                                    : <div className="chatContainer" key={idx}>
                                        <div className="developerInfoContainer">
                                            <img src={require(`../assets/images/developers/${developer.initial}.png`)}
                                                 className={devImgClassName(developer.needResize)} alt="developer2"/>
                                            <div className="developerName">{developer.name}</div>
                                            <div className="developerRole">{developer.role}</div>
                                        </div>
                                        <div className="speechBubbleContainer">
                                            <img src={require("../assets/images/Icon/SpeechBubbleLeft.png")}
                                                 className="speechBubble" alt="speechBubble"/>
                                            <div className="commentBoxOdd">
                                                {developer.comment}
                                            </div>
                                        </div>
                                    </div>
                            )

                            :
                            (
                                isMobile
                                    ? <div className="mobileChatContainer" key={idx}>
                                        <div className="mobileDeveloperInfoContainerEven">
                                            <div className="mobileDevelopmentInfoWrapperEven">
                                                <div className="developerName">{developer.name}</div>
                                                <div className="developerRole">{developer.role}</div>
                                            </div>
                                            <img src={require(`../assets/images/developers/${developer.initial}.png`)}
                                                 className={devImgClassName(developer.needResize)} alt="developer3"/>
                                        </div>
                                        <div className="mobileSpeechBubbleContainerEven">
                                            <img src={require("../assets/images/Icon/MSpeechBubble.png")}
                                                 className="mobileSpeechBubbleEven" alt="speechBubble"/>
                                            <div className="mobileCommentBoxEven">
                                                {developer.comment}
                                            </div>
                                        </div>
                                    </div>
                                    : <div className="chatContainerEven" key={idx}>
                                        <div className="speechBubbleContainerEven">
                                            <div className="commentBoxEven">
                                                {developer.comment}
                                            </div>
                                            <img src={require("../assets/images/Icon/SpeechBubbleRight.png")}
                                                 className="speechBubbleEven" alt="developer4"/>
                                        </div>
                                        <div className="developerInfoContainer">
                                            <img src={require(`../assets/images/developers/${developer.initial}.png`)}
                                                 className={devImgClassName(developer.needResize)} alt="speechBubble"/>
                                            <div className="developerName">{developer.name}</div>
                                            <div className="developerRole">{developer.role}</div>
                                        </div>
                                    </div>
                            )
                    ))
                }
            </div>
        </div>
    )
}

export default Developer