import React from 'react'
import './stylecome.css';
function Comedown() {
    return (
        <div>
            <div className="container-fluid">
                <div className="container">
                    <div className="maindiv">
                        <div className="card firdtcard">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-lg-3 col">
                                        DAYS
                                    </div>
                                    <div className="col-lg-3 col">
                                        HOURS
                                    </div>
                                    <div className="col-lg-3 col">
                                        MINUTES
                                    </div>
                                    <div className="col-lg-3 col">
                                        SECONDS
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="innerdivbody">
                                    <div className="row">
                                        <div className="col-lg-3 col">
                                            <div className="card innercard">
                                                <div className="card-body">
                                                    <h1 className="h1text">05</h1>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col">
                                            <div className="card innercard">
                                                <div className="card-body">
                                                    <h1 className="h1text">23</h1>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col">
                                            <div className="card innercard">
                                                <div className="card-body">
                                                    <h1 className="h1text">35</h1>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col">
                                            <div className="card innercard" >
                                                <div className="card-body">
                                                    <h1 className="h1text">06</h1>
                                                </div>
                                            </div>
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

export default Comedown
