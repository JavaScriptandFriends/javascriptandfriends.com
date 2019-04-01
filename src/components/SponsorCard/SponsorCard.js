import React from "react";
import styled from "styled-components";
import { Box } from "rebass";
import Heading from "../Heading/Heading";
import { Link } from "../Button";
import Text from "../Text";

const LocalBox = styled(Box)`
  background-color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 4px solid ${props => props.theme.colors.mainBackground};
`;

const Image = styled.div``;

const ExternalLink = styled.a`
  color: ${props => props.theme.colors.mainBackground} !important;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
`;

const Description = styled.div``;
export default function SponsorCard({
  imageSrc,
  title,
  href,
  level = 3,
  logoWidth: width,
  logoHeight: height,
  description
}) {
  return (
    <LocalBox py={25} px={[10, 100]}>
      <Image>
        <img
          src={imageSrc}
          style={{ width, height, maxWidth: "100%", maxHeight: "100%" }}
          alt=""
        />
      </Image>
      <Description>
        <Text>{description}</Text>
      </Description>
      <Link href={href} target="_blank">Learn more about {title}</Link>
    </LocalBox>
  );
}
