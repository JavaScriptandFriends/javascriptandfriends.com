import React from "react";
import { configure, addDecorator } from "@storybook/react";
import theme from "../src/themes";
// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /.stories.js$/);
import { ThemeProvider } from "styled-components";
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const WrapInThemeProvider = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(WrapInThemeProvider);

configure(loadStories, module);
