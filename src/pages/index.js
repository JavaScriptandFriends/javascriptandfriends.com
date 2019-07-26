import React from "react";
import Layout from "../components/layout";
import theme from "../themes";
import { ThemeProvider } from "styled-components";
import MainBanner from "../components/MainBanner";
import Alternate from "../components/Alternate";
import { Link as ButtonLink } from "../components/Button";
import { GatsbyLink } from "../components/Link";
import { Flex } from "@rebass/grid";
import Heading from "../components/Heading";
import Text from "../components/Text";
import { Link } from "../components/Button";
import styled from "styled-components";
import "../components/root.css";

const TextWrapper = styled.div`
  max-width: 1024px;
`;

const Root = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <MainBanner>
        <Flex flexDirection="row" alignItems="center">        
        <ButtonLink
            href="https://www.eventbrite.com/e/javascript-and-friends-conference-registration-60880128102"
            alignSelf="flex-start"
            mr={40}
            target="_blank" rel="noopener noreferrer"
          >
            BUY TICKETS
          </ButtonLink>
        </Flex>
      </MainBanner>
      <Alternate pb={100}>
        <Heading color="alternateHeading" size={2}>
          Interested in sponsoring?
        </Heading>
        <TextWrapper>
          <Text pt={10} pb={30}>
            Our mission is to bring a diverse group of around 200 JavaScript
            developers and friends to learn new skills and concepts and to
            network and develop new relationships.
          </Text>
          <Text pb={40}>
            Here's your chance to contribute to that mission! We're looking for
            the best companies to partner with us and help to make the First
            Annual JavaScript and Friends Conference a success. And with your
            contribution, it will be!
          </Text>
        </TextWrapper>
        <Link
          borderColor="alternateHeading"
          backgroundColor="rgba(0,0,0,0)"
          color="alternateHeading"
          href="/callforsponsors"
        >
          Learn More
        </Link>
      </Alternate>
    </Layout>
  </ThemeProvider>
);

export default Root;
