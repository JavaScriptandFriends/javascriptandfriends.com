import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyLink as Link } from "./Link";

import Helmet from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";
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
          <title>JavaScript and Friends Conference</title>
        </Helmet>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <Header siteTitle={data.site.siteMetadata.title} Link={Link}>
              <Nav>
                <NavItem>
                  <Link to="/vision">Vision</Link>
                </NavItem>               
                <NavItem>
                  <Link to="/codeofconduct">COC</Link>
                </NavItem>  
                <NavItem>
                  <Link to="/speakers">Speakers</Link>
                </NavItem>                         
                <NavItem>
                  <Link to="/sponsors">Sponsors</Link>
                </NavItem>
                <NavItem>
                  <Link to="/workshops">Workshops</Link>
                </NavItem>     
                <NavItem>
                  <Link to="/schedule">Schedule</Link>
                </NavItem>           
                <NavItem>
                  <Link to="/communityevents">Events</Link>
                </NavItem>               
              </Nav>
            </Header>
            <Main>{children}</Main> 
            <Footer>
            </Footer>           
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
