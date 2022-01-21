import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,Switch
} from "react-router-dom";
import Swap from './Component/Swap/Swap'
import Liquidity from './Component/Liquidity/Liquidity'
function Pagetopage() {
    return (
        <div>

            <BrowserRouter>
                <Switch>
                    {/* <Route path="/" element={<App />} /> */}
                    <Route path="swap" element={<Swap />} />
                    <Route path="Liquidity" element={<Liquidity />} />
                </Switch>
            </BrowserRouter>
 

        </div>
    )
}

export default Pagetopage
