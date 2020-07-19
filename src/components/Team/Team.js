import React, { useState } from "react";
import { Flex } from "@rebass/Grid";
import Modal from "react-modal";
import TeamModal from "./TeamModal";
import styled from "styled-components";
import { Button } from "rebass";
import { Text } from "../Text";
import twitterImage from "../../images/Twitter-Circle.png";
import linkedInImage from "../../images/LinkedIn-Circle.png";

const NameLinks = styled.div`
  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
    justify-content: sapce-around;       
  }
`;
const ImgLink = styled.div`
  @media (max-width: 560px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;    
  }
`;

const truncate = content =>
  content
    .split(" ")
    .slice(0, 25)
    .join(" ") + "...";

function Team({ Image, name, twitter, linkedin, bio }) {
    const [isOpen, setOpen] = useState(false);

return (
    <div
        onClick={x => setOpen(true)}
        style={{
        cursor: "pointer",
        width: 250,
        minWidth: 250,
        minHeight: 250,
        margin: "1rem",
        backgroundColor: "#fff",
        borderRadius: 12,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        boxShadow: "6px 9px 3px rgba(0 ,0,0,0.4)"
        }}
    >
    <Modal
        isOpen={isOpen}
        style={{
          overlay: { background: "rgba(51, 51, 51, 0.71)", overflow: "scroll" },
          content: {
            background: "none",
            border: "none",
            margin: 0,
            padding: 0,
            overflow: "visible"
          }
        }}
        ariaHideApp={false}
      >
        <TeamModal
          name={name}
          setOpen={setOpen}
          twitter={twitter}
          linkedin={linkedin}
          Image={Image}         
          bio={bio}
        />
      </Modal>

      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        style={{ flexWrap: "wrap" }}
      >
       <div style={{ margin: "0.0rem" }}>
          <div style={{ width: "100%" }}>
            <div
              style={{
                borderTopLeftRadius: 12,
                borderTopRightRadius:12,
                overflow: "hidden",
                width: "250px",
                height: "200px",
                // margin: "10px auto",
                boxShadow: "0px 3px 15px rgba(0,0,0,0.2)"
              }}
            >
              <Image />
            </div>
            <NameLinks style={{textAlign:"center"}}>
              <strong>{name}</strong>
              <br />  
              <ImgLink><a
                href={`https://twitter.com/${twitter}`}
                title={`Go to ${name}'s Twitter`}
                target="_blank"
                rel="noopener noreferrer"
                onclick="setOpen(false);"
              > <img src={twitterImage} alt="Twitter - JavaScript and Friends" style={{width: "10%", backgroundColor: "#72b1ff"}}/>
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
              </a>{" "}&nbsp;             
              </ImgLink>                   
            </NameLinks>

          </div>
        </div>
      </Flex>
      
    </div>
  );
}
export default Team;








