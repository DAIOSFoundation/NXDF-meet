import React, { useState } from "react";
import { withRouter,useHistory } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const WelcomePageMain = (props) => {
    const history = useHistory();
    const [grid, setgrid] = useState(false);
    const Onclick = () => {
        setgrid(true);
    };
    const item = {
        beforeOpen: { y: "-100vh", display: "none", visibility: "hidden" },
        afterOpen: {
            opacity: 1,
            height: "100vh",
            y: 0,
            display: "block",
            visibility: "visible",
            transition: {
                duration: 2,
            },
        },
        afterClose: {
            y: "-100vh",
            height: 0,
            transition: {
                duration: 2,
            },
            transitionEnd: {
                display: "none",
                visibility: "hidden",
            },
        },
    };

    const meeting = () => {
         history.push({
            pathname: `/meeting`,
        });
    }
    return (
        <Welcome>
            <FirstHeaderLayout>
                <HeaderLayout>
                    <HeaderDiv>
                        <HeaderTitle>
                            <img
                                src="/images/NXDFLogo.png"
                                width="40px"
                                height="40px"
                            />
                            <span>NXDF</span>
                        </HeaderTitle>
                        <HeaderNav>
                            <HeaderNavinner>
                                <HeaderNavTitle>
                                    <span>개요</span>
                                </HeaderNavTitle>
                            </HeaderNavinner>
                        </HeaderNav>
                    </HeaderDiv>
                    <HeaderDiv2>
                        <HeaderBtn onClick={meeting}>
                                <img
                                    src="/images/video.svg"
                                    width="20px"
                                    height="20px"
                                />
                                <span>회의 시작하기</span>
                        </HeaderBtn>
                    </HeaderDiv2>
                </HeaderLayout>
            </FirstHeaderLayout>
            <Main>
                <MainLayout>
                    <Media>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Xp2Mlc2UZAw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Media>
                    <MediaDes>
                        <MediaDesLayout>
                            <MediaInnerDes>
                                <DesH>모두를 위한 프리미엄 화상 회의</DesH>
                                <DeSpan>
                                    안전한 고품질 비즈니스 회의 위한 NXDF Meet
                                    서비스를 누구나 모든 기기에 사용할 수
                                    있습니다.
                                </DeSpan>
                                <MediaButton onClick={meeting}>
                                        <img
                                            src="/images/video.svg"
                                            width="20px"
                                            height="20px"
                                        />
                                            <span>회의 시작하기</span>
                                </MediaButton>
                            </MediaInnerDes>
                            <MediaInnerDes2>
                                <img src="/images/startwindow.png" />
                            </MediaInnerDes2>
                        </MediaDesLayout>
                    </MediaDes>
                    <Grid>
                        <GridBtn onClick={Onclick}>
                            <span>NXDF Meet 알아보기</span>
                            <img src="/images/downArrow.svg" />
                        </GridBtn>
                    </Grid>
                </MainLayout>
            </Main>
            <Gridiv
                grid={grid}
                initial="beforeOpen"
                animate={grid ? "afterOpen" : "afterClose"}
                variants={item}
            >
                <GridLayout>
                    <GridinnerDiv>
                        <DesH>안전하게 사용할 수 있는 Meet</DesH>
                        <DeSpan>
                            NXDF Meet은 사용자 정보 및 개인정보 보호를 위해
                            최선을 다합니다. NXDF 화상 회의는 암호화된 상태로
                            전송되며, 지속적으로 보안 기술이 업데이트 되어 더욱
                            강력한 보호 기능을 제공합니다.
                        </DeSpan>
                    </GridinnerDiv>
                    <GridinnerDivImg
                        img={"/images/gridimg1.png"}
                    ></GridinnerDivImg>
                    <GridinnerDivImg
                        img={"/images/gridimg2.png"}
                    ></GridinnerDivImg>
                    <GridinnerDiv>
                        <DesH>어디서든 사용할 수 있는 Meet</DesH>
                        <DeSpan>
                            NXDF Meet에서 모두와 만나 비즈니스 제안서를 발표하고
                            학업 과제를 함께 하고 아니면 그냥 얼굴을 보고 안부를
                            전할 수 있습니다. 기업, 학교, 기타 조직은 도메인에
                            속한 최대 10만 명의 시청자를 대상으로 실시간
                            스트리밍을 진행 할 수 있습니다.
                        </DeSpan>
                        <DesH>어느 기기에서나 사용할 수 있는 Meet</DesH>
                        <DeSpan>
                            초대받은 사용자는 어떠한 디바이스에서도 브라우저만
                            있으면 앱을 직접 설치하지 않고도 온라인 화상회의에
                            참여할 수 있습니다.
                        </DeSpan>
                    </GridinnerDiv>
                    <GridinnerDiv>
                        <DesH>화면 공유</DesH>
                        <DeSpan>
                            전체화면이나 하나의 창을 공유하여 문서,
                            프레젠테이션, 개발툴, 게임화면 등을 보여주세요.
                        </DeSpan>
                    </GridinnerDiv>
                    <GridinnerDivImg
                        img={"/images/gridimg3.png"}
                    ></GridinnerDivImg>
                </GridLayout>
            </Gridiv>
            <Footer>
                <FooterLayout>
                    <HeaderDiv>
                        <HeaderTitle>
                            <img
                                src="/images/NXDFLogo.png"
                                width="20px"
                                height="20px"
                            />
                            <span>NXDF</span>
                        </HeaderTitle>
                    </HeaderDiv>
                    <HeaderDiv2></HeaderDiv2>
                </FooterLayout>
            </Footer>
        </Welcome>
    );
};

