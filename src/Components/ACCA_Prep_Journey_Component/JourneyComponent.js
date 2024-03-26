import React, { useState } from 'react';
import { MdVerified } from "react-icons/md";
import './journeycomponent.css';

// function JourneyComponent() {
//     const [showSuccessMessage, setShowSuccessMessage] = useState(false);

//     const handleRequestCallBack = () => {
//         setShowSuccessMessage(true);
//     };

//     return (
//         <div className="prep-journey-container">
//             <div>
//                 <h1>Kick off your ACCA Prep journey with IndigoLearn</h1>
//                 <p>Sign-in and get instant access to our FREE Courses.</p>
//                 <div className="silver-learning-partner">
//                     <span>SILVER LEARNING PARTNER</span>
//                     <div className="acca-container">
//                         <p>ACCA</p>
//                     </div>
//                     <div className="get-in-touch-container">
//                         <h1>Aspiring to be ACCA? Get in touch with us!</h1>
//                         <input type="text" placeholder="Mobile Number*" />
//                         <input type="email" placeholder="Email-ID" />
//                         <input type="text" placeholder="Current Qualification" />
//                         <input type="text" placeholder="Interested in" />
//                         <button onClick={handleRequestCallBack}>Request Call Back</button>
//                         {showSuccessMessage && <p className="success-message">Your request has been submitted successfully!</p>}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

function JourneyComponent(){
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleRequestCallBack = () => {
        setShowSuccessMessage(true);
    };
    return (
        <div className="main-container">
            <div className="container-acca-18">
            <h1 className="container-acca-head">Kick off your ACCA Prep journey with IndigoLearn</h1>
            <p className="para">Sign-in and get instant access to our FREE Courses.</p>

            <div className="container-div">


       
          
    </div>
    <div className="bottom-container">
    <div className="silver-learning-partner">
                    <span>SILVER LEARNING PARTNER</span>
                    <div className="acca-container1">
                        <p>ACCA</p>
                    </div>
                    </div>
        </div>

    </div>
    
                
                    
    <div className="get-in-touch-container-1">
                        <div  className="get-in-touch-inner-container-1">
                        <h1 className="get-in-touch-inner-container-heading">Aspiring to be ACCA? Get in touch with us!</h1>
                        <input className="mobile_number" type="text" placeholder="Mobile Number*" />
                        <input className="email" type="email" placeholder="Email-ID" />
                        <input className="name" type="text" placeholder="Current Qualification" />
                       <input className="interested" type="text" placeholder="Interested in" />
                        <button className="button" onClick={handleRequestCallBack}>Request Call Back</button>
                        {showSuccessMessage && <p className="success-message"><MdVerified className="verified-logo"/>Your request has been submitted successfully!</p>}
                        </div>
                    </div>
        
        
              
            
        
        </div>
    )

}

export default JourneyComponent;
