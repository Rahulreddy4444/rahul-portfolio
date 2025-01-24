import React from "react";
import { BsDownload } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {data} from "./utils";
import "./style.scss";
import {MdWork} from 'react-icons/md'


const Resume=()=>{
    const handleDownloadResume = () => {
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Rahul_Reddy_Resume.pdf";
        link.click();
    };

    return(
        <div>
            <section className="resume" id="resume">
            <PageHeaderContent headerText = "My Resume" icon = { <BsDownload
                            size={40}
                            style={{ cursor: "pointer" }}
                            onClick={handleDownloadResume}
                            title="Download Resume"
                        />}/>
            </section>
            <div className="timeline">
            <div className="timeline_education">
                    <h3 className="timeline_education_header-text">Education</h3>
                    <VerticalTimeline layout={'1-column'} lineColor="var( --yellow-theme-main-color)">
                        {
                            data.education.map((item,i) =>(
                                <VerticalTimelineElement key={i} className="timeline_experience_vertical-timeline-element" 
                                contentStyle={{background: 'none', color : 'var(--yellow-theme-sub-text-color)', border: '1.5px solid var(--yellow-theme-main-color)'}}
                                date= {item.date}
                                icon = {<MdWork/>}
                                iconStyle={{
                                    background: '#181818',
                                    color: 'var(--yellow-theme-main-color)'
                                }}
                                >
                                    <div className="vertical-timeline-element-title-wrapper">
                                        <h3>
                                            {item.title}
                                        </h3>
                                        
                                        <h4>
                                            {item.subTitle}
                                        </h4>
                                    </div>
                                    <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>
                                </VerticalTimelineElement>
                            ))
                        }
                    </VerticalTimeline>
                </div>
                <div className="timeline_experience">
                    <h3 className="timeline_experience_header-text">Achivements</h3>
                    <VerticalTimeline layout={'1-column'} lineColor="var( --yellow-theme-main-color)">
                        {
                            data.experience.map((item,i) =>(
                                <VerticalTimelineElement key={i} className="timeline_experience_vertical-timeline-element"
                                contentStyle={{background: 'none', color : 'var(--yellow-theme-sub-text-color)', border: '1.5px solid var(--yellow-theme-main-color)'}} 
                                date= {item.date}
                                icon = {<MdWork/>}
                                iconStyle={{
                                    background: '#181818',
                                    color: 'var(--yellow-theme-main-color)'
                                }}
                                >
                                    <div className="vertical-timeline-element-title-wrapper">
                                        <h3>
                                            {item.title}
                                        </h3>
                                        
                                        <h4>
                                            {item.subTitle}
                                        </h4>
                                    </div>
                                    <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>

                                </VerticalTimelineElement>
                            ))

                        }
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    )
}

export default Resume;