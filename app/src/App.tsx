import React from 'react';
import logo from './logo.svg';
import './App.css';
import { OrangeBar } from './OrangeBar';
import { DonateBar } from './DonateBar';
import { MainMenu } from './MainMenu';
import { Hero } from './Hero';

function App() {
  return (
    <>
      <OrangeBar/>
    <DonateBar/>
    <MainMenu/>
    <Hero/>
    </>
  );
}

export default App;
