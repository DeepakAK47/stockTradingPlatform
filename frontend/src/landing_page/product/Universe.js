import React from 'react';


function Universe() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="row">
                    <h4 className="text-center mt-5 p-5 text-muted">Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</h4>
                </div>
                <div className="row">
                    <h1 className="mt-3 p-3 text-center">The Zerodha Universe</h1>
                    <p className="mt-3 p-3 text-center">Extend your trading and investment experience even further with our partner platforms</p>
                </div>
                <div className="col-4 mt -5 p-5">
                    <img src="media/Images/zerodhaFundhouse.png" className="" style={{width:"50%"}}/>
                    <p className="p-3 mb-5">Our asset managemnet</p>
                    <img src="media/Images/streakLogo.png" style={{width:"50%"}}/>
                    <p className="p-3">Systematic platform</p>
                </div>
                  <div className="col-4 mt -5 p-5">
                    <img src="media/Images/sensibullLogo.svg" className="" style={{width:"50%"}}/>
                    <p className="p-3 mb-5">Option trading platform</p>
                    <img src="media/Images/smallcaseLogo.png" style={{width:"50%"}}/>
                    <p className="p-3">Thematic investment platform</p>
                </div>
                 <div className="col-4 mt -5 p-5">
                    <img src="media/Images/zerodhaFundhouse.png" className="" style={{width:"50%"}}/>
                    <p className="p-3 mb-5">Our asset managemnet</p>
                    <img src="media/Images/dittoLogo.png" style={{width:"50%"}}/>
                    <p className="p-3">Persenalized advice</p>
                </div>
                <div className="text-center">
                <h1 className="text-center">Open a Zerodha account</h1>
                <p className="text-center">Modern platforms and apps Rs. 0 investments, and flat Rs.20 intraday and F&Q trades </p>
                 <button className="p-2 btn btn-primary fs-5" style={{width:"20%",margin:"0 auto"}}>Sign up Now</button>
                 </div>
                 <div className="col-6 mt-5 " style={{textAlign:"left"}}>
                    <a href="" className="mb-3 ms-5" style={{textDecoration:"none"}}>Brokerage Calculator</a>
                    <ul className="mt-3 ms-3 text-muted">
                        <li>Securities/Commodities transaction tax</li>
                        <li>DP (Depository participant) charges</li>
                        <li>AMC (Account maintenance charges)</li>
                         <li>Corporate action order charges</li>
                        <li>Off-market transfer charges</li>
                        <li>Trading using 3-in-1 account with block functionality</li>
                    </ul>
                 </div>
                  <div className="col-6 mt-5">
                    <a href="" style={{textDecoration:"none"}}>List of charges </a>
                  </div>
            </div>
        </div>
     );
}

export default Universe;