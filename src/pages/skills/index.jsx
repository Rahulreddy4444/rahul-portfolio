import React from "react";
import {BsInfoCircleFill} from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";

const Skills=()=>{
    return(
        <div>
            <section className="skills" id="skills">
            <PageHeaderContent headerText = "My Skills" icon = {<BsInfoCircleFill size={40}/>}/>
            </section>
        </div>
    )
}

export default Skills;