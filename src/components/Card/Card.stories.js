import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "./Card";

storiesOf("card", module).add("Basic", () => <Card>This is a card</Card>);
