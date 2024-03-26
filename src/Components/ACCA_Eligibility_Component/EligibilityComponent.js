import { SlBookOpen } from "react-icons/sl";
import { CgNotes } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";

import './eligibilitycomponent.css'

function EligibilityComponent(){

    return (
        <div>
    
    <div className="container-div">

        <div className="container-11">
            <div className="container-11-heading">
                <h1></h1>
            </div>
           
           <h1>Levels</h1>
           <SlBookOpen /><span>Three (13 papers)</span>

                

        </div>
      
        <div className="container-22">
            <div className="container-22-heading">
                <h1></h1>
            </div>
            <h1>Duration</h1>
            <SlCalender /><span>6-30 months</span>
           
        </div>
        <div className="container-33">
            <div className="container-33-heading">
                <h1></h1>
            </div>
            <h1>Exams</h1>
            <CgNotes/><span>Quarterly (Online)</span>
         

        </div>
        <div className="container-4">
            <div className="container-4-heading">
                <h1></h1>
            </div>
            <h1>Exemptions</h1>
            <SlCalender /><span>Upto 9 papers</span>
         

        </div>
    </div>
        </div>
    )

}
export default EligibilityComponent;