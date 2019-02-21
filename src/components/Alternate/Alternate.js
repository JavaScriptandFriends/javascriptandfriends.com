import React from "react";
import styled from "styled-components";
import { Box } from "rebass";
import { space, width, fontSize, color } from "styled-system";

const AlternateWrapper = styled(Box)`
  background-color: ${props => props.theme.colors.alternateBackground};
  border-top: 3px solid ${props => props.theme.colors.alternateBorder};
  border-bottom: 3px solid ${props => props.theme.colors.alternateBorder};
  padding: 3rem;

  & a {
    border-color: ${props => props.theme.colors.alternateHeading};
    color: ${props => props.theme.colors.alternateHeading};
    background-color: ${props => props.theme.colors.transparent};
  }
`;

export default AlternateWrapper;
