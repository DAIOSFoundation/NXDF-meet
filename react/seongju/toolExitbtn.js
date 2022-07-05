import { useMutation } from "@apollo/client";
import React from "react";
import { dummy } from "./dummy";
import { EXIT_QUERY, LOG_EXIT_QUERY } from "./mutation";

function Exitbtn({ children }) {
    const [backdata] = useMutation(EXIT_QUERY);
    const [logbackdata] = useMutation(LOG_EXIT_QUERY);
    const hostNameEng = window.location.pathname.substr(1);
    const hostNameKr = dummy
        .filter((a) => a.roomNameEng === hostNameEng)
        .map((data) => data.roomNamekr)[0];

    const back = () => {
        backdata({
            variables: {
                participantNameKr: children.props.name,
            },
        });
        logbackdata({
            variables: {
                participantNameKr: name,
                hostNameEng,
                hostNameKr,
            },
        });
    };
    return (
        <div id="ExitBtn" onClick={back}>
            {children}
        </div>
    );
}

export default Exitbtn;
