import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { DiReact, DiJsBadge  } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";


const personalDetils = [
    {
        label: "Name",
        value: "Rahul Reddy",
    },
    {
        label: "Age",
        value: "20",
    },
    {
        label: "Address",
        value: "India, Andhra Pradesh",
    },
    {
        label: "Email",
        value: "rahulreddy.4004@gmail.com",
    },
    {
        label: "Contact No.",
        value: "+91 9381656242",
    },
];

const jobSummary = "Aspiring and self-driven full-stack developer with hands-on experience in building dynamic and responsive web applications using modern technologies like React.js, Node.js, and PostgreSQL. With a proven track record demonstrated through projects such as 'Quiz Wizz' and 'Hostel Mess Management,' I excel in creating scalable and secure systems. Passionate about web development and artificial intelligence, I blend creativity with technical expertise to deliver efficient solutions. Strong in problem-solving with proficiency in C++, Java, and Python, and well-versed in data structures, algorithms, and OOPS."


const About = () => {
    return (
        <section className="about" id="about">
            <PageHeaderContent headerText="About Me" icon={<BsInfoCircleFill size={40} />} />

            <div className="about_content">
                <div className="about_content_personalwrapper">
                    <Animate play duration={1.5} delay={1} start={{ transform: "translateX(-900px)" }} end={{ transform: "translateX(0px)" }}>
                        <h3>Software Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>

                    <Animate play duration={1.5} delay={1} start={{ transform: "translateX(500px)" }} end={{ transform: "translateX(0px)" }}>
                        <h3 className="headerText">Personal Information</h3>
                        <ul>
                            {
                                personalDetils.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about_content_serviceswrapper">
                <Animate play duration={1.5} delay={1} start={{ transform: "translateX(600px)" }} end={{ transform: "translateX(0px)" }}>
                    <div className="about_content_serviceswrapper_innercontent">
                        <div>
                            <FaDev size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <DiJsBadge  size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <DiReact size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                    </div>
                </Animate>
                </div>
            </div>

        </section>
    )
}

export default About