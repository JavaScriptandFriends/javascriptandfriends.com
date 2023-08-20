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
import northwoodslogo from "./NorthwoodsLogo.png";
import { Link } from "../../components/Button";
import { Flex } from "@rebass/grid"; 
export default class extends React.Component {
  render() {
    return (
      <Layout>
     
        <Alternate style={{ border: 0 }}>       
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
          <br></br>
        
        </Alternate>
      </Layout>
    );
  }
}
