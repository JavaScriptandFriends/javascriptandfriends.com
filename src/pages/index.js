import React from "react";
import Layout from "../components/layout";
import theme from "../themes";
import { ThemeProvider } from "styled-components";
import MainBanner from "../components/MainBanner";
import { Link as ButtonLink } from "../components/Button";
import { GatsbyLink } from "../components/Link";
import { Flex } from "@rebass/grid";

import "../components/root.css";

const Root = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <MainBanner>
        <Flex flexDirection="row" alignItems="center">
          <ButtonLink
            href="https://sessionize.com/javascript-and-friends-conference/"
            alignSelf="flex-start"
            mr={40}
          >
            Submit a talk
          </ButtonLink>
          <GatsbyLink to="callforspeakers" color="white">
            Learn more
          </GatsbyLink>
        </Flex>
      </MainBanner>
    </Layout>
  </ThemeProvider>
);

export default Root;
