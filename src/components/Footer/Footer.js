import React from "react";
import {Flex, Box} from "@rebass/grid";
import styled from "styled-components";
import Text from "../Text";
import twitter from "../../images/Twitter-Circle.png";
import linkedIn from "../../images/LinkedIn-Circle.png";
import youTube from "../../images/YouTube-Circle.png";
import twitch from "../../images/Twitch-Circle.png";

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

const CopyrightText = styled(Text)`
    font-size: 15px;
    color: rgba(255,255,255,.3);
`;

const Footer = () => (
    <footer>
        <FirstFlexWrapper>
            <Box px={2}>
                <a href={"https://twitter.com/JSFriendsConf"} target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="Twitter - JavaScript and Friends"/>
                </a>
            </Box>
            <Box px={2}>
                <a href={"https://www.linkedin.com/company/javascript-and-friends/"} target="_blank" rel="noopener noreferrer">
                    <img src={linkedIn} alt="LinkedIn - JavaScript and Friends"/>
                </a>
            </Box>
            <Box px={2}>
                <a href={"https://www.youtube.com/channel/UCz4LNOw6U7ncyOSx73u_YMQ"} target="_blank" rel="noopener noreferrer">
                    <img src={youTube} alt="YouTube - JavaScript and Friends"/>
                </a>
            </Box>
            <Box px={2}>
                <a href={"https://www.twitch.tv/javascriptandfriends"} target="_blank" rel="noopener noreferrer">
                    <img src={twitch} alt="Twitch - JavaScript and Friends"/>
                </a>
            </Box>
        </FirstFlexWrapper>
        <FlexWrapper>
            <Box width={1} textAlign={["center"]}>
                <CopyrightText>Copyright © 2020 JavaScript &amp; Friends.</CopyrightText>
            </Box>
        </FlexWrapper>
    </footer>
)
export default Footer;