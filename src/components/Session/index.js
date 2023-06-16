import React from "react";
import { Flex } from "@rebass/grid";
import styled from "styled-components";
import { Button } from "../Button";

const NameLinks = styled.div`
  @media (max-width: 450px) {
    display:flex;
    flex-direction: column;   
    text-align: center;
    justify-content: center;
  }
`;

function Session({title, description, speaker, track}) {
    return (
        <div style={{
            cursor: "pointer",
            width: 400,
            minWidth: 400,
            minHeight: 200,
            margin: "1rem",
            backgroundColor: "#fff",
            borderRadius: 12,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            boxShadow: "6px 9px 3px rgba(0 ,0,0,0.4)"
        }}>
            <NameLinks style={{textAlign: "center"}}>
                <h3>{title}</h3>
                <h4>{speaker}</h4>
                <h5>{track}</h5>
                <p>{description}</p>
            </NameLinks>
        </div>
    )
}
export default Session;