import PropTypes from "prop-types";
import React from "react";
import Heading from "../Heading";
import { Flex, Box } from "@rebass/grid";
import styled from "styled-components";
import Logo from "../Logo";

const Wrapper = styled(Flex)`
  margin: 0;
  border-bottom: 1px solid ${props => props.theme.colors.headingBorder};
  background-color: ${props => props.theme.colors.headerBackground};

  & a {
    color: ${props => props.theme.colors.mainBackground};
  }
`;

const Header = ({ siteTitle, children, Link }) => (
  <header>
    <Wrapper
      justifyContent={["flex-start"]}
      py={24}
      px={48}
      flexDirection={["column", "row"]}
    >
      <Box width={[1, 1 / 2]}>
        <Heading
          style={{ margin: 0 }}
          as="strong"
          fontSize={32}
          color="mainLight"
        >
          <Link
            to="/"
            style={{
              textDecoration: "none"
            }}
          >
            <Logo />
          </Link>
        </Heading>
      </Box>
      <Box width={[1, 1 / 2]}>
        <Flex
          justifyContent={["flex-start", "flex-end"]}
          alignItems={["flex-end", "center"]}
        >
          {children}
        </Flex>
      </Box>
    </Wrapper>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ""
};

export default Header;
