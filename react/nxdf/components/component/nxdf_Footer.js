import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import styled from "styled-components";
import { CommonH, CommonSpan, CommonTitle } from "../welcome/Common";

const Footer = () => {
    return (
        <FooterLay>
            <FooterLayout>
                <HeaderDiv>
                    <CommonTitle>
                        <img
                            src="/images/NXDFLogo.png"
                            width="20px"
                            height="20px"
                        />
                        <span>NXDF</span>
                    </CommonTitle>
                </HeaderDiv>
                <HeaderDiv2></HeaderDiv2>
            </FooterLayout>
        </FooterLay>
    );
};

//푸터
const FooterLay = styled.div`
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

const HeaderDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
const HeaderDiv2 = styled.div`
    margin: 10px 0px;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export default Footer;
