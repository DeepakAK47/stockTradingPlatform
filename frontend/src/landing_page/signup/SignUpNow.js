import React from 'react';


function SignUpNow() {
    return ( 
        <div className="container mb-5">
            <div className="row">
            <div className="col-6">
                <img src="media/Images/account_open.svg"/>
            </div>
            <div className="col-6">
                <h1 className="mb-3">Signup now</h1>
                <h5 className="text-muted mb-3">Or track your existing application</h5>
               <div class="input-group mb-3" style={{width:"50%"}}>
  <span class="input-group-text" id="basic-addon1">+91</span>
  <input type="text" class="form-control" placeholder="Eneter your Mobile Number " aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<button type="button" class="btn btn-primary" style={{width:"40%",height:"13%"}}>Primary</button>
<p className="mt-5 mb-5" > By proceeding, you agree to the Zerodha <a href="" style={{textDecoration:"none"}}>terms </a>& <a href="" style={{textDecoration:"none"}}>privacy policy</a></p>
            </div>
            </div>
        </div>
     );
}

export default SignUpNow;

