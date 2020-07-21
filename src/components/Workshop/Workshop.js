import React from "react";
import { Flex } from "@rebass/grid";
import styled from "styled-components";
import { Button } from "../Button";
import twitterImage from "../../images/Twitter-Circle.png";
import linkedInImage from "../../images/LinkedIn-Circle.png";
import Text from "../../components/Text";

const NameLinks = styled.div`
  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
    align-items: center;
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


function Workshop({ Image, name, talk, twitter, linkedin, timing }) {

  return (
    <div      
      style={{
        cursor: "pointer",
        width: 900,
        minWidth: 300,
        minHeight: 280,
        margin: "1rem",
        backgroundColor: "#fff",        
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
        <div
          style={{ 
            flex:1,           
            margin: "0.5rem",
            flexDirection: "column",
            alignItems: "space-between",
            justifyContent: "space-between"
          }}
        >
          <h2 style={{ fontSize: "1rem" }}>{talk.title}</h2>          
          <Text><strong style={{ fontSize: ".7rem" }}>Time:</strong><strong style={{ fontSize: ".7rem" }}>{timing}</strong></Text>
          <br></br>
           {talk.description && (
            <strong style={{ fontSize: ".7rem" }}>{talk.description}</strong>
          )}
          
        </div>
        <div style={{ flex:"0.5 30px" }}>
          <div style={{ flex: "1 30px" }}>
            <div
              style={{
                borderRadius: "100%",
                overflow: "hidden",
                width: "125px",
                height: "125px",
                margin: "10px auto",
                boxShadow: "0px 3px 15px rgba(0,0,0,0.2)"
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
export default Workshop;
