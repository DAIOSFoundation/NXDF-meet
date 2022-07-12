import React, { useState } from "react";
import styled from "styled-components";
import { withRouter, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { MediaButton, CommonH, CommonSpan } from "../welcome/Common";

const Main = (props) => {
    const { grid, setgrid } = props;
    const { solana } = window;
    const Onclick = () => {
        setgrid((prev) => !prev);
    };
    const meeting = async () => {
        if (solana) {
            const response = await solana.connect();
            console.log(response.ValidatorInfo);
            console.log(response.publicKey.toString());
        } else {
            alert("Solana object not found! Get a Phantom Wallet 👻");
        }

        // history.push({
        // //     pathname: `/meeting`,
        // });
    };
    return (
        <MainPlace>
            <MainLayout>
                <Media>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/Xp2Mlc2UZAw"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </Media>
                <MediaDes>
                    <MediaDesLayout>
                        <MediaInnerDes>
                            <CommonH>모두를 위한 프리미엄 화상 회의</CommonH>
                            <MainDeSpan>
                                안전한 고품질 비즈니스 회의 위한 NXDF Meet
                                서비스를 누구나 모든 기기에 사용할 수 있습니다.
                            </MainDeSpan>
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
        </MainPlace>
    );
};

//메인
const MainPlace = styled.div`
    width: 100%;
    height: 89vh;
    padding-top: 6vh;
    position: relative;
    z-index: 100;
    background: white;
`;

//안쪽 레이아웃

const MainLayout = styled.div`
    width: 60%;
    margin: 0 auto;
    min-height: 85vh;
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
    @media (max-width: 768px) {
        height: 50%;
    }
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
    width: 50%;
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 50%;
    }
`;

const MediaInnerDes2 = styled.div`
    border-radius: 10px;
    img {
        border-radius: 10px;
        width: 100%;
        height: 100%;
    }

    @media (max-width: 768px) {
        margin-top: 2rem;
        height: 50%;
    }
`;

const MainDeSpan = styled.span`
    display: inline-block;
    font-size: 1rem;
    color: gray;
    padding-bottom: 10px;
    @media (max-width: 768px) {
        font-size: 0.5rem;
        text-align: center;
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

export default Main;
