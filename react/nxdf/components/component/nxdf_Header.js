import React, { useState } from "react";
import styled from "styled-components";
import { MediaButton } from "../welcome/Common";

const Header = (props) => {
    const { lang, setLang } = props;
    const { solana } = window;
    const language = () => {
        setLang(lang === "ko" ? "en" : "ko");
    };
    const meeting = async () => {
        if (solana) {
            const response = await solana.connect();
            console.log(response.ValidatorInfo);
            console.log(response.publicKey.toString());
        } else {
            alert("Solana object not found! Get a Phantom Wallet 👻");
        }
    };
    return (
        <FirstHeaderLayout>
            <HeaderLayout>
                <HeaderDiv>
                    <HeaderTitle>
                        <img
                            src="/images/NXDF_welcome_logo.png"
                            width="100%"
                            height="40px"
                        />
                    </HeaderTitle>
                    <HeaderNav>
                        <HeaderNavinner>
                            <HeaderNavTitle></HeaderNavTitle>
                        </HeaderNavinner>
                    </HeaderNav>
                </HeaderDiv>
                <HeaderDiv2>
                    <HeaderBtn onClick={language}>
                        <span>{lang}</span>
                    </HeaderBtn>
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
    );
};

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

const HeaderLayout = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const HeaderBtn = styled(MediaButton)`
    @media (max-width: 768px) {
        width: 20%;
        span {
            display: none;
        }
        img {
            margin: 0;
        }
    }
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

export default Header;
