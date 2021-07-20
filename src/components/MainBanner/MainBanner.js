import React, { Component } from "react";
import styled from "styled-components";
import mainBannerSrc from "./main_banner.jpg";
import { Flex, Box } from "@rebass/grid";
import Heading from "../Heading";
import Text from "../Text";
import { GatsbyLink as Link } from "../Link";
const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

function MainBanner({ children }) {
  return (
    <Flex
      flexDirection={["column", "row-reverse"]}
      my={[48, 0]}
      alignItems="center"
    >
      <Box
        width={[1, 1 / 2]}
        alignSelf={["flex-start", "center"]}
        justifyContent={["flex-start", "center"]}
        px={30}
      >
        <Flex justifyContent="center" flexDirection="column">
          <Heading size={1} color="light" my={0} fontSize={6}>
            JavaScript &amp; Friends Conference
          </Heading> 
          <Text color="highlight" my={10}>                         
            Workshop Day   | &nbsp;Aug-19-2021 - Virtual                  
          </Text>
          <Text color="highlight" my={10}>
            Conference Day | &nbsp;Aug-20-2021 - Quest Conference Center, Columbus, Ohio<br/>                   
          </Text> 
          <Link
          borderColor="alternateHeading"
          backgroundColor="rgba(0,0,0,0)"         
          to="https://www.eventbrite.com/e/javascript-and-friends-conference-2021-tickets-163395816285"
          color="highlight">
          Registrations Open Now
          </Link>                      
          {children}
        </Flex>
      </Box>
      <Box width={[1, 1 / 2]}>
        <Image src={mainBannerSrc} alt="" />
      </Box>
    </Flex>
  );
}

export default MainBanner;
