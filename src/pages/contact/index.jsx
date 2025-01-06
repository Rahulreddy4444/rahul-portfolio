import React from "react";
import {BsInfoCircleFill} from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";

const Contact=()=>{
    return(
        <div>
           <section className="contact" id="contact">
            <PageHeaderContent headerText = "My Contact" icon = {<BsInfoCircleFill size={40}/>}/>
            </section>
        </div>
    )
}

export default Contact;