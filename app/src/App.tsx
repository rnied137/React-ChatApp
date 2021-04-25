import React from 'react';
import logo from './logo.svg';
import './App.css';
import { OrangeBar } from './OrangeBar';
import { DonateBar } from './DonateBar';
import { MainMenu } from './MainMenu';
import { Hero } from './Hero';

function App() {
  return (
    <div className="App">
      <OrangeBar/>
    <DonateBar/>
    <MainMenu/>
    <Hero/>
    </div>
  );
}

export default App;
