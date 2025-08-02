
import React from 'react';


function Hero() {
    return ( 
        <div className="container">
            <div className="row">
                <h1 className="text-center">Charges</h1>
                <h3 className="text-center mt-3 mb-5 p-5">List of all charges and taxes</h3>
                  <div className="col-4 mt-5 p-5">
                    <img src="media/Images/pricingMF.svg" style={{width:"50%"}}/>
                    <h2>Free equity delivery</h2>
                    <p>All equity delivery investments (NSE, BSE),<br></br> are absolutely free — ₹ 0 brokerage.</p>
                </div>
                
                        <div className="col-4 mt-5 p-5">
                    <img src="media/Images/intradayTrades.svg" style={{width:"50%"}}/>
                    <h2>Intraday and F&O trades</h2>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per <br></br>executed order on intraday trades across<br></br> equity, currency, and commodity trades. Flat <br></br>₹20 on all option trades.</p>
                </div>
                        <div className="col-4 mt-5 p-5">
                    <img src="media/Images/pricingMF.svg" style={{width:"50%"}}/>
                    <h2>Free direct MF</h2>
                    <p>All direct mutual fund investments are<br></br> absolutely free — ₹ 0 commissions & DP<br></br> charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;