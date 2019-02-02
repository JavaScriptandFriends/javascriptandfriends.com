import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import theme from "../themes";
import { ThemeProvider } from "styled-components";

import "../components/root.css";

const Root = () => (
  <ThemeProvider theme={theme}>
    <Layout hideHeading={true}>
      <div className="root">
        <h1>JavaScript and Friends Conference</h1>
        <div className="infoRow">
          <div>Columbus, Ohio</div>
          <div>August 2, 2019</div>
        </div>
        <br />
        <br />
        <div className="infoRow">
          <div>
            <Link to="vision">Vision Statement</Link>
          </div>
          <div>
            <Link to="callforspeakers">Call for Speakers</Link>
          </div>
          <div>
            <Link to="codeofconduct">Code of Conduct</Link>
          </div>
        </div>
      </div>
    </Layout>
  </ThemeProvider>
);

export default Root;
