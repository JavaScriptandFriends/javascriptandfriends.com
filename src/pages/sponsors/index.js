import React from "react";
import Layout from "../../components/layout";
import SponsorCard from "../../components/SponsorCard";
import hmbLogo from "./HMB-green-finity.png";
import progressLogo from "./Progress_Kinvey_Primary.png";
import beamDentalLogo from "./beamDental.jpg";
import auth0Logo from "./Autho.png";
import sparkboxLogo from "./sparkboxx.png";
import centroLogo from "./centro.png";
import mapsysLogo from "./mapsys.jpg";
import mongodbLogo from "./mongodb.png";
import leadingedjeLogo from "./LeadingEDJE.png";
import improvingLogo from "./improving.png";
import mozillaLogo from "./mozilla.png";
import Alternate from "../../components/Alternate";
export default class extends React.Component {
  render() {
    return (
      <Layout>
        <Alternate style={{ border: 0 }}>
          <h1>Sponsors</h1>
          <SponsorCard
            imageSrc={mongodbLogo}
            title="MongoDB"
            href="https://www.mongodb.com/"
            logoWidth={330}
            logoHeight={100}
            description={
              <>
                <p>
                MongoDB is the leading modern, general purpose database platform, designed to unleash the power of software and data for developers and the applications they build. Headquartered in New York, MongoDB has more than 14,200 customers in over 100 countries. The MongoDB database platform has been downloaded over 65 million times and there have been more than one million MongoDB University registrations. 
                </p>               
              </>
            }
          />
          <SponsorCard
            imageSrc={hmbLogo}
            title="HMB"
            href="https://hmbnet.com/"
            logoWidth={330}
            logoHeight={100}
            description={
              <>
                <p>
                  Where There’s Business, There's Technology. And Where There’s
                  Technology, There Are Bound To Be Challenges. That’s where we
                  come in. We’re an IT solutions company that solves tough
                  technology challenges so you can get back to business as usual
                  — business better than usual. We win when you win.
                </p>
                <p>
                  We win because of the people we hire and surround ourselves
                  with — and the people we are fortunate to call clients. When
                  we focus on being more interested than interesting, we build
                  trust. When we build trust, our clients succeed. When our
                  clients succeed, we succeed. Technology empowers our clients
                  to do some truly amazing things. And helping them bring their
                  projects to life, well — it energizes us. It’s what gets us
                  out of bed each morning. We come to work knowing we’re part of
                  building sensational technology that matters. This passion is
                  what drives us to succeed. It’s what we’re here to do.
                </p>
              </>
            }
          />
          <SponsorCard
            imageSrc={progressLogo}
            title="Progress Kinvey"
            href=" https://www.progress.com/kinvey"
            logoWidth={330}
            logoHeight={100}
            description={
              <>
                <p>
                Progress (NASDAQ: PRGS) offers the leading platform for developing and deploying strategic business applications. 
                We enable customers and partners to deliver modern, high-impact digital experiences with a fraction of the effort, time and cost. 
                Progress offers a high-productivity app development platform that increases productivity while maintaining developer control, 
                powerful tools for building adaptive user experiences across any type of device or touchpoint,
                machine learning that enables cognitive capabilities, a serverless cloud to deploy modern apps, 
                plus business rules, web content management and leading data connectivity technology. 
                </p>
                <p>
                Over 1,700 independent software vendors, 100,000 enterprise customers and two million developers rely on Progress to power their applications. 
                Learn about Progress at www.progress.com or +1-800-477-6473. 
                </p>
              </>
            }
          />
          <SponsorCard
            imageSrc={beamDentalLogo}
            title="Beam Dental"
            href="https://www.beam.dental."
            logoWidth={330}
            logoHeight={150}
            description={
              <>
                <p>
                Beam Dental was built around the idea that blending technology with traditional insurance policies could bring incredible value to a commoditized employee benefits
                market.
                </p>
                <p>
                Beam Dental is small and medium businesses’ best choice for a differentiated, innovative take on dental and ancillary employee benefits with a
                nationwide network of over 335,000 access points.
                Learn more at www.beam.dental. 
                </p>
              </>
            }
          />
          <SponsorCard
            imageSrc={mapsysLogo}
            title="MAPSYS"
            href="https://www.mapsysinc.com/"
            logoWidth={330}
            logoHeight={150}
            description={
              <>
                <p>
                Headquartered in Columbus, Ohio, MAPSYS, Inc. has been proudly serving the IT industry for over 35 years. As an IT Consulting firm initially specializing in iSeries (IBM i) infrastructure and application development, the company began adding Project Management and Web Development staff in 2005 and presently has over 40 technical staff with skills sets ranging from Web Application Development (Angular 7, Microsoft .Net, Java, PHP), Legacy Application Development (RPG, COBOL), Mobile Application Development (Ionic), Infrastructure Architecture Design, Database Design and Project Management. And by leveraging the latest versions of Angular and Microsoft DevOps on new applications, MAPSYS is able to provide both its clients and technical teams with the best technology solutions available.   
                </p>
                <p>
                MAPSYS...the Difference Makers. 
                </p>
              </>
            }
          />
          <br></br>
          <h2>Friends</h2>
          <a href="https://auth0.com/" target="_blank" rel="noopener noreferrer">
          <img src={auth0Logo} alt="Auth0" style={{ width:100, height:50, maxWidth: "100%", maxHeight: "100%" }}/> 
          </a>
          &nbsp;
          <a href="https://seesparkbox.com/" target="_blank" rel="noopener noreferrer">
          <img src={sparkboxLogo} alt="Sparkbox" style={{ width:120, height:50, maxWidth: "100%", maxHeight: "100%" }}/> 
          </a>
          &nbsp;
          <a href="https://www.centro.net/" target="_blank" rel="noopener noreferrer">
          <img src={centroLogo} alt="Centro" style={{ width:100, height:50, maxWidth: "100%", maxHeight: "100%" }}/> 
          </a>
          &nbsp;
          <a href="http://leadingedje.com/" target="_blank" rel="noopener noreferrer">
          <img src={leadingedjeLogo} alt="Leading EDJE" style={{ width:150, height:50, maxWidth: "100%", maxHeight: "100%" }}/> 
          </a>
          &nbsp;
          <a href="https://improving.com/" target="_blank" rel="noopener noreferrer">
          <img src={improvingLogo} alt="Improving" style={{ width:150, height:50, maxWidth: "100%", maxHeight: "100%" }}/> 
          </a>
          &nbsp;
          <a href="https://www.mozilla.org/en-US/" target="_blank" rel="noopener noreferrer">
          <img src={mozillaLogo} alt="Mozilla" style={{ width:150, height:50, maxWidth: "100%", maxHeight: "100%" }}/> 
          </a>
        </Alternate>
      </Layout>
    );
  }
}
