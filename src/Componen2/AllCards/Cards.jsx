import React from "react";

const preventDefault = (ev: Event) => {
  if (ev.preventDefault) {
    ev.preventDefault();
  }
  ev.returnValue = false;
};

const enableBodyScroll = () => {
  document && document.removeEventListener("wheel", preventDefault, false);
};
const disableBodyScroll = () => {
  document &&
    document.addEventListener("wheel", preventDefault, {
      passive: false
    });
};

function usePreventBodyScroll() {
  const [hidden, setHidden] = React.useState(false);

  React.useEffect(() => {
    hidden ? disableBodyScroll() : enableBodyScroll();

    return enableBodyScroll;
  }, [hidden]);

  const disableScroll = React.useCallback(() => setHidden(true), []);
  const enableScroll = React.useCallback(() => setHidden(false), []);
  return { disableScroll, enableScroll };
}

export default usePreventBodyScroll;












// import React from 'react'
// import './cardstyle.css'
// import { IdArray } from '../CardArray.jsx'
// import { useEffect } from 'react';
// import $ from 'jquery'

// function Cards() {
//   let Arrayhere = IdArray;




//   return (
//     <div className="topdiv" >
//       <div class="horizontal-scroll-wrapper squares">


//         {
//           Arrayhere.map((items, id) => {
//             return (
//               <div itemID={items} className='maindivofcard'  >


//                 <div className="container-fluid mt-5 " id='maincontainer' >
//                   <div className='' >
//                     <div className="">
//                       <div className="card maincard1" >

//                         <div className={items.background} style={{borderRadius:'25px 25px 0 0'}} >
//                           <div className="headerdiv">
//                             <div className="headertext01">
//                               <h6> <small>
//                                 <img src={items.icon} alt="" />
//                               </small> {items.headertext}</h6>
//                               <h6>{items.id}</h6>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="Uperdivmain mt-3">

//                           <div className="uperdiv011">
//                             <img src={items.imgSrcuper} className='topimgshapes' alt="" />


//                             <div className="maindeaderupOrDoen">
//                               <h2 className={items.Upertext}>UP</h2>
//                               <h6 className={items.UpertextP}>1.84x payout</h6>
//                             </div>

//                           </div>
//                         </div>
//                         <div className="card-body" style={{ zIndex: '2', }} >




//                           <div className="cardbody01">
//                             <div className="centercarddiv">
//                               <p>Close Prise</p>
//                               <div className="innerdivcentercard">
//                                 <h4 className="01headingtext">
//                                   $546.311
//                                 </h4>
//                                 <button className={items.btncenter}> <i class={items.iconarrow}></i> $452</button>
//                               </div>

//                               <div className="innerdivcentercard02">
//                                 <p className="01headingtext">
//                                   Locked Price
//                                 </p>
//                                 <p>$546.12</p>
//                               </div>

//                               <div className="innerdivcentercard03">
//                                 <h5 className="01headingtext">
//                                   Price Pool:
//                                 </h5>
//                                 <h5>27.991 BNB</h5>
//                               </div>
//                             </div>
//                           </div>


//                         </div>
//                         <div className="Uperdivmain" >

//                           <div className="uperdiv011 mb-3">
//                             <img src={items.imgSrcdown} className='Bottomimgshapes' alt="" style={{ zIndex: '-1', marginTop: '-3.5rem' }} />


//                             <div className="maindeadeOrDoen">

//                               <h6 className={items.bottomtextP}>1.84x payout</h6>
//                               <h2 className={items.Bottomtext}>Down</h2>
//                             </div>

//                           </div>
//                         </div>



//                       </div>
//                     </div>

//                   </div>
//                 </div>
//               </div>

//             )
//           })
//         }
//       </div>









//       <div className="container-fluid mt-5">
//         <div className="container">
//           <div className="maindivofcard">

//             {
//               Arrayhere.map((items) => {
//                                                         return (
//             <div className="card maincard1">
//               <div className= {items.background}  >
//                 <div className="headerdiv">
//                   <div className="headertext01">
//                     <h6> <small>
//                   <img src={items.icon}  alt="" />  
//                     </small> {items.headertext}</h6>
//                     <h6>{items.id}</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="Uperdivmain">

//                 <div className="uperdiv011">
//                   <img src={items.imgSrcuper} className='topimgshapes' alt="" />


//                   <div className="maindeaderupOrDoen">
//                     <h2 className={items.Upertext}>UP</h2>
//                     <h6 className={items.UpertextP}>1.84x payout</h6>
//                   </div>

//                 </div>
//               </div>
//               <div className="card-body" style={{ zIndex: '2',  }} >




//                 <div className="cardbody01">
//                   <div className="centercarddiv">
//                     <p>Close Prise</p>
//                     <div className="innerdivcentercard">
//                       <h4 className="01headingtext">
//                         $546.311
//                       </h4>
//                       <button className={items.btncenter}> <i class={items.iconarrow}></i> $452</button>
//                     </div>

//                     <div className="innerdivcentercard02">
//                       <p className="01headingtext">
//                         Locked Price
//                       </p>
//                       <p>$546.12</p>
//                     </div>

//                     <div className="innerdivcentercard03">
//                       <h5 className="01headingtext">
//                         Price Pool:
//                       </h5>
//                       <h5>27.991 BNB</h5>
//                     </div>
//                   </div>
//                 </div>


//               </div>
//               <div className="Uperdivmain" >

//                 <div className="uperdiv011 mb-3">
//                   <img src={items.imgSrcdown} className='Bottomimgshapes' alt="" style={{ zIndex: '-1', marginTop: '-3.5rem' }} />


//                   <div className="maindeadeOrDoen">

//                     <h6 className={items.bottomtextP}>1.84x payout</h6>
//                     <h2 className={items.Bottomtext}>Down</h2>
//                   </div>

//                 </div>
//               </div>



//             </div>

//             )
//                                                     })
//                                                 }

//           </div>

//         </div>
//       </div>

//     </div>
//   )
// }

// export default Cards
