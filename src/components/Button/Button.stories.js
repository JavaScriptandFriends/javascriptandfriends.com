import React from "react";
import { storiesOf } from "@storybook/react";
import { Button, Link } from "./Button";

storiesOf("Button", module)
  .add("Button", () => <Button>More info</Button>)
  .add("Link", () => <Link>More info</Link>);
