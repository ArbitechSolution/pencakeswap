import React, { useState, useEffect } from "react";
import { loadWeb3 } from "../../Component/Api/api";
import "./HomeStyle.css";
import Countdown from "../CountDown/Countdown";

function Home() {
  let [btnTxt, setBtTxt] = useState("Connect Wallet");

  const getAccount = async () => {
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      setBtTxt("No Wallet");
    } else if (acc == "Wrong Network") {
      setBtTxt("Wrong Network");
    } else {
      let myAcc =
        acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
      setBtTxt(myAcc);
    }
  };
  useEffect(() => {
    setInterval(() => {
      getAccount();
    }, 1000);
  }, []);
  return (
    <div className="Homebg">
      <div className="container-fluid">
        <div className="container">
          <di v className="navdiv float-end mt-4">
            <button className="btn btn-secondary">{btnTxt}</button>
          </di>
          <br />
          <br />
          <br />
          <br /> <br />
          <div className="MainDivHome container ">
            <div className="innermaindiv">
              <div className="innerdiv ">
                <div className="text-primary">TIME:</div>
                <div className="">30M</div>
                <div className="">1D</div>
                <div className="">7D</div>
                <div className="">15D</div>
                <div className="">1M</div>
              </div>
            </div>
          </div>
          {/* <div className=""> */}
            <div className="row maindivtosecondsection d-flex justify-content-between mt-md-3 mt-2">
              <div className="col-lg-2 mt-2 col-sm-3 col-8 mt-md-3" >
                <div className="bnbmain " >
                  <img src="bnb-800x445.png" alt="" className="bnbimge" />
                  <div className="innerbnb">
                    <h2>BNBUSDT</h2>
                    <p className="Bnbtodollor">$45245</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 mt-2 col-1 mt-3">
                {/* Here staring button slide------------------------------------------ */}
                <div className="displynone">
                  <div className="Changebutton  d-flex  justify-content-center">
                    <div className="innerdivbutton d-flex flex-row justify-content-between align-items-center ps-3 px-3 pt-2 pb-2 rounded-pill ">
                      <i class="far fa-arrow-left fs-5 text-info"></i>
                      <i class="far fa-arrow-right fs-5 text-info"></i>
                    </div>
                    <img
                      src="Logo-1 6.png"
                      alt=""
                      className="position-absolute imgbutton "
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 cos-ml-6 col-sm-7 mt-md-1 mt-2">
                {/* Now we start side reward and timer div------------------------------ */}

                <div className="Timerdivmain" >
                  <div className="Timerinnerdiv">
                    <div className="thisisTimerdiv bg-white">
                      <h2 className="text-primary h4div">
                        <Countdown />{" "}
                      </h2>
                      <p className="monthanddayshow">7D</p>
                    </div>
                    <img
                      src="alarm-clock 6.png"
                      alt=""
                      className=" position-absolute CLOCKIMG"
                    />
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
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
