import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyLink as Link } from "./Link";

import Helmet from "react-helmet";

import Header from "./Header";
import "./default.css";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "../themes";

import { Nav, NavItem } from "./Nav";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.mainBackground || "#FAB"};
  }

  :focus {
    outline: 3px dashed ${props => props.theme.colors.highlight};
  }
`;

const Main = styled.main``;

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
          <title>MagnoliaJS Conference - April 17-18, 2019</title>
        </Helmet>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <Header siteTitle={data.site.siteMetadata.title} Link={Link}>
              <Nav>
                <NavItem>
                  <Link to="speak">🗣️ Speak</Link>
                </NavItem>
                <NavItem>
                  <Link to="sponsor">❤️ Sponsor</Link>
                </NavItem>
                <NavItem>
                  <Link to="volunteer">👌 Volunteer</Link>
                </NavItem>
                <NavItem>
                  <Link to="vision">👀 Vision</Link>
                </NavItem>
                <NavItem>
                  <Link to="codeofconduct">📝 Code of Conduct</Link>
                </NavItem>
              </Nav>
            </Header>
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
