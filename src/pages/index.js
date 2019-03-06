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
            href="#"
            alignSelf="flex-start"
            mr={40}
          >
            Submit a talk
          </ButtonLink>
          <GatsbyLink to="speak" color="white">
            Learn more
          </GatsbyLink>
        </Flex>
      </MainBanner>
      <Alternate pb={100}>
        <Heading color="alternateHeading" size={2}>
          Interested in sponsoring?
        </Heading>
        <TextWrapper>
          <Text pt={10} pb={30}>
            MagnoliaJS is Mississippi's <strong>first-ever developer conference</strong>. Our mission is to foster growth and opportunities for developers in the Southeast and be the launching point for greater things for the tech in Mississippi.
          </Text>
          <Text pt={10} pb={30}>
            We are aiming to bring together around 200 web developers and friends to learn new skills and concepts and to network and develop new relationships.
          </Text>
          <Text pb={40}>
            Here's your chance to contribute to that mission! We're looking for the best companies to partner with us and help to make the first-annual MagnoliaJS conference a success.
          </Text>
        </TextWrapper>
        <Link
          borderColor="alternateHeading"
          backgroundColor="rgba(0,0,0,0)"
          color="alternateHeading"
          href="/sponsor"
        >
          Learn More
        </Link>
      </Alternate>
    </Layout>
  </ThemeProvider>
);

export default Root;
