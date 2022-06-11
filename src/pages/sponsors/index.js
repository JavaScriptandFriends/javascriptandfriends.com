import React from "react";
import Layout from "../../components/layout";
import SponsorCard from "../../components/SponsorCard";
import Alternate from "../../components/Alternate";
import Heading from "../../components/Heading";
import improvingLogo from "./improving.png";
import mysqlLogo from "./logo-mysql.png";
import authlogo from "./auth0.png";
import scoutlogo from "./scoutlogo.png";
import cloudinarylogo from "./cloudinary.png";
import daughertylogo from "./Daugherty.svg";
import leadingedjelogo from "./Leading_Edge_Logo.jpg";
import progresslogo from "./ProgressKendoUI.png";
import comresourcelogo from "./comresourcelogo.jpg";
import { Link } from "../../components/Button";
import { Flex } from "@rebass/grid"; 
export default class extends React.Component {
  render() {
    return (
      <Layout>
     
        <Alternate style={{ border: 0 }}>
        <Heading color="alternateHeading" size={2}>
          Interested in sponsoring JavaScript and Friends Conference 2022? 
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
        <br></br>
        <br></br>
        <SponsorCard
            imageSrc={authlogo}
            title="auth0"
            href="https://a0.to/jsandfriends21"
            logoWidth={200}            
            description={
              <>
                <p>
                Auth0 is an easy to implement, adaptable authentication and authorization platform. Whether you’re a developer looking to innovate or a security professional looking to mitigate, we make identity work for everyone.  
Basically, we make your login box awesome.
                </p>
                             
              </>
            }
          />
          <SponsorCard
            imageSrc={progresslogo}
            title="Progress"
            href="https://www.telerik.com/kendo-ui"
            logoWidth={200}            
            description={
              <>
                <p>
                Progress – Telerik, Kendo UI, Fiddler and more! We’re Progress. We make software that developers love. We’ve heard that you’re a big fan of UI components, which is great, because we are too. In fact, we make all the tools developers need to build and test high-performance modern apps with outstanding UI. You can learn all about our developer tools by visiting www.telerik.com. And if you want to hang out sometime, you can find us on twitch throughout the week at <a href="https://twitch.tv/CodeItLive" target="_blank" rel="noopener noreferrer">twitch.tv/CodeItLive</a> talking about all things .NET, JavaScript, testing and debugging! Happy Coding!
                </p>
                             
              </>
            }
          />         
          <SponsorCard
            imageSrc={cloudinarylogo}
            title="Cloudinary"
            href="https://cloudinary.rocks/eqn"
            logoWidth={200}            
            description={
              <>
                <p>
                Cloudinary provides developers with powerful media API to upload, store, manage, optimize, transform and deliver images and videos. Developers utilize and easily integrate Cloudinary’s media experience platform via SDKs, widgets, add-ons into web and mobile apps built using all popular tech stacks. Cloudinary enables developers to deliver dynamic, high-performance, personalized media experiences on any device. <a href="https://discord.gg/MediaDevs" target="_blank" rel="noopener noreferrer">Join the community of media developers</a> 
                </p>                             
              </>
            }
          />
                   
           <SponsorCard
            imageSrc={scoutlogo}
            title="Scout APM"
            href="https://ter.li/qt1k5b"
            logoWidth={200}            
            description={
              <>
                <p>
                Scout APM is leading-edge application performance monitoring designed to help Javascript developers quickly find and fix performance issues without having to deal with the headache or overhead of enterprise-platform feature bloat. With a developer-centric UI and tracing logic ties bottlenecks to source code, you can quickly pinpoint and resolve performance abnormalities like N+1 queries, slow database queries, memory bloat, and more. Scout's real-time alerting and weekly digest emails let you rest easy knowing Scout's on watch and resolving performance issues before your customers ever see them. See for yourself why developers worldwide call Scout their best friend ﻿and try our APM free for 14-days, no credit card needed! 
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
               MySQL is the World’s Most Popular Open Source Database. It powers the most innovative companies including Facebook, Booking, Uber, and Tesla. It is available on-premises and as the MySQL Database Service on Oracle Cloud. For developers, it’s an easy to use, reliable and high-performance database with NoSQL and SQL support. SaaS, ecommerce, financial, telecom, and Fortune 1000 companies rely on the MySQL Enterprise edition advanced security features to protect the privacy of information, prevent data breaches and help meet regulatory requirements such as GDPR, PCI, HIPAA. MySQL High Availability has native HA, fully integrated into the MySQL Server for 99.99% uptime. 
                </p>                            
              </>
            }
          /> 
           <SponsorCard
            imageSrc={daughertylogo}
            title="Daugherty Business Solutions"
            href="http://careers.daugherty.com/"
            logoWidth={200}            
            description={
              <>
                <p>
                For over 35 years, Daugherty has been committed to driving innovation, growth and customer satisfaction across the nation while making a positive difference in the community. With software engineering, data analytics, business advisory services, and technology and delivery leadership, Daugherty delivers significant business results quickly and effectively. Leveraging proprietary tools, techniques, and virtual and regional development centers, Daugherty is a preferred strategic advisor and partner for the Fortune 500, helping customers achieve better and more predictable outcomes for mission-critical initiatives.
                </p>                             
              </>
            }
          />
        <SponsorCard
            imageSrc={comresourcelogo}
            title="ComResource"
            href="https://comresource.com/"
            logoWidth={200}            
            description={
              <>
                <p>
                ComResource is a technology solutions provider that provides highly skilled people and innovative technology to support and enhance critical business initiatives. Whether the need is Project Management, Full-Stack Development, Automation, Data Analytics or Business Intelligence, our team is uniquely equipped to drive winning solutions that achieve our clients’ business goals.
                </p> 
                <p>                
Our people and our culture are our greatest assets and the reason why ComResource has been named a "Best Place to Work" 7 times over the last decade. Talk to a recruiter today to find out how to join our team.
                </p>                            
              </>
            }
          />
           <SponsorCard
            imageSrc={leadingedjelogo}
            title="Leading EDJE"
            href="https://www.leadingedje.com/"
            logoWidth={200}            
            description={
              <>
                <p>
                At Leading EDJE, we like to have fun, collaborate, and work on new and interesting technical solutions. With a focus on providing a great culture, where the technically driven can excel, our team members enjoy the benefits of collaborating with smart colleagues who embrace challenges and are passionate about what they do.
We are quality-focused and work hard to get the job done right. Our team members are forward-thinking, continuously strive for self-improvement, and keep up to date with the latest technology and trends in the industry.
If you are interested in joining a fun team with a focus on continuous learning and growth, come visit us at our booth.
                </p>                             
              </>
            }
          />
        <br></br>
        <h2>Friends</h2>
        
        <Flex flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center" style={{ padding: "2rem", width: "" }}>
  
          <div style={{justifyContent:"center" }}>
          <a href="https://improving.com/" target="_blank" rel="noopener noreferrer">                 
          <img src={improvingLogo} alt="Improving" style={{ width:235, height:80, maxWidth: "100%", maxHeight: "100%" }}/> 
          </a>    
          </div>     
                  
        </Flex>  
        </Alternate>
      </Layout>
    );
  }
}
