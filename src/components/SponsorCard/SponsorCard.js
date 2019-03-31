import React from "react";
import styled from "styled-components";
import { Box } from "rebass";
import Heading from "../Heading/Heading";

const LocalBox = styled(Box)`
  background-color: ${props => props.theme.colors.white};
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 25px;
  align-items: center;
  border: 4px solid ${props => props.theme.colors.mainBackground};
`;

const Image = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
`;

const ExternalLink = styled.a`
  color: ${props => props.theme.colors.mainBackground} !important;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
`;

export default function SponsorCard({ imageSrc, title, href, level = 3 }) {
  return (
    <LocalBox>
      <Image>
        <img
          src={imageSrc}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          alt=""
        />
      </Image>
      <Heading size={level}>
        <ExternalLink href={href} style={{ textDecoration: "none" }}>
          {title}
        </ExternalLink>
      </Heading>
    </LocalBox>
  );
}
