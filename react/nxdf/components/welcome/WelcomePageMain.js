import React, { useState } from "react";
import styled from "styled-components";
import Header from "../component/nxdf_Header";
import Main from "../component/nxdf_Main";
import Grid from "../component/nxdf_Grid";
import Footer from "../component/nxdf_Footer";

/*
 * Replace the elements below with your own.
 *
 * Note: The corresponding styles are in the ./index.styled-components file.
 */
const WelcomePageMain = (props) => {
    const [grid, setgrid] = useState(false);
    const [lang, setLang] = useState("EN");

    /**
     * Redirects to another page generated by replacing the path in the original URL
     * with the given path.
     *
     * @param {(string)} pathname - The path to navigate to.
     * @returns {Function}
     */
    return (
        <Welcome>
            <Header lang={lang} setLang={setLang}></Header>
            <Main lang={lang} grid={grid} setgrid={setgrid}></Main>
            <Grid lang={lang} grid={grid}></Grid>
            <Footer lang={lang} />
        </Welcome>
    );
};

//제일 바깥쪽 레이아웃 잡기
const Welcome = styled.div`
    width: 100%;
    height: 100vh;
`;

export default WelcomePageMain;
