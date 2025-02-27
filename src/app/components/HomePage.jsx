import React from "react";
import { Globe } from "./Globe";
import Services from "./Services";
import Card from "./Card";
import CardTest from "./CardTest";
import ServicesGrid from "./ServicesGrid";
import Experience from "./Experience";
import Map from "./Map";
import { Testimonials } from "./Testimonials";
import Success from "./Success";
import Benefits from "./Benefits";
import Affiliations from "./Affiliations";
import CompanyLogosCircle from "./GroupCompanies";

function HomePage() {
  return (
    <div>
      <Globe />
      <Card />
      <ServicesGrid />
      <Affiliations />
      {/* <Experience /> */}
      <CompanyLogosCircle />
      {/* <Services /> */}
      <Success />
      <Benefits />
      <Map />

      {/* <Testimonials /> */}
    </div>
  );
}

export default HomePage;
