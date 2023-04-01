import React, { useEffect } from 'react'

function Drums({ play , setNameOfElement , nameOfSound }) { 

    function invokeClickByKeyboard(id){
        document.getElementById(id).click()
        document.getElementById(id).style.backgroundColor='orange'
    }

    useEffect(()=>{
    let allButtons = document.getElementsByClassName('drum-pad')
    Array.from(allButtons).forEach((btn)=>{
      btn.addEventListener('mousedown',()=>{
         btn.style.backgroundColor = "orange"
      })
       btn.addEventListener('mouseup',()=>{
         btn.style.backgroundColor = '#8d8d8d'
      })
    })
    window.addEventListener("keydown", function(e) {  
        if (e.key == 'q' || e.key == 'Q') {
            invokeClickByKeyboard('btn-q') 
        }         
        if (e.key == 'w' || e.key == 'W') invokeClickByKeyboard('btn-w') 
        if (e.key == 'e' || e.key == 'E')invokeClickByKeyboard('btn-e')
        if (e.key == 'a' || e.key == 'A') invokeClickByKeyboard('btn-a')
        if (e.key == 's' || e.key == 'S') invokeClickByKeyboard('btn-s')
        if (e.key == 'd' || e.key == 'D') invokeClickByKeyboard('btn-d') 
        if (e.key == 'z' || e.key == 'Z') invokeClickByKeyboard('btn-z') 
        if (e.key == 'x' || e.key == 'X') invokeClickByKeyboard('btn-x') 
        if (e.key == 'c' || e.key == 'C') invokeClickByKeyboard('btn-c')   
    });
     window.addEventListener("keyup", function(e) { 
        if (e.key == 'q' || e.key == 'Q') this.document.getElementById('btn-q').style.backgroundColor ='#8d8d8d' 
        if (e.key == 'w' || e.key == 'W') this.document.getElementById('btn-w').style.backgroundColor ='#8d8d8d' 
        if (e.key == 'e' || e.key == 'E') this.document.getElementById('btn-e').style.backgroundColor ='#8d8d8d'
        if (e.key == 'a' || e.key == 'A') this.document.getElementById('btn-a').style.backgroundColor ='#8d8d8d'
        if (e.key == 's' || e.key == 'S') this.document.getElementById('btn-s').style.backgroundColor ='#8d8d8d'
        if (e.key == 'd' || e.key == 'D') this.document.getElementById('btn-d').style.backgroundColor ='#8d8d8d' 
        if (e.key == 'z' || e.key == 'Z') this.document.getElementById('btn-z').style.backgroundColor ='#8d8d8d' 
        if (e.key == 'x' || e.key == 'X') this.document.getElementById('btn-x').style.backgroundColor ='#8d8d8d' 
        if (e.key == 'c' || e.key == 'C') this.document.getElementById('btn-c').style.backgroundColor ='#8d8d8d'        
    });

    } , [])
    function invokeSound(id , name) {
        if(!play){
            return
        }
        let aud = document.getElementById(id)
        aud.currentTime = 0
        aud.play()
        setNameOfElement(name)      
    }

   
    function handleClickQ(e) {        
      invokeSound('Q' , e.target.name)    
    }
    function handleClickW(e) {
        invokeSound('W', e.target.name)
    }
    function handleClickE(e) {
        invokeSound('E', e.target.name)
    }
    function handleClickA(e) {
        invokeSound('A', e.target.name)
    }
    function handleClickS(e) {
        invokeSound('S', e.target.name)
    }
    function handleClickD(e) {
        invokeSound('D', e.target.name)
    }
    function handleClickZ(e) {
     invokeSound('Z', e.target.name)
    }
    function handleClickX(e) {
        invokeSound('X', e.target.name)
    }
    function handleClickC(e) {
        invokeSound('C', e.target.name)
    }

  return (
    <div className='drums'>
        <button type='button' onClick={handleClickQ}  
        name = {nameOfSound[0][0]}
        className='drum-pad' id='btn-q'>
           <audio src={nameOfSound[0][1]} className='clip' id='Q'></audio>
           Q                    
        </button>
        <button type='button' onClick={handleClickW}
        name = {nameOfSound[1][0]}  
        className='drum-pad' id='btn-w'>W
           <audio src={nameOfSound[1][1]} className='clip' id='W'></audio>                      
        </button>
        <button type='button' onClick={handleClickE} 
        name = {nameOfSound[2][0]}
        className='drum-pad' id='btn-e'>E
           <audio src={nameOfSound[2][1]} className='clip' id='E'></audio>                      
        </button>
        <button type='button' onClick={handleClickA}  
        name = {nameOfSound[3][0]}
        className='drum-pad' id='btn-a'>A
           <audio src={nameOfSound[3][1]} className='clip' id='A'></audio>                      
        </button>
        <button type='button' onClick={handleClickS}  
        name = {nameOfSound[4][0]}
        className='drum-pad' id='btn-s'>S
           <audio src={nameOfSound[4][1]}  className='clip' id='S'></audio>                      
        </button>
        <button type='button' onClick={handleClickD}  
        name = {nameOfSound[5][0]}
        className='drum-pad' id='btn-d'>D
           <audio src={nameOfSound[5][1]}  className='clip' id='D'></audio>                      
        </button>
        <button type='button' onClick={handleClickZ}  
        name = {nameOfSound[6][0]}
        className='drum-pad' id='btn-z'>Z
           <audio src={nameOfSound[6][1]}  className='clip' id='Z'></audio>                      
        </button>
        <button type='button' onClick={handleClickX}  
        name = {nameOfSound[7][0]}
        className='drum-pad' id='btn-x'>X
           <audio src={nameOfSound[7][1]}  className='clip' id='X'></audio>                      
        </button>
        <button type='button' onClick={handleClickC}  
        name = {nameOfSound[8][0]}
        className='drum-pad' id='btn-c'>C
           <audio src={nameOfSound[8][1]}  className='clip' id='C'></audio>                      
        </button>       
    </div>
  )
}

export default Drums