import './accalearn.css'

function AccaLearn(){

    return (
        <div>
             <h1>
        What will you learn in ACCA?
        <div className="strip-con">
    <p className="strip"></p>
</div>
    </h1>
    <div className="container-div">


        <div className="container-1">
            <div className="container-1-heading">
                <h1 className="heading1">3 papers Knowledge Level</h1>
            </div>
          <div className="list-items">
          <ul>
                <li>Business and Technology (BT)</li>
                <li>Management Accounting (MA)</li>
                <li>Financial Accounting (FA)</li>
            </ul>
            </div>
           
            <div className="container-1-heading">
                <h1 className="heading1">3 papers</h1>
            </div>
                

        </div>
      
        <div className="container-2">
            <div className="container-2-heading">
                <h1 className="heading2">6 papers skill Level</h1>
            </div>
            <ul>
                <li>Corporate and Business Law (LW)</li>
                <li>Performance Management (PM)</li>
                <li>Taxation (TX)</li>
                <li>Financial Reporting (FR)</li>
                <li>Audit and Assurance (AA)</li>
                <li>Financial Management (FM)</li>
            </ul>
            <div className="container-2-heading">
                <h1 className="heading2">6 papers</h1>
            </div>
        </div>
        <div className="container-3">
            <div className="container-3-heading">
                <h1 className="heading3">6 papers skill Level</h1>
            </div>
            <div>
                <h1 className="con-3-head1">Compulsory</h1>
                <ul>
                    <li>SBL - Strategic Business Leader</li>
                    <li>SBR - Strategic Business Reporting</li>
                </ul>
            </div>
            <div>
                <h1 className="con-3-head2">Two out of the following</h1>
                <ul className="list-items">
                    <li>Advanced Financial Management (AFM)</li>
                    <li>Advanced Performance Management (APM)</li>
                    <li>Advanced Taxation (ATX)</li>
                    <li>Advanced Audit and Assurance (AAA)</li>
                </ul>

                <div className="container-2-heading">
                <h1 className="heading3">4 papers</h1>
            </div>
            </div>

        </div>
    </div>
        </div>
    )

}
export default AccaLearn;