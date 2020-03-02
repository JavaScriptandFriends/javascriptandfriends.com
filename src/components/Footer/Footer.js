import React from "react";
import {Flex, Box} from "@rebass/grid";
import styled from "styled-components";
import Text from "../Text";
import twitter from "../../images/Twitter-Circle.png";
import linkedIn from "../../images/LinkedIn-Circle.png";

const FlexWrapper = styled(Flex)`
    margin: 0;
    color: ${props => props.theme.colors.white};
    justify-content: center;
    align-items: stretch;
    max-height: 50px;
`;

const FirstFlexWrapper = styled(FlexWrapper)`
    margin-top: .5rem;
    margin-bottom: .3rem;

    & img {
        margin-bottom: 0;
        max-height: 50px;
    }
`;

const Footer = () => (
    <footer>
        <FirstFlexWrapper>
            <Box width={1/2} textAlign={["right"]} px={2}>
                <a href={"https://twitter.com/JSFriendsConf"} target="_blank" rel="external">
                    <img src={twitter} alt="Twitter - JavaScript and Friends"/>
                </a>
            </Box>
            <Box width={1/2} textAlign={["left"]} px={2}>
                <a href={"https://www.linkedin.com/company/javascript-and-friends/"} target="_blank" rel="external">
                    <img src={linkedIn} alt="LinkedIn - JavaScript and Friends"/>
                </a>
            </Box>
        </FirstFlexWrapper>
        <FlexWrapper>
            <Box width={1} textAlign={["center"]}>
                <Text fontSize={["15px"]}>Copyright © 2020 JavaScript &amp; Friends.</Text>
            </Box>
        </FlexWrapper>
    </footer>
)

export default Footer;