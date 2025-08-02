import React from 'react';

function Pricing() {
    return ( 
        <div className="container">
        <div className="row">
        <div className="col-4 mb-5">
            <h1 className="fs-2">Unbeatable pricing</h1>
            <p className="mb-5">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <a href='' style={{textDecoration:"none"}} >See Pricing <i class="fa-solid fa-arrow-right-long"></i></a>
            </div> 
              <div className="col-2 mb- 5"></div>   
        <div className="col-6 mb-5">
            <div className="row">
                <div className="col border p-2 text-center">
                    <h1 className="mb-4"><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                    <p >Free equity delivery and<br></br> direct mutual funds</p>
                </div>
                <div className="col border p-2 text-center">
                    <h1 className="mb-4"><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                    <p>Intraday and F&O</p>
                </div>
            </div>
            </div> 
        </div>
        </div>
     );
}

export default Pricing;