import React from "react";
import { Flex } from "@rebass/grid";
import styled from "styled-components";
import { Button } from "../Button";
import twitterImage from "../../images/Twitter-Circle.png";
import linkedInImage from "../../images/LinkedIn-Circle.png";
const NameLinks = styled.div`
  @media (max-width: 250px) {
    display:flex;
    flex-direction: column;   
    text-align: center;
    justify-content: center;
  }
`;

const ActionArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;
const Link = styled(Button)`
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
`;

function Speaker({ Image, name, twitter, linkedin, company, title}) {
  return (
    <div      
      style={{
        cursor: "pointer",
        width: 250,
        minWidth: 250,
        minHeight: 150,
        margin: "1rem",
        backgroundColor: "#fff",
        borderRadius: 12,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        boxShadow: "6px 9px 3px rgba(0 ,0,0,0.4)"
      }}
    >
     
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        style={{ padding: "0.5rem", flexWrap: "wrap" }}
      >
        <div style={{ margin: "0.5rem", flex: 2,justifyContent:"center" }}>
          <div style={{ width: "100%" }}>
            <div
              style={{
                borderRadius: "100%",
                overflow: "hidden",
                width: "125px",
                height: "125px",
                margin: "10px auto",
                boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",                               
              }}
            >
              <Image />
            </div>
            <NameLinks style={{textAlign: "center"}}>
              <h4>{name}</h4>             
              <a
                href={`https://twitter.com/${twitter}`}
                title={`Go to ${name}'s Twitter`}
                target="_blank"
                rel="noopener noreferrer"
                onclick="setOpen(false);"
              >
                 <img src={twitterImage} alt="Twitter - JavaScript and Friends" style={{width: "10%", backgroundColor: "#72b1ff"}}/>
              </a>{" "}
              &nbsp;
              <a
                href={`https://www.linkedin.com/in/${linkedin}`}
                title={`Go to ${name}'s LinkedIn`}
                target="_blank"
                rel="noopener noreferrer"
                onclick="setOpen(false);"
              >
                <img src={linkedInImage} alt="Twitter - JavaScript and Friends" style={{width: "10%", backgroundColor: "#72b1ff"}}/>
              </a>
            </NameLinks>
          </div>
        </div>       
      </Flex>      
    </div>
  );
}
export default Speaker;
