import React from "react";
import Layout from "../../components/layout";
import SponsorCard from "../../components/SponsorCard";
import leadingedjeLogo from "./LeadingEDJE.png";
import improvingLogo from "./improving.png";
import manningBooks from "./Manning.svg";
import mysqlLogo from "./logo-mysql.png";
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
            imageSrc={leadingedjeLogo}
            title="Leading EDJE"
            href="https://leadingedje.com/"
            logoWidth={340}
            logoHeight={60}
            description={
              <>
                <p>
                At Leading EDJE, we like to have fun, collaborate, and work on new and interesting technical solutions. With a focus on providing a great culture, where the technically driven can excel, our team members enjoy the benefits of collaborating with smart colleagues who embrace challenges and are passionate about what they do.
                </p>
                <p>
                We are quality focused and work hard to get the job done right. Our team members are forward thinking, continuously strive for self-improvement, and keep up to date with the latest technology and trends in the industry.
                Not only are EDJERs honest and trustworthy, we are truthful with ourselves as well. We understand our strengths and opportunities for improvement. We are patient with respect to working with others and in ensuring we focus on quality and do the right thing, not the “right now thing”
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
