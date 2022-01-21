import React,{useRef} from 'react'
import './Newcard.css'
import {loadWeb3} from "../../Component/Api/api";
import {predictionContractAddress,predictionContractAbi} from "../../Component/Utils/predictionContract";
import { knightDodgeTokenAbi,knightDodgeTokenAddress } from '../../Component/Utils/knightDodgetoken';
import Web3 from "web3";
import { toast } from "react-toastify";
const webSupply =new Web3 ("https://data-seed-prebsc-1-s1.binance.org:8545/");

function Newcard() {
    let inputVal=useRef();

    const betBear= async()=>{
        let acc= await loadWeb3();
        if(acc=="No Wallet"){
            console.log("No Wallet Connected");
        }else if(acc=="Wrong Network"){
            console.log("Wrong Wallet")
        }else{
            try{
                const web3 = window.web3;
                let userEntered = inputVal.current.value;
                let tokenContractof = new web3.eth.Contract(knightDodgeTokenAbi,knightDodgeTokenAddress);
                let usersBalance= await tokenContractof.methods.balanceOf(acc).call();
                let contractOf = new web3.eth.Contract(predictionContractAbi, predictionContractAddress);
                let myepoch= await contractOf.methods.currentEpoch().call();
                
                console.log("myEpoch",myepoch);
                console.log("u eneterd",userEntered);
                console.log("Users Balance", usersBalance);
                if(parseFloat(userEntered)>=1){
                    userEntered =web3.utils.toWei(userEntered);
                    if(parseFloat(usersBalance)>=parseFloat(userEntered)){
                        await tokenContractof.methods.approve(predictionContractAddress,userEntered).send({
                            from:acc
                        })
                        toast.success("Transaction Successful")
                        await contractOf.methods.betBear(myepoch,userEntered).send({
                            from:acc
                        })
                        toast.success("Transaction Successful")
                    }else{
                        toast.error("Insufficient Balance Please Recharge!")
                    }
                }else{
                    toast.error("Minimum Betting Amount is 1 Knightdodge")
                }
            }catch(e){
            console.log("Error While Calling betBear",e);
            toast.error("Transaction Failed")

            }
            
        }

    }
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
                                    <input type="text" ref={inputVal} placeholder='0.0' className='inputfiled form-control mb-3' />
                                    <img src="grey-logo 1.png" alt="" />
                                    <img src="Line 1.png" alt="" />
                                    <div className="bodybtnline mt-3">
                                       <button  className="btn btn-sm btnlinebtnbtn ">10%</button>
                                        <button className="btn btn-sm btnlinebtnbtn">25%</button>
                                       <button className="btn btn-sm btnlinebtnbtn">50%</button>
                                      <button className="btn btn-sm btnlinebtnbtn">75%</button>
                                       <button className="btn btn-sm btnlinebtnbtn">Max</button>
                                    </div>
                                    {/* <div className="firstdivbody mt-3">
                                        <p className='bodycartextP1' >Bet:</p>
                                        <p className='imagewithtextPP'> <img src="Logo-1 6.png" alt="" className='boaycardimagewithtext' /> KNIGHTDOGE</p>
                                    </div>
                                    <input type="text" placeholder='0.0' className='inputfiled form-control mb-3' />
                                    <img src="grey-logo 1.png" alt="" />
                                    <img src="Line 1.png" alt="" /> */}

                                    {/* <div className="bodybtnline mt-3">
                                       <button  className="btn btn-sm btnlinebtnbtn ">10%</button>
                                        <button className="btn btn-sm btnlinebtnbtn">25%</button>
                                       <button className="btn btn-sm btnlinebtnbtn">50%</button>
                                      <button className="btn btn-sm btnlinebtnbtn">75%</button>
                                       <button className="btn btn-sm btnlinebtnbtn">Max</button>
                                    </div> */}
                                    <button onClick={()=>betBear()} className='btn btn-lg lastbtnform'>Bet Bear</button>
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
