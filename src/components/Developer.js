import React, {useEffect, useState} from "react";
import developerListObj from "../assets/data/developer.json"

const Developer = ({teamId}) => {
    const developerList = developerListObj.data
    const [developers, setDevelopers] = useState(developerList[teamId])

    useEffect(() => {
        setDevelopers(developerList[teamId])
    }, [teamId]);

    return (
        <div className="developerContainer">
            <div className="developerHeader">
                <div className="developerTitle">Developers</div>
                <div className="developerDescription">작품을 만든 사람들의 한 마디</div>
            </div>
            <div className="chatListContainer">
                {
                    developers.map((developer, idx) => (
                        idx % 2 === 0
                        ?
                            <div className="chatContainer" key={idx}>
                                <div className="developerInfoContainer">
                                    <img src={require(`../assets/images/developers/${developer.initial}.png`)} className="developerImg"/>
                                    <div className="developerName">{developer.name}</div>
                                    <div className="developerRole">{developer.role}</div>
                                </div>
                                <div className="speechBubbleContainer">
                                    <img src={require("../assets/elements/SpeechBubbleLeft.png")} className="speechBubble"/>
                                    <div className="commentBoxOdd">
                                        {developer.comment}
                                    </div>
                                </div>
                            </div>

                        :
                            <div className="chatContainerEven" key={idx}>
                                <div className="speechBubbleContainerEven">
                                    <div className="commentBoxEven">
                                        {developer.comment}
                                    </div>
                                    <img src={require("../assets/elements/SpeechBubbleRight.png")} className="speechBubble"/>
                                </div>
                                <div className="developerInfoContainer">
                                    <img src={require(`../assets/images/developers/${developer.initial}.png`)} className="developerImg"/>
                                    <div className="developerName">{developer.name}</div>
                                    <div className="developerRole">{developer.role}</div>
                                </div>
                            </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Developer