import React from "react";
import {BsInfoCircleFill} from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";

const About=()=>{
    return(
        <section className="about" id="about">
            <PageHeaderContent headerText = "About Me" icon = {<BsInfoCircleFill size={40}/>}/>
        </section>
    )
}

export default About