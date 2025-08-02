import React from 'react';


function LeftSection({
    imageURL,
    productName,
    productDesription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-6 mt-3">
                    <img src={imageURL}/>
                </div>
                 <div className="col-6 p-2">
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    <div className="p-3"> 
                        <a href={tryDemo} style={{textDecoration:"none"}}>TryDemo <i class="fa-solid fa-arrow-right-long"></i></a>
                    <a href={learnMore} style={{marginLeft:"50px",textDecoration:"none"}}>learnMore <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className="mt-3"> 
                         <a href={googlePlay}><img src="media/Images/appstoreBadge.svg"/></a>
                    <a href={appStore} style={{marginLeft:"50px"}}><img src="media/Images/googlePlayBadge.svg"/></a>
                    </div>
                 </div>
            </div>
        </div>
     );
}

export default LeftSection;