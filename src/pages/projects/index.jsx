import React from "react";
import {BsInfoCircleFill} from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";


const Projects=()=>{
    return(
        <div>
            <section className="projects" id="projects">
            <PageHeaderContent headerText = "My Projects" icon = {<BsInfoCircleFill size={40}/>}/>
            </section>
        </div>
    )
}

export default Projects;