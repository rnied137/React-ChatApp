import React from "react";
import "./App.css";
import { OrangeBar } from "./OrangeBar";
import { DonateBar } from "./DonateBar";
import { MainMenu } from "./MainMenu";
import { Hero } from "./Hero";
import { Card } from "./Card";

import styled from "styled-components";
import { NeedHelp } from "./NeedHelp";

const GridContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  margin: 2em 15% 0 15%;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  grid-auto-rows: 1fr;
`;

function App() {
  return (
    <>
      <OrangeBar />
      <DonateBar />
      <MainMenu />
      <Hero />
      <GridContainer>
        <Card
          title="EDUCATION FOR SYRIAN CHILD"
          text="Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent."
        />
        <Card
          title="HOME FOR KAMPAR'S CHILD"
          text="Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent."
        />

        <Card
          title="CLEAN WATER FOR SOUTH SUDAN'S"
          text="Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent."
        />
      
      </GridContainer>
      <NeedHelp/>
    </>
  );
}

export default App;
