import React, {useEffect, useState} from "react"
import teamList from "../assets/data/team.json"
import projectList from "../assets/data/project.json"
import Badge from "./Badge";
import {isMobile} from "react-device-detect";

const Project = ({teamId}) => {
    const teams = teamList.data
    const projects = projectList.data

    const [team, setTeam] = useState(teams[teamId])
    const [project, setProject] = useState(projects[teamId])

    useEffect(() => {
        setTeam(teams[teamId])
        setProject(projects[teamId])
    }, [teamId, projects, teams]);

    return (
        <div className={ isMobile ? "mobileProjectContainer" : "projectContainer" }>
            <div className={ isMobile ? "mobileProjectHeader" : "projectHeader" }>
                <div className={ isMobile ? "mobileProjectTitleContainer" : "projectTitleContainer" }>
                    <img src={require("../assets/images/Icon/TitleIconPink.png")}  className={ isMobile ? "mobileProjectTitleIcon" : "projectTitleIcon" } alt="titleIcon"/>
                    <div className={ isMobile ? "mobileProjectTitle" : "projectTitle" }>{project.title}</div>
                </div>
                <div className={ isMobile ? "mobileProjectTeamName" : "projectTeamName" }>{team.name}</div>
            </div>
            <div className="projectInfoContainer">
                <div className="projectInfo">
                    <div className="projectInfoTitleContainer">
                        <img src={require("../assets/images/Icon/TitleIconBlue.png")} className="projectInfoDashIcon" alt="projectIcon"/>
                        <div className="projectInfoTitle">작품 설명</div>
                    </div>
                    <div className="projectInfoDescription">{project.description}</div>
                </div>
                <div className="projectInfo">
                    <div className="projectInfoTitleContainer">
                        <img src={require("../assets/images/Icon/TitleIconBlue.png")} className="projectInfoDashIcon" alt="projectIcon"/>
                        <div className="projectInfoTitle">기획 의도</div>
                    </div>
                    <div className="projectInfoDescription">{project.intention}</div>
                </div>
                <div className="projectInfo">
                    <div className="projectInfoTitleContainer">
                        <img src={require("../assets/images/Icon/TriangleBlue.png")} className="projectInfoTriangleIcon" alt="projectIcon"/>
                        <div className="projectInfoTitle">개발 스택</div>
                    </div>
                    <div className="projectStackContainer">
                        <div className="projectStack">
                            <div className="projectStackTitle">- 개발 도구:</div>
                            <div className="badgeContainer">{project.tool.map((tool, idx) => (<Badge stack={tool} key={idx} />))}</div>
                        </div>
                        <div className="projectStack">
                            <div className="projectStackTitle">- 개발 언어:</div>
                            <div className="badgeContainer">{project.language.map((language, idx) => (<Badge stack={language} key={idx} />))}</div>
                        </div>
                        {
                            project.hardware
                                ? <div className="projectStack">
                                    <div className="projectStackTitle">- 하드웨어:</div>
                                    <div className="badgeContainer">{project.hardware.map((hw, idx) => (<Badge stack={hw} key={idx} />))}</div>
                                </div>
                                : <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project