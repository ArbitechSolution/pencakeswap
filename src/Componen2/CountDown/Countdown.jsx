import React from 'react'
import Countdown from "react-countdown";
import './Countdown.css'

function Countdowncome() {
    const renderer = ({minutes, seconds }) => {


return (
  <span style={{color:"rgba(49, 167, 237, 1)"}} className='Countdown'>
 {minutes}:{seconds}
  </span>
);

};

    return (
        <div>
           




  <Countdown date={Date.now() + 300000} renderer={renderer} />
  

        </div>
    )
}

export default Countdowncome
