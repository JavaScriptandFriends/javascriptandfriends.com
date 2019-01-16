import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Card from "../components/card";
import hero_image from "../images/js-and-friends.jpg";

const Root = () => (
  <Layout hideHeading={true}>
    <div className="hero wrapper">
      <figure>
        <img src={hero_image} alt="Js and Friends Information" />
      </figure>
      <section>
        <h1>JavaScript and Friends Conference</h1>
        <p>Columbus, Ohio August 2, 2019</p>
        <Link to="vision">Vision Statement</Link>
      </section>
    </div>
  </Layout>
);

export default Root;
