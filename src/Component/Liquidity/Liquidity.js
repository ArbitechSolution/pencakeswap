import React from 'react'
import './LiquidityStyle.css'
import { AiFillSetting } from 'react-icons/ai'
import { GiBackwardTime } from 'react-icons/gi'
import { BsQuestionCircle } from 'react-icons/bs'
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';




function Swap() {
    return (
        <div>
            <div className="container-fluid">
                <div className="container maiandiv">
                    <div className="innerdiv">
                        <div className="card">
                            <div className="card-hearder">
                                <div className="headingtext">
                                    <h4>Liquidity</h4>
                                    <small>Add liquidity to receive LP tokens</small><br />
                                    <button className="btnheader">Add Liquidity</button>
                                </div>
                                <div className="headericon">
                                    <AiFillSetting className="" />
                                    <GiBackwardTime style={{ marginLeft: '1rem' }} />
                                </div>
                            </div>
                            <div className="card-body" style={{ padding: '20px' }}>
                                <div className="bodycardonediv">
                                    <div className="cardmainbodydiv">
                                        <h6>Your Liquidity</h6>
                                    </div>
                                    <div className="bodycardicon">
                                    
                                        <Tooltip  title="When You add Liquidity.You are given pool of token taht reprsent your share. If you can't see Pool You join in this list. Try importing  a pool below" arrow placement="left" style={{background:'white'}} >
                                            <Button><BsQuestionCircle /></Button>
                                        </Tooltip>

                                    </div>
                                </div>
                                <div className="bodycenterdivtext">
                                    <h6>Connect to a wallet to view your liquidity.</h6>
                                </div>

                                <div className="bodyenddiv">
                                    <p>Don't see a pool you joined? <a href="#" className="enddivA"> Import it.</a></p>
                                </div>

                                <div className="footerbodydiv">
                                    <p>Or, if you staked your LP tokens in a farm, unstake them to see them here.</p>
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
