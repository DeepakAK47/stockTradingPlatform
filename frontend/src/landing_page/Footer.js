import React from 'react';

function Footer() {
    return ( 
        <footer style={{backgroundColor:"rgb(250,250,250)"}} className="fs-6">
       <div className="container border-top mt-5 mb-3">
        <div className="row mt-5">

            <div className="col">
                <img src="media/Images/logo.svg" style={{width:"50%"}}/>
                <p className="text-xs mb-3 mt-3 text-sm text-muted">
                    &copy;2010 - 2024, Not Zerodha Broking Ltd.
                            All rights reserved.
                </p>
                <div>
                <i class="fa-brands fa-x-twitter me-3 fa-lg text-muted"></i>
                <i class="fa-brands fa-square-facebook me-3 fa-lg text-muted"></i>
                <i class="fa-brands fa-instagram me-3 fa-lg text-muted"></i>
               <i class="fa-brands fa-linkedin me-3 fa-lg text-muted"></i>
                </div>
                <hr/>
                <div>
                    <i class="fa-brands fa-youtube me-3 fa-lg text-muted"></i>
                    <i class="fa-brands fa-whatsapp me-3 fa-lg text-muted"></i>
                    <i class="fa-brands fa-telegram me-3 fa-lg text-muted"></i>
                </div>
            </div>

            <div className="col">
            <p className="text-muted"><b>Company</b></p>
            <a href='' style={{textDecoration:"none"}}>About</a><br></br>
            <a href=''  style={{textDecoration:"none"}}>Products</a><br></br>
            <a href=''  style={{textDecoration:"none"}}>Pricing</a><br></br>
            <a href=''  style={{textDecoration:"none"}}>Referral Program</a><br></br>
            <a href=''  style={{textDecoration:"none"}}>Careers</a><br></br>
            <a href=''  style={{textDecoration:"none"}}>Zerodha.tech</a><br></br>
            <a href=''  style={{textDecoration:"none"}}>Press & Media</a><br></br>
            <a href=''  style={{textDecoration:"none"}}>Zerodha cares</a><br></br>
            </div>

            <div className="col">
                <p className="text-muted"><b>Support</b></p>
                <a href=''  style={{textDecoration:"none"}}>Contact</a><br></br>
            <a href=''  style={{textDecoration:"none"}}>Support Portal</a><br></br>
            <a href=''  style={{textDecoration:"none"}}>Z-Connect blog</a><br></br>
            <a href=''  style={{textDecoration:"none"}}>List of charges</a><br></br>
            <a href=''  style={{textDecoration:"none"}}>Downloads & resources</a><br></br>
            </div>

            <div className="col">
                <p><b>Account</b></p>
                <a href=''  style={{textDecoration:"none"}}>Open an account</a><br></br>
            <a href=''  style={{textDecoration:"none"}}>Fund transfer</a><br></br>
            <a href=''  style={{textDecoration:"none"}}>60 day challenge</a><br></br>
            </div>
        </div>

        <div className="mt-5 text-muted font-size:12px" style={{fontSize:"14px"}}>
        <p className="text-mute">Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href='' style={{textDecoration:"none"}}>complaints@zerodha.com</a>, for DP related to <a href='' style={{textDecoration:"none"}}>dp@zerodha.com</a>. Please ensure you carefully read the Risk<br></br> Disclosure Document as prescribed by SEBI | ICF</p>

<p>Procedure to file a complaint on <a href='' style={{textDecoration:"none"}}>SEBI SCORES</a>SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy<br></br> redressal of the grievances</p>

<a href='' style={{textDecoration:"none"}}>Smart Online Dispute Resolution</a> | <a href='' style={{textDecoration:"none"}}>Grievances Redressal Mechanism</a><br></br><br></br>

<p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

<p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.<br></br><br></br>

"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please  <a href='' style={{textDecoration:"none"}}>create a ticket here</a>.</p>
</div>
<div className="text-center">
<a href=''  style={{textDecoration:"none"}} className="me-3">NSE</a>
<a href='' className="ml-3 me-3" style={{textDecoration:"none"}}>BSE</a>
<a href=''  style={{textDecoration:"none"}} className="me-3">MCX</a>
<a href=''  style={{textDecoration:"none"}} className="me-3">Terms & conditions</a>
<a href=''  style={{textDecoration:"none"}} className="me-3">Policies & procedures</a>
<a href=''  style={{textDecoration:"none"}} className="me-3">Privacy & policy</a>
<a href=''  style={{textDecoration:"none"}} className="me-3">Disclosure</a>
<a href=''  style={{textDecoration:"none"}} className="me-3">For investor's attentions</a>
<a href=''  style={{textDecoration:"none"}} className="me-3">Investor charter</a>
</div>

</div>
       </footer>
     );
}

export default Footer;