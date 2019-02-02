import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";

import Header from "./Header";
import "./default.css";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "../themes";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.mainBackground || "#FAB"};
  }
`;

const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const Layout = ({ children, hideHeading = false }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <title>JavaScript and Friends Conference</title>
        </Helmet>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            {!hideHeading && (
              <Header siteTitle={data.site.siteMetadata.title} />
            )}
            <Main>{children}</Main>
          </>
        </ThemeProvider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
