import React from "react";
import { configure, addDecorator } from "@storybook/react";
import theme from "../src/themes";
import "typeface-roboto";
// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /.stories.js$/);
import { ThemeProvider } from "styled-components";
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const WrapInThemeProvider = storyFn => (
  <div style={{ backgroundColor: theme.colors.mainBackground, padding: 40 }}>
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </div>
);

addDecorator(WrapInThemeProvider);

configure(loadStories, module);
