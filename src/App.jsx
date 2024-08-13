import React from 'react';
import Cardone from './components/cardone';
import Cardtwo from './components/cardtwo';
import Cardthree from './components/cardthree';
import '../src/App.css'
import { Routes, Route, useNavigate } from 'react-router-dom';
  function App(){
   const Navigate = useNavigate('')
   function one(e){
    e.preventDefault()
    Navigate('/')
   }
   function two(e){
    e.preventDefault()
    Navigate('/cardtwo')
   }
   function three(e){
    e.preventDefault()
    Navigate('/cardthree')
   }
    return (
      <div>
        <Routes>
          <Route path='/' element={<Cardone></Cardone>}></Route>
          <Route path='/cardtwo' element={<Cardtwo></Cardtwo>}></Route>
          <Route path='/cardthree' element={<Cardthree></Cardthree>}></Route>
        </Routes>

       <div className="container">
      <div className="but">
      <button onClick={one}>1</button>
        <button onClick={two}>2</button>
        <button onClick={three}>3</button>
      </div>
       </div>
      </div>

      




    );
  }
export default App
