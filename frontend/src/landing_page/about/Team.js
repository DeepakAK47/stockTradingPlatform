import React from 'react';


function Team() {
    return ( 
       <div className="container">
        <div className="row">
             <h1 className=" fs-2 text-center mb-5">People</h1>
            <div className="col-6 text-center" >
         <img src="media/Images/nithinKamath.jpg" className="mb-3" style={{borderRadius:"100%",width:"45%"}}/>
        <h4 className="text-muted">Nithin Kamath</h4><br/>
        <p>Founder, CEO</p>
            </div>
            
            <div className="col-6">
                
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the<br></br> hurdles he faced during his decade long stint as a trader. Today,<br></br> Zerodha has changed the landscape of the Indian broking industry.<br></br><br></br>

He is a member of the SEBI Secondary Market Advisory Committee <br></br>(SMAC) and the Market Data Advisory Committee (MDAC).<br></br><br></br>

Playing basketball is his zen.<br></br><br></br>

Connect on <a href='' style={{textDecoration:"none"}}>Homepage</a> / <a href='' style={{textDecoration : "none"}}>TradingQnA</a> / <a href='' style={{textDecoration:"none"}}>Twitter</a></p>
            </div>
        </div>
       </div>
     );
}

export default Team;