import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Card from "../components/card";
import "../components/root.css";

const Root = () => (
  <Layout hideHeading={true}>
    <div className="root">
      <h1>JavaScript and Friends Conference</h1>
      <div className="infoRow">     
        <div>Columbus, Ohio</div>
        <div>August 2, 2019</div>
      </div>
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
);

export default Root;
