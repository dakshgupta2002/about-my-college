import React, {useState} from 'react'
import CSE from './faq/CSE'
import EEE from './faq/EEE'
import ECE from './faq/ECE'
import {Link} from "react-router-dom";

export default function Faq() {

    //select the branch
    const clicked = (b) => {
        changeBranch(b)
    }
    var branchFaq;
    const [branch, changeBranch] = useState("CSE")
    
    if (branch == "CSE"){
        branchFaq = <CSE/>
    }else if(branch == "EEE"){
        branchFaq = <EEE/>
    }else if (branch == "ECE"){
        branchFaq =  <ECE/>
    }


    return (
        <div className="container">
            <h1>Frequently Asked Questions</h1>
            <br/>

            <div className="container d-flex justify-content-around align-middle">
                <div className="dropdown">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Select Branch
                </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item" onClick={() => clicked("CSE")}>CSE</button>
                        <button className="dropdown-item" onClick={() => clicked("ECE")}>ECE</button>
                        <button className="dropdown-item" onClick={() => clicked("EEE")}>EEE</button>
                    </div>
                </div>

                <Link to="/qna">Ask your own questions!</Link>
            </div>
            {branchFaq}

        </div>
    )
}
