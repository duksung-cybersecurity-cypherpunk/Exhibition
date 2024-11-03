import React, {useState} from "react";
import teamDataList from "../assets/data/team.json"
import "../styles/Projects.css"
import Project from "../components/Project";
import Developer from "../components/Developer";
import Divider from "../components/Divider";
import {isMobile} from "react-device-detect";

const Projects = () => {
    const teamData = teamDataList.data
    const [selectedTeamId, setSelectedTeamId] = useState(teamData[0].id)

    const dividerOptions = {
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

    return (
        <div className="projectPageContainer">
            <div className="projectPageTitleContainer">
                <div className="projectPageTitle">Projects</div>
                <div className={isMobile ? "projectPageDescriptionMobile" : "projectPageDescription"}>팀명 클릭 시 작품 설명이 나타납니다.</div>
            </div>
            {
                isMobile
                ? <div className="teamSelectContainer">
                        <div className="teamRow1">
                            {teamData.map ((team, idx) => (
                                team.id < 4
                                    ? <div className={selectedTeamId === team.id ? "mobileTeamName selected" : "mobileTeamName none"} key={idx} onClick={() => setSelectedTeamId(team.id)}>
                                        {team.name}
                                    </div>
                                    : null
                            ))}
                        </div>
                        <div className="teamRow2">
                            {teamData.map ((team, idx) => (
                                team.id >= 4 && team.id < 7
                                    ? <div className={selectedTeamId === team.id ? "mobileTeamName selected" : "mobileTeamName none"} key={idx} onClick={() => setSelectedTeamId(team.id)}>
                                        {team.name}
                                    </div>
                                    : null
                            ))}
                        </div>
                        <div className="teamRow2">
                            {teamData.map ((team, idx) => (
                                team.id === 7
                                    ? <div className={selectedTeamId === team.id ? "mobileTeamName selected" : "mobileTeamName none"} key={idx} onClick={() => setSelectedTeamId(team.id)}>
                                        {team.name}
                                    </div>
                                    : null
                            ))}
                        </div>
                        <div className="teamRow2">
                            {teamData.map ((team, idx) => (
                                team.id >= 8 && team.id < 11
                                    ? <div className={selectedTeamId === team.id ? "mobileTeamName selected" : "mobileTeamName none"} key={idx} onClick={() => setSelectedTeamId(team.id)}>
                                        {team.name}
                                    </div>
                                    : null
                            ))}
                        </div>
                        <div className="teamRow2">
                            {teamData.map ((team, idx) => (
                                team.id === 11
                                    ? <div className={selectedTeamId === team.id ? "mobileTeamName selected" : "mobileTeamName none"} key={idx} onClick={() => setSelectedTeamId(team.id)}>
                                        {team.name}
                                    </div>
                                    : null
                            ))}
                        </div>
                    </div>
                : <div className="teamSelectContainer">
                        <div className="teamRow1">
                            {teamData.map ((team, idx) => (
                                team.id < 7
                                    ? <div className={selectedTeamId === team.id ? "mobileTeamName selected" : "mobileTeamName none"} key={idx} onClick={() => setSelectedTeamId(team.id)}>
                                        {team.name}
                                    </div>
                                    : null
                            ))}
                        </div>
                        <div className="teamRow2">
                            {teamData.map ((team, idx) => (
                                team.id >= 7
                                    ? <div className={selectedTeamId === team.id ? "mobileTeamName selected" : "mobileTeamName none"} key={idx} onClick={() => setSelectedTeamId(team.id)}>
                                        {team.name}
                                    </div>
                                    : null
                            ))}
                        </div>
                    </div>
            }
            <Divider option={dividerOptions}/>
            <Project teamId={selectedTeamId} />
            <Divider option={dividerOptions}/>
            <Developer teamId={selectedTeamId} />
        </div>
    )
}

export default Projects