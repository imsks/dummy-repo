import React from "react";

import Slider from "../sections/Slider";
import Services from "../sections/Services";
import About from "../sections/About";
import Portfolio from "../sections/Portfolio";
import HowWeWork from "../sections/HowWeWork";
import Team from "../sections/Team";
import Testimonial from "../sections/Testimonial";
import GetInTouch from "../sections/GetInTouch";

const LandingPage = () => {
  return (
    <main className="landingpage">
      <Slider />
      <Services />
      <About />
      <Portfolio />
      <HowWeWork />
      <Team />
      <Testimonial />
      <GetInTouch />
    </main>
  );
};

export default LandingPage;
