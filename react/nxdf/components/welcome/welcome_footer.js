import React from "react";
import styled from "styled-components";
import { HeaderDiv, HeaderDiv2, HeaderTitle } from "./Header";

function Footer() {
    return (
        <FirstFooterLayout>
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
        </FirstFooterLayout>
    );
}

const FirstFooterLayout = styled.div`
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

export default Footer;
