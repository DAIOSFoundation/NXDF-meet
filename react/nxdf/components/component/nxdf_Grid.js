import React, { useState } from "react";
import styled from "styled-components";
import { withRouter, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { MediaButton, CommonH, CommonSpan } from "../welcome/Common";

const Grid = (props) => {
    const { grid } = props;
    const item = {
        beforeOpen: { y: "-100vh", display: "none", visibility: "hidden" },
        afterOpen: {
            opacity: 1,
            height: "auto",
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

    return (
        <Gridiv
            grid={grid}
            initial="beforeOpen"
            animate={grid ? "afterOpen" : "afterClose"}
            variants={item}
        >
            <GridLayout>
                <GridinnerDiv>
                    <CommonH>안전하게 사용할 수 있는 Meet</CommonH>
                    <CommonSpan>
                        NXDF Meet은 사용자 정보 및 개인정보 보호를 위해 최선을
                        다합니다. NXDF 화상 회의는 암호화된 상태로 전송되며,
                        지속적으로 보안 기술이 업데이트 되어 더욱 강력한 보호
                        기능을 제공합니다.
                    </CommonSpan>
                </GridinnerDiv>
                <GridinnerDivImg img={"/images/gridimg1.png"} />
                <GridinnerDivImg img={"/images/gridimg2.png"} />
                <GridinnerDiv>
                    <CommonH>어디서든 사용할 수 있는 Meet</CommonH>
                    <CommonSpan>
                        NXDF Meet에서 모두와 만나 비즈니스 제안서를 발표하고
                        학업 과제를 함께 하고 아니면 그냥 얼굴을 보고 안부를
                        전할 수 있습니다. 기업, 학교, 기타 조직은 도메인에 속한
                        최대 10만 명의 시청자를 대상으로 실시간 스트리밍을 진행
                        할 수 있습니다.
                    </CommonSpan>
                    <CommonH>어느 기기에서나 사용할 수 있는 Meet</CommonH>
                    <CommonSpan>
                        초대받은 사용자는 어떠한 디바이스에서도 브라우저만
                        있으면 앱을 직접 설치하지 않고도 온라인 화상회의에
                        참여할 수 있습니다.
                    </CommonSpan>
                </GridinnerDiv>
                <GridinnerDiv>
                    <CommonH>화면 공유</CommonH>
                    <CommonSpan>
                        전체화면이나 하나의 창을 공유하여 문서, 프레젠테이션,
                        개발툴, 게임화면 등을 보여주세요.
                    </CommonSpan>
                </GridinnerDiv>
                <GridinnerDivImg img={"/images/gridimg3.png"} />
            </GridLayout>
        </Gridiv>
    );
};

//추가 이미지
const Gridiv = styled(motion.div)`
    /* display: ${(props) => (props.grid ? "block" : "none")};
    visibility: ${(props) => (props.grid ? "visible" : "hidden")}; */
    width: 100%;
    margin-bottom: 3rem;
    position: relative;
    z-index: -100;
`;

const GridLayout = styled.div`
    margin: 0 auto;
    width: 60%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: 768px) {
        height: auto;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(6, auto);
    }
    @media (max-width: 1200px) {
        height: auto;
        grid-template-rows: repeat(3, auto);
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
    @media (max-width: 1200px) {
        width: 100%;
        min-height: 250px;
        background-position: center;
        align-self: center;
        justify-self: center;
    }
`;

export default Grid;
