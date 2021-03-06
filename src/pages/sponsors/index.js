import React from "react";
import Layout from "../../components/layout";
import SponsorCard from "../../components/SponsorCard";
import Alternate from "../../components/Alternate";
import Heading from "../../components/Heading";
import { Link } from "../../components/Button";
export default class extends React.Component {
  render() {
    return (
      <Layout>
     
        <Alternate style={{ border: 0 }}>
        <Heading color="alternateHeading" size={2}>
          Interested in sponsoring JavaScript and Friends Conference 2021? 
        </Heading>
        <br></br>         
        <br></br>  
        <Link
          borderColor="alternateHeading"
          backgroundColor="rgba(0,0,0,0)"
          color="alternateHeading"
          href="/callforsponsors"
        >
          Learn More
        </Link>
        </Alternate>
      </Layout>
    );
  }
}
