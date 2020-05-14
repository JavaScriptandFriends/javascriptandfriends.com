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
            Workshop Day &nbsp;&nbsp;| &nbsp;Aug-13-2020 - Virtual                  
          </Text>
          <Text color="highlight" my={10}>
            Conference Day | &nbsp;Aug-14-2020 - Virtual<br/>                   
          </Text>           
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
