import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  color: ${props => props.theme.light};
  border: 3px solid ${props => props.theme.light};
  padding: 10px 20px;
  font-size: 20px;
  background-color: ${props => props.theme.mainBackground};
  text-transform: uppercase;
`;

export default Button;
