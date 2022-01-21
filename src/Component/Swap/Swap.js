import React from 'react'
import './SwapStyle.css'
import { AiFillSetting } from 'react-icons/ai'
import { GiBackwardTime } from 'react-icons/gi'
import { BiDownArrowAlt } from 'react-icons/bi'

function Swap() {
    return (
        <div>
            <div className="container-fluid">
                <div className="container maiandiv">
                    <div className="innerdiv">
                        <div className="card">
                            <div className="card-hearder">
                                <div className="headingtext">
                                    <h4>Exchange</h4>
                                    <small>Trade tokens in an instant</small>
                                </div>
                                <div className="headericon">
                                    <AiFillSetting className="" />
                                    <GiBackwardTime style={{ marginLeft: '1rem' }} />
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="bodymaindiv">
                                    <form action="">
                                        <div className="form-group">
                                            <label htmlFor="">From</label><br />
                                            <div className="inneriputdivlogo">
                                            <input type="number" placeholder="0.0" className="inputfield" />
                                            <button className="logbnbbtn"> <img src="bnb.png" width="25%" alt="" style={{padding:'0px'}} /> BNB</button>

                                            </div>
                                            <br />
                                        </div>
                                       <div className="inputicon">
                                        <BiDownArrowAlt className="inputiconarrow" />

                                       </div>

                                        <div className="form-group">
                                            <label htmlFor="">To</label><br />
                                            <div className="inneriputdivlogo">
                                            <input type="number" placeholder="0.0" className="inputfield" />
                                            <button className="textbtn">  Select a currency</button>
                                            </div>
                                            <br />
                                        </div>

                                        <div className="footerbtn">
                                            <button className="formfooterbtn form-control">Unlock Wallet</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Swap
