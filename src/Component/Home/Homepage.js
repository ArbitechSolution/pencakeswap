import React from 'react';
import './HomeStyle.css';



function Homepage() {


    return (
        <div className="main">
            <div className="container-fluid innerdiv ">
                <div className="container">
                    <div className="Tabnav" >
                        <div className="innertab">
                            <p className="btn btn-sm tabbtn" >Swap</p>
                            <p className="btn btn-sm tabbtn" >Liquidity</p>
                            <p className="btn btn-sm tabbtn">Bridge</p>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Homepage
