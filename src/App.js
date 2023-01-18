import React, { useState } from 'react'
import Comp1 from './comp1'
import Comp2 from './comp2'
import './style.css'
import './App.css';
function App() {
  const [box1,setBox1]=useState(false)
  const[box2,setBox2]=useState(false)
  return (
     <div className="App">
      <h1>Styling using Functional and Class component</h1>

     <button className='btn1' onClick={()=>box1?setBox1(false):setBox1(true)}>
      To Style Using Functional Component</button>
   <button className='btn2' onClick={()=>box2?setBox2(false):setBox2(true)}>
    To Style Using Class Component</button>
     {
        box1 && <Comp1 />
      }
     {
       box2 && <Comp2 />
    }
     </div>
  );
}

export default App;