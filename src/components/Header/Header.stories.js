import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "./Header";
import { Link } from "../Link/Link";
import { Nav, NavItem } from "../Nav";

storiesOf("Header", module).add("Basic", () => (
  <Header siteTitle="MagnoliaJS Conference" Link={Link}>
    <Nav>
      <NavItem>
        <Link to="#">First</Link>
      </NavItem>
      <NavItem>
        <Link to="#">Second</Link>
      </NavItem>
    </Nav>
  </Header>
));
