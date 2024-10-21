import React, {useState} from "react";
import teamDataList from "../assets/data/team.json"
import "../styles/Projects.css"
import Project from "../components/Project";
import Developer from "../components/Developer";

const Projects = () => {
    const teamData = teamDataList.data
    const [selectedTeamId, setSelectedTeamId] = useState(teamData[0].id)

    return (
        <div className="projectPageContainer">
            <div className="projectPageTitleContainer">
                <div className="projectPageTitle">Projects</div>
                <div className="projectPageDescription">팀명 클릭 시 작품 설명이 나타납니다.</div>
            </div>
            <div className="teamSelectContainer">
                <div className="teamRow1">
                    {teamData.map ((team, idx) => (
                        team.id < 7
                        ? <div className={selectedTeamId === team.id ? "teamName selected" : "teamName none"} key={idx} onClick={() => setSelectedTeamId(team.id)}>
                                {team.name}
                        </div>
                        : null
                    ))}
                </div>
                <div className="teamRow2">
                    {teamData.map ((team, idx) => (
                        team.id >= 7
                        ? <div className={selectedTeamId === team.id ? "teamName selected" : "teamName none"} key={idx} onClick={() => setSelectedTeamId(team.id)}>
                            {team.name}
                        </div>
                        : null
                    ))}
                </div>
            </div>
            {/*<Divider />*/}
            <Project teamId={selectedTeamId} />
            {/*<Divider />*/}
            <Developer teamId={selectedTeamId} />
        </div>
    )
}

export default Projects