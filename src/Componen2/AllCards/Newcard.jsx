import React from 'react'
import './Newcard.css'

function Newcard() {
    return (
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
                                       <button  className="btn btn-sm btnlinebtnbtn ">10%</button>
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
                                       <button  className="btn btn-sm btnlinebtnbtn ">10%</button>
                                        <button className="btn btn-sm btnlinebtnbtn">25%</button>
                                       <button className="btn btn-sm btnlinebtnbtn">50%</button>
                                      <button className="btn btn-sm btnlinebtnbtn">75%</button>
                                       <button className="btn btn-sm btnlinebtnbtn">Max</button>
                                    </div>


                                    <button className='btn btn-lg lastbtnform'>Connect wallet</button>

                                    <p className='lastPP'>You won’t be able to remove or change your position once you enter it.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Newcard
