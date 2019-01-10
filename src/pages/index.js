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
        <div>
          <Link to="vision">Vision Statement</Link>
        </div>
      </div>
    </div>
  </Layout>
);

export default Root;
