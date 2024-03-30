import React, { useState } from 'react';
import { MdEmojiEmotions } from "react-icons/md";
import { SlBookOpen } from "react-icons/sl";
import { PiTelevisionDuotone } from "react-icons/pi";
import { IoMdPeople } from "react-icons/io";
import { MdVerified } from "react-icons/md";

import './acca.css'

function Acca(){
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleRequestCallBack = () => {
        setShowSuccessMessage(true);
    };
    return (
        <div className="main-container">
            <div className="container-acca-18">
            <h1 className="acca-heading">Become ACCA in 18 months</h1>
            <p className="para">Acquire globally recognized accountancy qualification, ACCA (also called as Global CA), and get placed in top MNCs & Big4s.</p>

            <div className="container-div">

        <div className="container-111">
           <h1 className="head">Registered Users</h1>
            <MdEmojiEmotions /> <span className="span-data">3,11,807</span>
          </div>
      
        <div className="container-222">
            
            <h1 className="head">Courses Enrolled</h1>
            <SlBookOpen /> <span className="span-data">92,722</span>
           
        </div>
        <div className="container-333">
          
            <h1 className="head">Minutes Watched</h1>
            <PiTelevisionDuotone /> <span className="span-data">4,72,59,093</span>
          

        </div>
        <div className="container-444">
          
            <h1 className="head">Faculty</h1>
            <IoMdPeople /> <span className="span-data">8 Experts </span>
         

        </div>
       
          
    </div>
    <div className="bottom-container">
    <div className="download-brochure">
                    <span>Download Brochure</span>
                    
                    </div>
    <div className="silver-learning-partner">
                    <span className="span-silver-data">SILVER LEARNING PARTNER</span>
                    <div className="acca-container1">
                        <p>ACCA</p>
                    </div>
                    </div>
        </div>

    </div>
    
                
                    
    <div className="get-in-touch-container-1">
                        <div  className="get-in-touch-inner-container-1">
                        <h1 className="inner-container-heading">Aspiring to be ACCA? Get in touch with us!</h1>
                        
                        <input className="name" type="text" placeholder="Name" />
                        <input className="email" type="email" placeholder="Email-ID" />
                        <input className="mobile_number" type="text" placeholder="Mobile Number*" />
                       
                        <button className="button" onClick={handleRequestCallBack}>Request Call Back</button>
                        {showSuccessMessage && <p className="success-message"><MdVerified className="verified-logo"/>Your request has been submitted successfully!</p>}
                        </div>
                    </div>
        
        {/* <div className="acca-duration">
            
                <div className="details-view">
                <PiBookOpenTextLight className="details-icon"/>
                    <h1>Levels</h1>
                    
                    </div>
                    <div className="details-view">
                    <SlCalender className="details-icon"/>
                    <h1>Duration</h1>
                    </div>
                     <div className="details-view">
                <PiBookOpenTextLight className="details-icon"/>
                    <h1>Exams</h1>
                    </div>
                    <div className="details-view">
                <PiBookOpenTextLight className="details-icon"/>
                    <h1>Exemptions</h1>
                    </div>
                
                </div> */}
              
            
        
        </div>
    )

}

export default Acca;