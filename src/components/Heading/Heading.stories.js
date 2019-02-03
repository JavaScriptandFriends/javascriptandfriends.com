import React from "react";
import { storiesOf } from "@storybook/react";
import Heading from "./Heading";

storiesOf("heading", module).add("Basic", () => (
  <Heading color="light" size={2}>
    This is a heading
  </Heading>
));
