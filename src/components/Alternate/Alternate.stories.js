import React from "react";
import { storiesOf } from "@storybook/react";
import Alternate from "./Alternate";
import Heading from "../Heading";
import { Link } from "../Button";
import Text from "../Text";

storiesOf("Alternate", module).add("Basic", () => (
  <Alternate>
    <Heading color="alternateHeading" size={2}>
      Test one two three
    </Heading>
    <Text>
      Adipisicing aliquip quis qui commodo deserunt consequat ut. Non ea minim
      occaecat officia reprehenderit voluptate tempor. Tempor elit fugiat irure
      duis ullamco consequat. Occaecat aute excepteur cupidatat occaecat fugiat
      minim amet ad laboris amet in do nisi duis. Esse ea cillum ea labore et
      deserunt eiusmod occaecat consequat laborum.
    </Text>
    <Link>Click</Link>
  </Alternate>
));
