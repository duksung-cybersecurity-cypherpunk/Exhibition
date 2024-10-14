import React from "react";
import '../styles/About.css'

const About = () => {
    return (
        <main className="about">
            <section className="content-section">
                <div className="poster img">
                    <img src={require('../assets/images/Poster.png')} alt="CypherPunk Poster" />
                </div>
                <div className="content-text">
                    <div className="title">
                        덕성여자대학교 사이버보안전공 제 2회 졸업 전시회
                    </div>
                    <div className="subtitle">CypherPunk</div>
                    <div className="description">
                        <span className="highlight">사이퍼펑크(Cypherpunk)</span>는 정보보호 강화 및 보안에 중점을 두는모든 개인 및 사회적 운동을 의미하는 용어입니다.<br></br><br></br>
                        사이버보안 전공 졸업 프로젝트 참여 학생 일동은 본 프로젝트 및 전시를 통해 사이버보안 분야의 최신 동향 및 분야를 고찰하여 미래의 사이버보안 분야의 전문가이자 일원으로서 나아가고자 하는 포부를
                        담았습니다.
                    </div>
                </div>
            </section>
            <div class="underline1"></div>
            <section className="professor-section">
                <div className="Group1356">
                    <div className="Group1356_title">Professor</div>
                    <div className="Group1356_subtitle">교수님 축사</div>
                </div>
                <div className="professor-info-cover">
                    <div className="professor-info">
                        <div className="professor-image">
                            <img src={require('../assets/images/professor/Prof.Baek.png')} alt="Prof.Baek" />
                        </div>
                        <div className="professor-text">
                            <p className="professor-text-name">박태정 교수님</p>
                            <p className="professor-text-content">3년째 본교 졸업프로젝트 주제를 선정하기 위해 고심하고, 졸업을 기획해 주셨으며...</p>
                        </div>
                    </div>
                </div>
                <div class="pagination">
                    <span>1/5</span>
                    <button class="prev">&#8249;</button>
                    <button class="next">&#8250;</button>
                </div>
            </section>
            <div class="underline2"></div>
            <section class="graduation-committee">
                <div class="committee-section">
                <div class="committee-title">
                    Graduation Exhibition <br></br>Committee
                </div>
                <div class="committee-subtitle">
                졸업 전시 준비 위원회
                </div>
            </div>
            <div class="committee-role">
                <div class="committee-executive">
                        <h3 class="position1">위원장</h3>
                        <p class="name1">유혜선</p>
                    </div>
                    <div class="committee-executive">
                    <h3 class="position1">부위원장</h3>
                        <p class="name1">정현조</p>
                    </div>
            </div>
            <div class="underline3"></div>
            <div class="committe-organization">
                <div class="committee-operations">
                    <div class="detail-column1">
                    <h3 class="position2">운영</h3>
                        <p class="name2">정현조*</p>
                        <p class="name2">이유영</p>
                        <p class="name2">최  연</p>
                        <p class="name2">정아리</p>
                    </div>
                    </div>
                <div class="committee-publicrelations">
                    <div class="detail-column1">
                    <h3 class="position2">홍보</h3>
                    <p class="name2">인다운*</p>
                    <p class="name2">강정화</p>
                    <p class="name2">신서영</p>
                    <p class="name2">옥재은</p>
                    </div>
                </div>
                <div class="committee-administration">
                    <div class="detail-column2">
                        <h3 class="position2">관리</h3>
                        <p class="name2">이예린*</p>
                        <p class="name2">신효섬</p>
                        <p class="name2">송윤지</p>
                        <p class="name2">김태경</p>
                        <p class="name2">윤경은</p>
                    </div>
                    </div>
                    <div class="committee-onlineexhibition">
                    <div class="detail-column3">
                        <h3 class="position3">온라인 전시</h3>
                        <span class="nameBox">
                        <span class="name3KR">인다운</span><span class="name3EN">design</span></span>
                        <span class="nameBox">
                        <span class="name3KR">강정화</span><span class="name3EN">design</span></span>
                        <span class="nameBox"><span class="name3KR">정현조</span><span class="name3EN">dev</span></span>
                        <span class="nameBox"><span class="name3KR">김희연</span><span class="name3EN">dev</span></span>
                    </div>
                </div>
                </div>
            </section>
        </main>

    );
}

export default About