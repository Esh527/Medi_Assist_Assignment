import { HiOutlineLightBulb } from "react-icons/hi";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiUserLocationFill } from "react-icons/ri";
import './chooseuscomponent.css'

function ChooseUsComponent(){
    return(
        <div>
        <h1>
        Why Choose Us?
        <div className="strip-con">
    <p className="strip"></p>
</div>
</h1>

<div className="container-div">

   <div className="container-one">
       <div className="container-one-heading">
       <HiOutlineLightBulb className="container-one-heading-logo"/>
           
           
       </div>
       <h1 className="con-heading-one">Expert Faculty</h1>
       <p className="con-para-one">Our qualified Faculty with significant practical experience guide students every step of the way</p>
      
      
           

   </div>
 
   <div className="container-two">
       <div className="container-two-heading">
       <FaPeopleGroup className="container-two-heading-logo"/>
           
       </div>
       <h1 className="con-heading-two">Complete Success Package</h1>
       <p className="con-para-two">Leading Exam Prep Destination with Video classes, Live sessions, Doubt resolution Forums, MCQs, Practice tests, Webinars.</p>
     
       
   </div>
   <div className="container-three">
       <div className="container-three-heading">
       <RiUserLocationFill className="container-three-heading-logo"/>
          
       </div>
       <h1 className="con-heading-three">Placements</h1>
    <p className="con-para-three">Resume building workshops, mock interviews and placement drives will help you impress the top employers and get your Dream Job.</p>

   </div>
</div>
   </div>
        
    )

}
export default ChooseUsComponent;