import React from "react";
import Layout from "../../components/layout";
import SponsorCard from "../../components/SponsorCard";
import improvingLogo from "./improving.png";
import manningBooks from "./Manning.svg";
import mysqlLogo from "./logo-mysql.png";
import wecancodeitlogo from "./WeCanCodeIT.png";
import Alternate from "../../components/Alternate";
import Heading from "../../components/Heading";
import { Link } from "../../components/Button";
export default class extends React.Component {
  render() {
    return (
      <Layout>
     
        <Alternate style={{ border: 0 }}>
        <Heading color="alternateHeading" size={2}>
          Interested in sponsoring JavaScript and Friends Conference 2020?  <Link
          borderColor="alternateHeading"
          backgroundColor="rgba(0,0,0,0)"
          color="alternateHeading"
          href="/callforsponsors"
        >
          Learn More
        </Link>
        </Heading>
        <br></br>
          <h1>2020 Sponsors</h1>  
          <SponsorCard
            imageSrc={wecancodeitlogo}
            title="We Can Code IT"
            href="https://wecancodeit.org"
            logoWidth={280}
            logoHeight={60}
            description={
              <>
                <p>
                We are committed to making people comfortable with the process of learning
technology and software development so that all populations can be included in the tech
community. Through innovative teaching methods that leverage in-class and hands-on
learning, we bridge the knowledge gap to produce talented and diverse tech
professionals.
                </p>
                <p>
                We take pride in delivering engaging, personalized, and immersive experiences to bring
your strengths to the forefront. Our innovative approach to technology education has
given our students the confidence they need to know they can succeed as software
developers, web developers, programmers, and analysts. We believe your motivation to
learn is more valuable than your previous knowledge. It’s our job to help you learn, your
job to give it your all, and given our mutual goal of your success, it’s our combined job to
bring out the best software professional in you.
                </p>                
              </>
            }
          />       
          <SponsorCard
            imageSrc={mysqlLogo}
            title="MySQL"
            href="https://www.mysql.com"
            logoWidth={170}
            logoHeight={115}
            description={
              <>
                <p>
                MySQL is the world's most popular OS database. With its proven performance, reliability and ease-of-use, MySQL has become the leading db choice for web-based applications, used by high profile web properties including Facebook, Twitter, YouTube, Yahoo! and many more. 
Additionally, it is an extremely popular choice as embedded database, distributed by over 3,000 ISVs & OEMs.To organizations in need of an open source, ACID-compliant transactional database delivering real-time in-memory performance and 99.999 percent availability, Oracle offers MySQL Cluster. 
                </p>
                <p>
                MySQL Enterprise Edition is a commercial offering comprised of the MySQL database with security, encryption, auditing, high availability and scalability extensions, online backup, monitoring, management, and visual database design and SQL development tools. 
MySQL Enterprise Edition is backed by Oracle Premier support for organizations delivering highly available, business critical applications and services. 
                </p>
                <p>
                Oracle MySQL Cloud Service delivers a secure, cost-effective and enterprise-grade MySQL database service. Built on MySQL Enterprise Edition and powered by the Oracle Cloud, it provides a simple, automated, integrated and enterprise ready MySQL cloud service, enabling organizations to increase business agility and reduce costs.
Oracle drives MySQL innovation, constantly improving MySQL solutions and delivering new capabilities to power next generation web, cloud, mobile and embedded applications.
                </p>                
              </>
            }
          />
          
          <br></br>
          <h2>Friends</h2>        
          <a href="https://www.manning.com" target="_blank" rel="noopener noreferrer">
          <img src={manningBooks} alt="ManningBooks" style={{ width:235, height:40, maxWidth: "100%", maxHeight: "100%" }}/> 
          </a>
        </Alternate>
      </Layout>
    );
  }
}
