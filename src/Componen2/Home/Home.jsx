import React from 'react'

import './HomeStyle.css'
import Countdown from '../CountDown/Countdown'

function Home() {
    return (
        <div className='Homebg'>
            <div className="container-fluid">
                <div className="container">

                    <div className="navdiv float-end mt-4">
                        <button className='btn btn-secondary'>Connect Wallet</button>
                    </div>
                    <br /><br /><br /><br /> <br />

                    {/* Now Home Start----------------------------------------- */}
                    {/* text-primary me-4 sm-me-1 fs-6  fw-bold */}


                    <div className="MainDivHome container ">
                        <div className="innermaindiv">

                            <div className="innerdiv ">
                                <div className="text-primary">
                                    TIME:
                                </div>
                                <div className="">
                                    30M
                                </div>
                                <div className="">
                                    1D
                                </div>
                                <div className="">
                                    7D
                                </div>
                                <div className="">
                                    15D
                                </div>
                                <div className="">
                                    1M
                                </div>

                            </div>
                        </div>
                    </div>




                    {/* home Button change page---------------------------------------------------------- */}
                    <div className="">
                        <div className="row maindivtosecondsection">
                        <div className="col-lg-2 mt-2 sm-col-3 col-8 ">
                        <div className="bnbmain">
                        <img src="bnb-800x445.png" alt="" className='bnbimge' />
                            <div className="innerbnb">
                                <h2>BNBUSDT</h2>
                             <p className='Bnbtodollor' >$45245</p>
                             
                            </div>
                        </div>

                        </div>
                        

                            <div className="col-lg-5 mt-2 col-1 ">
                                {/* Here staring button slide------------------------------------------ */}
                                <div className="displynone">
                                    <div className="Changebutton  d-flex  justify-content-center">
                                        <div className="innerdivbutton d-flex flex-row justify-content-between align-items-center ps-3 px-3 pt-2 pb-2 rounded-pill ">

                                            <i class="far fa-arrow-left fs-5 text-info"></i>
                                            <i class="far fa-arrow-right fs-5 text-info"></i>
                                        </div>
                                        <img src="Logo-1 6.png" alt="" className="position-absolute imgbutton " />
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-5 sm-col-6 col-3">

                                {/* Now we start side reward and timer div------------------------------ */}


                                <div className="Timerdivmain">

                                    <div className="Timerinnerdiv">
                                        <div className="thisisTimerdiv bg-white">
                                            <h2 className='text-primary h4div'><Countdown/> </h2>
                                            <p className='monthanddayshow' >7D</p>
                                        </div>
                                        <img src="alarm-clock 6.png" alt="" className=' position-absolute CLOCKIMG' />
                                    </div>

                                    <div className="timerseconddivQutionmarq">
                                        <div className="innerquestionmark">
                                            <i class="fal fa-question-circle iconquestion"></i>
                                        </div>
                                    </div>

                                    <div className="timerseconddivQutionmarq">
                                        <div className="icondollormaindiv">

                                            <i class="far fa-money-check-alt icondollor"></i>

                                            <i class="far fa-arrow-down iconarrow"></i>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>








                    </div>


                </div>
            </div>
        </div>
    )
}

export default Home
