import React from "react";
import { storiesOf } from "@storybook/react";
import Text from "./Text";

storiesOf("Text", module).add("Basic", () => (
  <Text color="light" size={3}>
    This is some text
  </Text>
));
