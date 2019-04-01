import React from "react";
import Layout from "../../components/layout";
import SponsorCard from "../../components/SponsorCard";
import hmbLogo from "./HMB-green-finity.png";
import Alternate from "../../components/Alternate";
export default class extends React.Component {
  render() {
    return (
      <Layout>
        <Alternate style={{ border: 0 }}>
          <h1>Sponsors</h1>
          <SponsorCard
            imageSrc={hmbLogo}
            title="HMB"
            href="https://hmbnet.com/"
            logoWidth={330}
            logoHeight={206}
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
        </Alternate>
      </Layout>
    );
  }
}
