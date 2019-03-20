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
import Speaker from '../components/Speaker';
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
      <Flex flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center" style={{padding: '2rem', width: '100vw'}}>
        <Speaker />
        <Speaker />
        <Speaker />
        <Speaker />
        <Speaker />
        <Speaker />
        <Speaker />
        <Speaker />
        <Speaker />
        <Speaker />
      </Flex>
    </Layout>
  </ThemeProvider>
);

export default Root;
