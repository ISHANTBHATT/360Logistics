import React from "react";
import { Globe } from "./Globe";
import Services from "./Services";
import Card from "./Card";
import CardTest from "./CardTest";
import ServicesGrid from "./ServicesGrid";
import Experience from "./Experience";
import Map from "./Map";
import { Testimonials } from "./Testimonials";

function HomePage() {
  return (
    <div>
      <Globe />
      <Card />
      <ServicesGrid />
      <Experience />
      <Services />
      <Map />
      <Testimonials />
    </div>
  );
}

export default HomePage;
