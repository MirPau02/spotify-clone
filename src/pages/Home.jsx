import React from 'react'
import First from './First.jsx';
import Second from './Second.jsx';

const Home = () => {
  return (
    <div className='bg-home home montserrat'>
      <div className="lateral">
        <First />
        <Second />
      </div>
      <div className="derecha">
        
      </div>
    </div>
  )
}

export default Home