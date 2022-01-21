import React, { useEffect, useState } from 'react';
import { ScrollMenu, VisibilityContext, Arrow } from 'react-horizontal-scrolling-menu';
import './cardstyle.css'
import { IdArray } from '../CardArray.jsx'
import usePreventBodyScroll from './Cards';
import ReactDOM from 'react-dom';

import ReactCardFlip from 'react-card-flip';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Countdown from '../CountDown/Countdown';
// import Newcard from './Newcard';

function Checkchard() {
    let [isFlipped, setisFlipped] = useState(false);
    const handleClick = () => {
        setisFlipped(!isFlipped);
    }
    let Arrayhere = IdArray;
    // let element = document.getElementById("#maincontainer");
    //     document.addEventListener('DOMContentLoaded', function () {
    //         if(element)
    //             element.addEventListener('wheel', (e)=>{
    //         e.preventDefault();
    //         element.scrollBy({
    //         left: e.deltaY < 0 ? -30 : 30
    //         })
    //     });
    // })

    //    element && element.addEventListener('wheel', (e)=>{
    //         e.preventDefault();
    //         console.log("scroll");
    //         element.scrollBy({
    //         left: e.deltaY < 0 ? -30 : 30
    //         })
    //     })

    // element.addEventListener('wheel', (event) => {
    //     event.preventDefault();

    //     element.scrollBy({
    //         left: event.deltaY < 0 ? -30 : 30,

    //     });
    // });
    // element.addEventListener("wheel", (evt) => {
    //         evt.preventDefault();
    //         element.scrollLeft += evt.deltaY;
    //     })

    // <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
    //     <div>
    //         <Newcard />
    //         <button onClick={handleClick}>Click to flip</button>
    //     </div>

    //     <div>
    //         <Newcard />
    //         <button onClick={handleClick}>Click to flip</button>
    //     </div>
    // </ReactCardFlip>
    let [data, setdata] = useState(0)
    function Card({ title, itemId, item }) {

        let timer = 0;
        useEffect(() => {
            setInterval(() => {
                if (timer < 100) {
                    timer = timer + 3;
                    setdata(timer)
                    console.log('Time=', timer)
                }
                else {
                    timer = 0;
                    setdata(0);
                }

            }, 3000)
        }, [])

        return (
            <div>
                <div className="container-fluid mt-5 maindivofcard" id='maincontainer' >
                    <div className='container' >
                        <div className="">
                            <div className="card maincard1" >
                                <div className={item.background}  >
                                    {/* <div className="card-header"  > */}
                                    <div className="headerdiv">
                                        <div className="headertext01">
                                            <h5 className='textandiconheader'>
                                                <small >
                                                    {/* <img src={item.icon} alt="" className='' /> */}
                                                    <i class={item.icon}></i>
                                                </small>
                                                <h5 style={{ marginLeft: '0.5rem' }} className={item.headertextclass}>
                                                    {item.headertext}

                                                </h5>
                                            </h5>
                                            <h6 className={item.headertextclass}>{item.id}</h6>
                                            {/* <h6>{headertext}</h6> */}
                                        </div>
                                    </div>
                                </div>
                                <ProgressBar now={20} className={item.bar} />
                                <div className="Uperdivmain mt-3">

                                    <div className="uperdiv011">
                                        <img src={item.imgSrcuper} className='topimgshapes' alt="" />
                                        {/* <img src='Rectangle 19.png' className='topimgshapes' alt="" /> */}
                                        <div className="maindeaderupOrDoen">
                                            <h2 className={item.Upertext}>UP</h2>
                                            <h6 className={item.UpertextP}>1.84x payout</h6>
                                            {/* <h2 >UP</h2>
                                            <h6 >1.84x payout</h6> */}
                                        </div>

                                    </div>
                                </div>
                                <div className="card-body" style={{ zIndex: '2', }} >
                                    <div className="cardbody01">
                                        <div className="centercarddiv">
                                            <div className={item.display1}>
                                                <p>{item.price}</p>
                                                <div className="innerdivcentercard">
                                                    <h4 className="01headingtext">
                                                        $546.311
                                                    </h4>
                                                    <button className={item.btncenter}> <i class={item.iconarrow}></i> $452</button>
                                                    {/* <button className="btn btn-success btn-sm"> <i class="far fa-arrow-down"></i> $452</button> */}
                                                </div>
                                                <div className="innerdivcentercard02">
                                                    <p className="01headingtext">
                                                        Locked Price
                                                    </p>
                                                    <p>$546.12</p>
                                                </div>
                                                <div className="innerdivcentercard03">
                                                    <h5 className="01headingtext">
                                                        Price Pool:
                                                    </h5>
                                                    <h5>27.991 BNB</h5>
                                                </div>
                                            </div>
                                            <div className={item.display2}>
                                                <div className="innerdivcentercard">
                                                    <h6 className="wiinerpool">
                                                        Winner Pool:
                                                    </h6>
                                                    <h6 className="wiinerpool2">1,500 $KNIGHTDOGE</h6>
                                                </div>
                                                <button className='btn  form-control btn-lg nextbtn1 mt-3' onClick={handleClick}>Stake & UP</button>
                                                <button className='btn  form-control btn-lg mt-3 nextbtn2 mb-3' >Stake & DOWN</button>
                                            </div>
                                            <div className={item.display3}>
                                               <div className="maindiv">
                                                    <h6>Entry starts</h6>
                                                    <Countdown />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Uperdivmain" >
                                    <div className="uperdiv011 mb-3">
                                        <img src={item.imgSrcdown} className='Bottomimgshapes' alt="" style={{ zIndex: '-1', marginTop: '-3.5rem' }} />
                                        {/* <img src="Rectangle 20.png" className='Bottomimgshapes' alt="" style={{ zIndex: '-1', marginTop: '-3.5rem' }} /> */}
                                        <div className="maindeadeOrDoen">
                                            <h6 className={item.bottomtextP}>1.84x payout</h6>
                                            <h2 className={item.Bottomtext}>Down</h2>
                                            {/* <h6 >1.84x payout</h6>
                                            <h2 >Down</h2> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    const { disableScroll, enableScroll } = usePreventBodyScroll();
    function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
        const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

        if (isThouchpad) {
            ev.stopPropagation();
            return;
        }

        if (ev.deltaY < 0) {
            apiObj.scrollNext();
        } else if (ev.deltaY > 0) {
            apiObj.scrollPrev();
        }
    }

    return (
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll} >
            <ScrollMenu onWheel={onWheel}>
                {Arrayhere.map((items, id) => (

                    <Card
                        itemId={id} // NOTE: itemId is required for track items
                        title={items}

                        key={id}
                        item={items}
                    />
                )
                )
                }
         {/* {
                    Arrayhere.map((id,items) => {
                        return (
                            <Card
                        itemId={id} // NOTE: itemId is required for track items
                        key={id}
                        item={items}
                    />
                  )
                    })
                } */}
            </ScrollMenu>
        </div>
    );
}

export default Checkchard;