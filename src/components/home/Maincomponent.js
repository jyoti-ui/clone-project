import React from 'react';
import Banner from './Banner';
import "./Home.css";

const Maincomponent = () => {
  return (
    <div className='home_section'>
        <div className='banner_part'>
            <Banner/>
        </div>
    </div>
  )
}

export default Maincomponent;