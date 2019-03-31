import React from "react";
import { storiesOf } from "@storybook/react";
import SponsorCard from "./SponsorCard";

storiesOf("sponsor card", module).add("Basic", () => (
  <>
    <SponsorCard
      imageSrc="https://www.fillmurray.com/400/400"
      title="Sponsor title"
      href="#"
    />

    <SponsorCard
      imageSrc="https://www.fillmurray.com/500/400"
      title="Sponsor title"
      href="#"
    />
  </>
));
