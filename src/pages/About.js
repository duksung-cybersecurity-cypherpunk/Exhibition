import React, { useState, useEffect, useRef } from "react";
import '../styles/About.css'
import Button from "../components/AboutButton";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const About = () => {
    const [page, setPage] = useState(1);
    


    const renderContent = (page) => {
        switch (page) {
            case 1:
                return {
                    professorName: "박태정 교수님",
                    professorImage: require('../assets/images/professor/Prof.Park.png'),
                    professorText: '덕성에 온 지 몇 해가 되다 보니, 한 해 한 해 지나갈 때마다 새롭게 사회에 진출한 학생들의 모습들이 떠오릅니다. <br>그리고 이미 훌륭한 사회인이 되어서 멋진 모습으로 제 역할을 다하고 있는 졸업생들을 우연히 만나서 현재의<br> 일들과 학창 시절의 이야기를 들을 수 있는 기회도 여러번 있었습니다.<br>그 때마다 졸업한 학생들이 공통적으로 이야기하는 내용이 있었는데, 지금 졸업을 앞두고 있는 여러분들처럼<br> 졸업을 앞두고 미래에 대해 적잖이 불안해 했었지만, 다시 학창 시절로 돌아 간다면 앞으로 모든 것들이 잘 될 <br>것이니까 불안해 하지 말고 좀 더 밝고 즐겁게 미래를 준비하라고 스스로에게 이야기해 주고 싶다는 <br>내용이었습니다. 그렇게 덕성의 선배들은 - 졸업생들 중 한 명의 표현에 의하면 - ‘조용하면서도 강하게’ 자신의<br> 역할을 다하면서 우리 사회 곳곳에서 활약하고 있습니다. <br>하지만, 제가 만나 본 졸업생들이 단 한 번도 실패를 경험하지 않았다는 이야기는 아닙니다. 대부분 여러 번 <br>쓰라린 실패를 경험하고 그 가운데에서도 포기하지 않고 끈기있게 노력을 해 왔다는 공통점도 있습니다.'
                    
                };
            case 2:
                return {
                    professorName: "박태정 교수님",
                    professorImage: require('../assets/images/professor/Prof.Park.png'),
                    professorText: "지난 방학 중에 보안 관련 모 기관의 신입 사원 면접관 자격으로 신입 지원자들을 만나볼 기회가 있었습니다.<br> 여러분과 마찬가지로 새롭게 사회 진출을 준비하는 지원자들의 면면을 살펴 보고 앞으로 어떻게 가르쳐야 하는지 방향을 설정할 수 있었던 좋은 기회였습니다. 그리고 그 경험 속에서 우리 학생들도 충분히 경쟁력이 있다는<br> 생각이 들었고 조금만 잘 준비하면 다른 지원자들보다 잘 할 수 있겠다는 확신이 들었습니다. 그렇게 하기 <br>위해서는 우리 학생들이 조금만 더 자신감을 가지고 자신을 잘 표현할 수 있는 능력만 있으면 좋을 것 같네요. <br>직전까지 코로나 때문에 오프라인에서 만나지 못하다가 처음으로 2기 학생회 주관으로 오프라인 개강 행사를<br> 재미있게 잘 진행했던 일이 사이버보안 2기와의 추억 중에 가장 기억에 남네요. 이러한 추억이 있지만 사이버보안 전공이 더 큰 단위로 통합되는 사실을 섭섭하게 느끼는 학생들도 있을 듯 합니다. 하지만 좀 더 많은 후배들이<br> 생긴다고 생각했으면 좋겠고, 여러분들의 선배들이 그렇게 했듯, 여러분도 사회에 진출해서 더 많아진 후배들을 따뜻하게 챙겨 주셨으면 좋겠습니다. <br>사이버보안 2기 학생들의 앞날에 좋은 일만 가득하시길 바라며, 졸업을 진심으로 축하드립니다."
                };
            case 3:
                return {
                    professorName: "강남희 교수님",
                    professorImage: require('../assets/images/professor/Prof.Kang.png'),
                    professorText: "3학년부터 졸업작품의 주제를 선정하기 위해 고민하고, 작품을 기획하고 수정하고, 이를 기반으로 4학년 동안 <br>기획된 작품을 개발하고 구현해 나가면서 어려움도 많이 느꼈을 거예요. 걱정스러운 밤을 보내면서 발표를 <br>준비하기도 했을 것이고, 담당 교수님들과 상담하면서 자신을 책망하기도 했겠지요. 그러나 시간이 지난 오늘,<br> 졸업전시회에 그동안의 노력이 모여 더욱 개선된 작품이 출품되는 기쁨을 느끼고 계시리라 생각합니다.<br> 결국 하루하루의 시간 속에 하나 둘 노력한 작은 일들이 모아져 하나의 큰 성과가 만들어지는 값진 경험을 <br>하셨다고 생각합니다. 대학을 졸업하고 사회 일원이 되어서도, 또 여러분의 인생에서도 성장을 위한 작은 시간 <br>속의 노력을 멈추지 않길 바랍니다. 사이버보안을 공부하다 보면 우리의 인생과 많은 부분 유사함을 느낍니다.<br> 데이터나 시스템을 공격하는 방법을 이해해야 시스템을 막을 수 있는 최적의 방안을 찾을 수 있다는 것이 <br>보호이고 보안 기술입니다. 타인을 사랑하는 방법을 알아야 나도 타인으로부터 사랑을 받을 수 있고, 누군가에게 도움을 주어야 나도 도움을 받을 수 있고, 또 일하는 방법을 알아야 후임자에게 일을 시킬 수 있는 것처럼 참 많은 부분 살아가는 인생과 비슷합니다. 사이버보안의 기본과 같이 여러분의 인생에서도 주고받는 기쁨을 느끼면서 <br>행복하시길 기원합니다. 졸업작품 전시를 축하하고, 오늘의 여러분들 모두가 자랑스럽습니다. 내일의 여러분은 더욱 성장되어 있을거에요. 그동안의 노력에 찬사를 보냅니다."
                };
            case 4:
                return {
                    professorName: "서민혜 교수님",
                    professorImage: require('../assets/images/professor/Prof.Seo.png'),
                    professorText: "안녕하세요, 덕성여자대학교 사이버보안전공 교수 서민혜입니다. 2024년 11월에 개최되는 덕성여자대학교 <br>사이버보안전공 졸업작품전시회를 맞이하여, 수고하신 학생들과 교수님들께 깊은 감사의 마음을 전합니다. <br>상투적인 표현이지만(?) 여러분이 보안을 공부해보겠다고 처음 전공 수업시간에 저를 반짝반짝 쳐다보던 것이 <br>엊그제같은데, 벌써 졸업을 앞두고 있다니 대견하기도 하고 뿌듯하기도 합니다 :) 보안이라는 분야가 공부하기<br> 쉽지만은 않았을텐데, 포기하지 않고 지금까지 온 여러분에게 박수를 보냅니다! 졸업작품을 준비하는 기간 동안 많은 어려움이 있었겠지만, 그 모든 경험이 여러분이 사회에 나갔을 때 난관을 헤쳐나가는 힘이 될 것이라 <br>믿습니다. 아마 졸업작품을 준비하면서 ‘내가 졸업을 앞두고 있는데 아직도 보안을 잘 모르는 것 같아’, ‘4학년인데 아는게 하나도 없는 것 같아’라는 생각에 괴로워하는 학생들이 많을 것입니다. 사이버보안전공을 졸업한다고 <br>바로 보안 전문가가 되는 것은 아니지만, 여러분이 졸업작품을 진행하면서 쏟은 수많은 노력이 전문가가 되는 <br>길을 닦는 과정이라고 생각합니다. 다시 한 번 이번 졸업작품전시회를 열정적으로 준비한 학생 여러분들에게 <br>박수를 보내며, 언제나 여러분들의 가는 길을 응원하겠습니다."
                };
            case 5:
                return {
                    professorName: "백남균 교수님",
                    professorImage: require('../assets/images/professor/Prof.Baek.png'),
                    professorText: "사이버보안 분야에서의 여정을 마치고 새로운 시작에 있는 여러분을 축하합니다. 여러 해 동안 열심히 배우고 <br>연구한 멋진 결과물을 자랑스럽게 전시하게 되어 매우 기쁩니다. 사이버보안은 미래 사회에서 점점 더 중요한 <br>이슈가 되어가고 있습니다.특히 최근 몇 년간의 급격한 ICT 기술 발전으로 인해 우리의 삶과 기업, 정부 등 모든 <br>분야에서 사이버 공격의 위협을 받고 있습니다. 여러분은 이 중요한 분야에서 지식과 노력을 바탕으로 뛰어난 <br>성과를 이루어 왔습니다. 이러한 노력과 열정은 사이버 공격으로부터 우리를 보호하고, 디지털 세상에서 <br>안전하게 살 수 있는 기회를 제공하는데 크게 기여할 것입니다. 하지만 이 과정은 끝이 아닙니다. 사이버보안은 <br>끊임없이 변화하고 진화하는 분야입니다. 기술의 발전에 따라 새로운 도전과 기회가 계속해서 나타날 것입니다. 여러분은 지속적인 학습과 개발을 통해 이러한 도전에 대응하고, 성장할 준비가 되어 있습니다. 마지막으로,<br> 여러분과 그리고 함께한 가족, 친구분들께 감사의 말씀을 전합니다. 앞으로도 사이버보안 분야에서 여러분의<br> 역량과 리더십이 인정받기를 기원합니다."
                };
            default:
                return {};
        }
    };

    const content = renderContent(page);

    return (
        <main className="about">
            <section className="contentSection">
                <div className="poster img">
                    <img src={require('../assets/images/Poster.png')} alt="CypherPunk Poster" />
                </div>
                <div className="contentText">
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
            <section className="professorSection">
                <div className="Group1356">
                    <div className="Group1356Title">Professor</div>
                    <div className="Group1356Subtitle">교수님 축사</div>
                </div>
                <TransitionGroup>
                    <CSSTransition
                        key={page}
                        timeout={500}
                        classNames="fade"
                    >
                <div className="professorInfoCover">
                    <img className="professorImageContainer" src={require('../assets/images/Group 1540.png')} alt="Cover Image" />
                    
                    <div className="professorOverlayText">
                        <div className="professorImage">
                            <img src={content.professorImage} alt={content.professorName} />
                            
                            <div className="pageIndicator">
                        </div>
                        </div>
                        <div className="professorText">
                            <p className="professorTextName">{content.professorName}</p>
                            <div className="professorTextContent" dangerouslySetInnerHTML={{ __html: content.professorText }} />
                        </div>
                    </div>
                </div>
                </CSSTransition>
                </TransitionGroup>
                <Button page={page} setPage={setPage}/>
            </section>
            <div class="underline2"></div>
            <section class="graduationCommittee">
                <div class="committeeSection">
                    <div class="committeeTitle">
                        Graduation Exhibition <br></br>Committee
                    </div>
                    <div class="committeeSubtitle">
                        졸업 전시 준비 위원회
                    </div>
                </div>
                <div class="committeeRole">
                    <div class="committeeExecutive">
                        <h3 class="position1">위원장</h3>
                        <p class="name1">유혜선</p>
                    </div>
                    <div class="committeeExecutive">
                        <h3 class="position1">부위원장</h3>
                        <p class="name1">정현조</p>
                    </div>
                </div>
                <div class="underline3"></div>
                <div class="committeOrganization">
                    <div class="committeeOperations">
                        <div class="detailColumn1">
                            <h3 class="position2">운영</h3>
                            <p class="name2">정현조*</p>
                            <p class="name2">이유영</p>
                            <p class="name2">최  연</p>
                            <p class="name2">정아리</p>
                        </div>
                    </div>
                    <div class="committeePublicrelations">
                        <div class="detailColumn1">
                            <h3 class="position2">홍보</h3>
                            <p class="name2">인다운*</p>
                            <p class="name2">강정화</p>
                            <p class="name2">신서영</p>
                            <p class="name2">옥재은</p>
                        </div>
                    </div>
                    <div class="committeeAdministration">
                        <div class="detailColumn2">
                            <h3 class="position2">관리</h3>
                            <p class="name2">이예린*</p>
                            <p class="name2">신효섬</p>
                            <p class="name2">송윤지</p>
                            <p class="name2">김태경</p>
                            <p class="name2">윤경은</p>
                        </div>
                    </div>
                    <div class="committeeOnlineexhibition">
                        <div class="detailColumn3">
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