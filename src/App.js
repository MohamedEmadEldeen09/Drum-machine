import { useRef, useState } from 'react';
import Controller from './component/Controller' ;
import Drums from './component/Drums';

//sounds
//Group 1
import heater_1 from "./sounds/Heater-1.mp3";
import heater_2 from "./sounds/Heater-2.mp3";
import heater_3 from "./sounds/Heater-3.mp3";
import heater_4 from "./sounds/Heater-4_1.mp3";
import cev from "./sounds/Cev_H2.mp3";
import dsc from "./sounds/Dsc_Oh.mp3";
import heater_6 from "./sounds/Heater-6.mp3";
import kick from "./sounds/Kick_n_Hat.mp3";
import rp4 from "./sounds/RP4_KICK_1.mp3";
//Group 2
import bld from "./sounds/group2/Bld_H1.mp3";
import brk from "./sounds/group2/Brk_Snr.mp3";
import chord1 from "./sounds/group2/Chord_1.mp3";
import chord2 from "./sounds/group2/Chord_2.mp3";
import chord3 from "./sounds/group2/Chord_3.mp3";
import dry from "./sounds/group2/Dry_Ohh.mp3";
import give from "./sounds/group2/Give_us_a_light.mp3";
import punchy from "./sounds/group2/punchy_kick_1.mp3";
import side from "./sounds/group2/side_stick_1.mp3";

export const soundsGroups = [
  [
    ["Heater 1" ,  heater_1],
    ["Heater 2" ,  heater_2],
    [ "Heater 3" , heater_3],
    ["Heater 4" ,heater_4 ],
    ["Clap" , cev],
    ["Open HH" , dsc],
    ["Clossed HH" , heater_6],
    ["Kick n' Hat" , kick],
    ["Kick" , rp4]
 ],
  [
    ["Chord 1" ,  chord1],
    ["Chord 2" ,chord2],
    ["Chord 3" , chord3],
    [ "Shaker" ,brk ],
    ["Open HH" ,bld ],
    ["Clossed HH" , give],
    ["Punchy Kick" , dry],
    ["Side Stick" , punchy],
    ["Snare" , side]  
 ]
]

function App() {
  let [nameOfSound , setName] = useState(soundsGroups[0])
  let [nameOfGroup , setGroup] = useState("Heater Kit")
  let [nameOfElement , setNameOfElement] = useState('Name Of Sound')
  let [play , setPlay] = useState(true)

  return (
    <div className="container" id="drum-machine">
      <Drums  nameOfSound={nameOfSound}        
      setNameOfElement={setNameOfElement} play={play}/>
      <Controller setName={setName} 
       nameOfGroup={nameOfGroup} 
       setGroup={setGroup} nameOfElement={nameOfElement}
       setNameOfElement={setNameOfElement} setPlay={setPlay}/>     
    </div>
  );
}

export default App;
