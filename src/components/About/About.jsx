import React from "react";
import Mission from "./Mission";
import OurStory from "./OurStory";
import CoreBeliefs from "./CoreBeliefs";
import OurTeam from "./OurTeam";
import Accomplishments from "./Accomplishments";
import CallToAction from "./CallToAction";

const About = () => {
  return (
    <div>
      <OurStory />
      <Mission />
      <OurTeam />
      <Accomplishments />
      <CallToAction />
      <CoreBeliefs />
    </div>
  );
};

export default About;