//헤더

const HeaderLayout = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const HeaderDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
const HeaderDiv2 = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const HeaderTitle = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
        color: #000000;
        font-size: 1rem;
    }
    img {
        margin-right: 1rem;
    }
`;

const HeaderNav = styled.div`
    width: 50%;
    height: 100%;
    color: #000000;
`;

const HeaderNavinner = styled.div`
    height: 100%;
`;

const HeaderNavTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    span {
        display: inline-block;
        border-bottom: 2px solid black;
    }
`;

//추가 이미지
const Gridiv = styled(motion.div)`
    /* display: ${(props) => (props.grid ? "block" : "none")};
    visibility: ${(props) => (props.grid ? "visible" : "hidden")}; */
    width: 100%;
    height: 100vh;
    margin-bottom: 3rem;
    position: relative;
    z-index: -100;
`;

const GridLayout = styled.div`
    margin: 0 auto;
    height: 100%;
    width: 60%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(6, 1fr);
    }

    div:nth-child(1) {
        order: 1;
        @media (max-width: 768px) {
            order: 2;
        }
    }
    div:nth-child(2) {
        order: 2;
        @media (max-width: 768px) {
            order: 1;
        }
    }
    div:nth-child(3) {
        order: 3;
    }
    div:nth-child(4) {
        order: 4;
    }
    div:nth-child(5) {
        order: 5;
        @media (max-width: 768px) {
            order: 6;
        }
    }
    div:nth-child(6) {
        order: 6;
        @media (max-width: 768px) {
            order: 5;
        }
    }
`;

const DesH = styled.span`
    color: #000000;
    display: inline-block;
    font-size: 2.5rem;
    padding-bottom: 10px;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const DeSpan = styled.span`
    display: inline-block;
    font-size: 1rem;
    color: gray;
    padding-bottom: 10px;
    @media (max-width: 768px) {
        font-size: 0.5rem;
    }
`;

const GridinnerDiv = styled.div`
    width: 80%;
    @media (min-width: 2000px) {
        width: 50%;
    }
`;
const GridinnerDivImg = styled.div`
    background-image: ${(props) => `url(${props.img})`};
    background-repeat: no-repeat;
    background-size: 100% 100%;
    @media (max-width: 768px) {
        width: 50%;
        height: 100%;
        background-position: center;
        align-self: center;
        justify-self: center;
    }
`;

//그리드 자리

const Grid = styled.div`
    margin-top: 1rem;
    border-top: 1px solid gray;
    width: 100%;
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: black;
    @media (max-width: 768px) {
        margin-top: 2rem;
    }
`;

const GridBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
`;

//미디어(유투브) 자리
const Media = styled.div`
    width: 100%;
    height: 55%;
    img {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
    @media (max-width: 768px) {
        width: 100%;
        height: 35%;
    }
`;

//미디어 설명 자리

const MediaDes = styled.div`
    width: 100%;
    height: 30%;
`;

const MediaDesLayout = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    margin-top: 2.5rem;
    @media (max-width: 768px) {
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const MediaInnerDes = styled.div`
    width: 90%;
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 50%;
    }
`;

const MediaButton = styled.button`
    background: linear-gradient(45deg, #9281e1, #de2f89);
    width: 30%;
    font-size: 1rem;
    padding: 10px;
    color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: white;
        img {
            margin-right: 10px;
        }
    }
    
    @media (max-width: 768px) {
        width: 50%;
    }
`;

const MediaInnerDes2 = styled.div`
    img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 768px) {
        margin-top: 2rem;
        height: 50%;
    }
`;

//안쪽 레이아웃

const MainLayout = styled.div`
    width: 60%;
    margin: 0 auto;
    min-height: 85vh;
`;

//제일 바깥쪽 레이아웃 잡기
const Welcome = styled.div`
    width: 100%;
    height: 100vh;
`;

const FirstHeaderLayout = styled.div`
    width: 100%;
    background-color: white;
    height: 5vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 200;
`;

const HeaderBtn = styled(MediaButton)`
    @media (max-width: 768px) {
        width: 20%;
        span {
            display: none;
        }
        img {
            margin-right: 10px;
        }
    }
`;

//메인
const Main = styled.div`
    width: 100%;
    height: 90vh;
    padding-top: 5vh;
    position: relative;
    z-index: 100;
    background: white;
`;

//푸터
const Footer = styled.div`
    background: #f3f3f3;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 5vh;
`;

const FooterLayout = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default WelcomePageMain;
