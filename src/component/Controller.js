import React, { useEffect } from 'react'
import { soundsGroups } from '../App'

function Controller({nameOfElement,nameOfGroup,
  setNameOfElement,setGroup,setName , setPlay}) {

  let changeInner = (e)=>{    
    if(e.target.id == 'for-p'){     
      let power = document.getElementById('power') 
      if(power.style.float == 'right'){
        setPlay(false)
        power.style.float = 'left'
        power.style.backgroundColor = 'red'
      }
      else if(power.style.float = 'left'){
        setPlay(true)
        power.style.float = 'right'
        power.style.backgroundColor = 'blue'   
      }       
    }

   if(e.target.id == 'for-b'){     
      let bank = document.getElementById('bank')    
      if(bank.style.float == 'right') bank.style.float = 'left'
      else if(bank.style.float = 'left') bank.style.float = 'right'  

      if(nameOfGroup == "Heater Kit"){
        document.getElementById('display').textContent = 'Smooth Piano Kit'
        setName(soundsGroups[1])
        setGroup('Smooth Piano Kit')
        setNameOfElement('Smooth Piano Kit')
      }
      if(nameOfGroup == "Smooth Piano Kit"){
        document.getElementById('display').textContent = 'Heater Kit'
        setName(soundsGroups[0])
        setGroup('Heater Kit')
        setNameOfElement('Heater Kit')
      }
    }
  }

  function handleInput(e){
    let audio = document.getElementsByClassName('clip')
    Array.from(audio).forEach((aud)=>{
      aud.volume = Number(e.target.value)/100
      setNameOfElement(`volume ${e.target.value}`)
    })  
  }

  return (
    <div className='controller'>

        <div className='control'>
            <p>power</p>
            <div className='select' id='for-p' onClick={changeInner}>
                <div className='inner' id="power"></div>
            </div>
        </div>    
       <p id='display'>{nameOfElement}</p>

       <div className='volume-slider'>
          <input type='range' min="1" max="100" step="1" 
          id="volume" defaultValue="30" onInput={handleInput}/>
       </div>

       <div className='control'>
            <p>Bank</p>
            <div className='select' id='for-b' onClick={changeInner}>
                <div className='inner' id="bank"></div>
            </div>
       </div>

    </div>
  )
}

export default Controller