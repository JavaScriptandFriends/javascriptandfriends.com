import React from "react";
import { Flex, Box } from "@rebass/grid";
import styled from "styled-components";
import Text from "../Text";

const Wrapper = styled(Flex)`
  margin: 0;
`;

const Countdown = ({ date }) => {
  
  return (
    <Wrapper py={24} px={48}>
      <Box width={1}>
        <Flex justifyContent="center">
          <Text color="highlight" my={30}>
            {children}
          </Text>
        </Flex>
      </Box>
    </Wrapper>
  );
} 

export default Countdown;
