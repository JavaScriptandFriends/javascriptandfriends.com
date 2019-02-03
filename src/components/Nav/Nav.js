import React, { Component } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
`;

export const NavItem = styled.li`
  margin-right: 20px;

  & a,
  & a:hover,
  & a:link,
  & a:visited {
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    opacity: 0.8;
    text-transform: uppercase;
    font-size: 16px;
  }
`;

export const Nav = ({ children }) => (
  <nav>
    <List>{children}</List>
  </nav>
);
