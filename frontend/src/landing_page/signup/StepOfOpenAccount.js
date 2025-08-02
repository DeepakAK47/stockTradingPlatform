import React from 'react';

function StepOfOpenAccount() {
    return ( 
        <div className="bg-info" >
        <div className="container" >
            <div className="row">
                <h1 className="text-center mb-5">Steps to open a demat account with Zerodha</h1>
            <div className="col-6">
                <img src="media/Images/5.svg" className="mt-5 mx-3"/>
            </div>
             <div className="col-6 p-5 mt-5">
                <ol>
                    <h1>1.Enter the requested details</h1>
                    <h1>Complete e-sign & verification</h1>
                    <h1>Start investing!</h1>
                </ol>
             </div>
            </div>
        </div>
        </div>
     );
}

export default StepOfOpenAccount;