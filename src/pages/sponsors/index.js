import React from "react";
import Layout from "../../components/layout";
import SponsorCard from "../../components/SponsorCard";
import Alternate from "../../components/Alternate";
import Heading from "../../components/Heading";
import improvingLogo from "./improving.png";
import authlogo from "./auth0.png";
import scoutlogo from "./scoutlogo.png";
import cloudinarylogo from "./cloudinary.png";
import daughertylogo from "./daugherty.svg";
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
        <br></br>
        <h2>Friends</h2>  
          <div style={{textAlign:"center"}}>
          <a href="https://improving.com/" target="_blank" rel="noopener noreferrer">
          <img src={improvingLogo} alt="Improving" style={{ width:235, height:80, maxWidth: "100%", maxHeight: "100%" }}/> 
          </a>          
          </div>      
        </Alternate>
      </Layout>
    );
  }
}
