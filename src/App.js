import React, { useState } from 'react';
import axios from 'axios'


function App() {
  
  //const url =`https://api.openweathermap.org/data/2.5/weather?q=charlotte&appid=48425367274a044c1e0f5043a3c6b8c2`
  
  return (
    <div className='app'>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Charlotte</p>
          </div>
          <div className='temp'>
            <h1>60° F</h1>
          <div className='description'>
            <p>Clouds</p>
          </div>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p>65° F</p>
          </div>
          <div className='humidity'>
          </div>
          <div className='wind'>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
