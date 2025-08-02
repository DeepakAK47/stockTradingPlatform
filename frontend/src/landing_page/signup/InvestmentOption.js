import React from 'react';

function InvestmentOptions() {
    return ( 
       <div className="container mb-5 mt-5 p-5">
        <div className="row">
           
            <h1 className="text-center mb-5">Investment options with Zerodha demat account</h1>
           <div className="col-3 mt-5">
            <img src="media/Images/1.svg" class=" d-block mb-5 "></img>
            <img src="media/Images/2.svg"></img>
           </div>
          <div className="col-3 mt-3">
            <h1 className="mt-3 mb-2">Stocks</h1>
            <p>Invest in all exchange-listed<br></br> securities</p>
            <h1>IPO</h1>
            <p>Apply to the latest IPOs instantly<br></br> via UPI</p>
          </div>
          <div className="col-3 mt-5">
            <img className="d-block mb-5" src="media/Images/3.svg"></img>
            <img src="media/Images/4.svg"></img>
          </div>
          <div className="col-3 mt-5">
            <h1>Mutual funds</h1>
            <p>Invest in commission-free direct <br></br>mutual funds</p>
            <h1>Futures & options</h1>
            <p>Hedge and mitigate market risk <br></br>through simplified F&O trading</p>
          </div>
          <div className="d-flex justify-content-center">
             <button type="button"  className="btn btn-primary " style={{width:"20%",height:"100%"}}>Explore Investments</button>
          </div>
        </div>
       </div>
       
     );
}

export default InvestmentOptions;