import React from 'react';
import First from './src/pages/First.jsx';
import Second from './src/pages/Second.jsx';
import Content from './src/pages/Content.jsx';
import './styles/app.css';
//TODO Mirar el tailwind en archivos que no sean este
const Home = () => {
  return (
    <div className='bg-home home montserrat'>
      <div className="lateral">
        <First />
        <Second />
      </div>
      <div className="divisor"></div>
      <div className="derecha">
        <Content />
      </div>
    </div>
  );
};

export default Home;