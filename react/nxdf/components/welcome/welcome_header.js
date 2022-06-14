import React from "react";
import styled from "styled-components";
import { MediaButton } from "./Common";

function Header() {
    return (
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
                    <HeaderBtn>
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
}
//헤더

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
            margin: 0;
        }
    }
`;

const HeaderLayout = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
export const HeaderDiv2 = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const HeaderTitle = styled.div`
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
