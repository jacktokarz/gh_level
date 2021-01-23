import React, { useState } from 'react';

import './App.css';

const App = () => {

  const [firstLevel, setFirstLevel] = useState(0);
  const [secondLevel, setSecondLevel] = useState(0);
  const [thirdLevel, setThirdLevel] = useState(0);
  const [fourthLevel, setFourthLevel] = useState(0);

  const options = [
    {value: 0, label: 'First Player Level'},
    {value: 1, label: '1'},
    {value: 2, label: '2'},
    {value: 3, label: '3'},
    {value: 4, label: '4'},
    {value: 5, label: '5'},
    {value: 6, label: '6'},
    {value: 7, label: '7'},
    {value: 8, label: '8'},
    {value: 9, label: '9'}
  ];
  const active = [firstLevel, secondLevel, thirdLevel, fourthLevel].filter(val => val>0);
  console.log("active is "+active.length);
  const scLevel = (active.reduce((a, b) => parseInt(a) + parseInt(b), 0) / active.length) /2;

  const LevelSelect = ({cardinal, level, set}) => {
    return (
      <div style={{margin: "12px"}}>
        <div style={{padding: "4px", fontSize: "80%"}}>{cardinal} Player</div>
        <select
          style={{ width: '50px', height: '40px', fontSize: '24px' }}
          onChange = {(event) => {set(event.target.value)}}
          options = {options}
          value = {level}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/780290/extras/20190514-gloomhaven-logoanimated.gif?t=1608655526"
        style={{top: "8px", display: "block", position: "absolute"}}
        />
        <p>
          Select The Players' Levels:
        </p>
        <div style={{display:"inline-flex"}}>
          <LevelSelect cardinal="First" level = {firstLevel} set = {setFirstLevel} />
          <LevelSelect cardinal="Second" level = {secondLevel} set = {setSecondLevel} />
          <LevelSelect cardinal="Third" level = {thirdLevel} set = {setThirdLevel} />
          <LevelSelect cardinal="Fourth" level = {fourthLevel} set = {setFourthLevel} />
        </div>
        <p>
          Scenario Level: <span style={{display: scLevel>0 ? "inline":"none", fontSize: "110%"}}>{Math.ceil(scLevel)}</span>
        </p>
        <span style={{display: scLevel>0 ? "inherit":"none", fontSize: "16px", color: "grey", marginTop: "-16px"}}>raw: {scLevel}</span>

      </header>
    </div>
  );
}

export default App;
