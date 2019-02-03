import PropTypes from "prop-types";
import React from "react";
import Heading from "../Heading";
import { Flex, Box } from "@rebass/grid";
import styled from "styled-components";

const Wrapper = styled(Flex)`
  margin: 0;
  border-bottom: 1px solid ${props => props.theme.colors.headingBorder};
`;

const Header = ({ siteTitle, children, Link }) => (
  <header>
    <Wrapper justifyContent="flex-start" py={24} px={48}>
      <Box width={1 / 2}>
        <Heading
          style={{ margin: 0 }}
          as="strong"
          fontSize={32}
          color="mainLight"
        >
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none"
            }}
          >
            {siteTitle}
          </Link>
        </Heading>
      </Box>
      <Box width={1 / 2}>
        <Flex justifyContent="flex-end" alignItems="center">
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
