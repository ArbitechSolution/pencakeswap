import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';

// import './Newcard.css'

const Card = () => {
  let [isFlipped, setisFlipped] = useState(false);

  const handleClick = () => {
    setisFlipped(!isFlipped);
  }


  return (
    <div >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div>
          <div className="innerdivcentercard">
            <h6 className="wiinerpool">
              Winner Pool:
            </h6>
            <h6 className="wiinerpool2">1,500 $KNIGHTDOGE</h6>

          </div>
          <button className='btn  form-control btn-lg nextbtn1 mt-3' onClick={handleClick}>Stake & UP</button>
          <button className='btn  form-control btn-lg mt-3 nextbtn2 mb-3' >Stake & DOWN</button>
        </div>


        <div>
          <div className="container-fluid">
            <div className="contai">
              <div className="maincard">
                <div className="card maincardhere">
                  <div className="card-header maindeadercardmain">
                    <div className="headerfirstdiv">

                      <p className='innerdivfirst'> <i class="far fa-arrow-left"></i>  Set Position</p>

                    </div>

                    <button className='btn btn-sm secondivbtnheader text-white'><i class="far fa-arrow-down"></i> DOWN</button>

                  </div>
                  <div className="card-body">
                    <div className="innercardbody">

                      <div className="firstdivbody mt-2">
                        <p className='bodycartextP1' >Stake:</p>
                        <p className='imagewithtextPP'> <img src="Logo-1 6.png" alt="" className='boaycardimagewithtext' /> KNIGHTDOGE</p>
                      </div>


                      <input type="text" placeholder='0.0' className='inputfiled form-control mb-3' />

                      <img src="grey-logo 1.png" alt="" />
                      <img src="Line 1.png" alt="" />

                      <div className="bodybtnline mt-3">
                        <button className="btn btn-sm btnlinebtnbtn ">10%</button>
                        <button className="btn btn-sm btnlinebtnbtn">25%</button>
                        <button className="btn btn-sm btnlinebtnbtn">50%</button>
                        <button className="btn btn-sm btnlinebtnbtn">75%</button>
                        <button className="btn btn-sm btnlinebtnbtn">Max</button>
                      </div>
                      <div className="firstdivbody mt-3">
                        <p className='bodycartextP1' >Bet:</p>
                        <p className='imagewithtextPP'> <img src="Logo-1 6.png" alt="" className='boaycardimagewithtext' /> KNIGHTDOGE</p>
                      </div>
                      <input type="text" placeholder='0.0' className='inputfiled form-control mb-3' />


                      <img src="grey-logo 1.png" alt="" />
                      <img src="Line 1.png" alt="" />

                      <div className="bodybtnline mt-3">
                        <button className="btn btn-sm btnlinebtnbtn ">10%</button>
                        <button className="btn btn-sm btnlinebtnbtn">25%</button>
                        <button className="btn btn-sm btnlinebtnbtn">50%</button>
                        <button className="btn btn-sm btnlinebtnbtn">75%</button>
                        <button className="btn btn-sm btnlinebtnbtn">Max</button>
                      </div>


                      <button className='btn btn-lg lastbtnform' onClick={handleClick}>Connect wallet</button>

                      <p className='lastPP'>You won’t be able to remove or change your position once you enter it.</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </ReactCardFlip>

    </div>
  );
};

export default Card;
// ReactDOM.render(<Card/>, document.querySelector("root"))
