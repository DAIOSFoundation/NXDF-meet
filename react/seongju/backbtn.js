import { useMutation } from "@apollo/client";
import React from "react";
import { dummy } from "./dummy";
import { EXIT_QUERY, LOG_EXIT_QUERY } from "./mutation";

function Backbtn(value) {
    const { name, location } = value;
    const hostNameEng = location.substr(1);
    const hostNameKr = dummy
        .filter((a) => a.roomNameEng === hostNameEng)
        .map((data) => data.roomNamekr)[0];
    const [backdata] = useMutation(EXIT_QUERY);
    const [logbackdata] = useMutation(LOG_EXIT_QUERY);

    const back = () => {
        logbackdata({
            variables: {
                participantNameKr: name,
                hostNameEng,
                hostNameKr,
            },
        });
        backdata({
            variables: {
                participantNameKr: name,
            },
        });

        history.back();
    };
    return (
        <div id="back_btn_layout">
            <div id="back_btn" onClick={back}>
                <span>돌아가기</span>
            </div>
        </div>
    );
}

export default Backbtn;
