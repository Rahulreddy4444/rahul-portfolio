import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import './style.scss';

const Home = () => {
    const navigate = useNavigate();

    const handleNavigateToContactPage = () => {
        navigate("./contact");
    };

    return (
        <section id="home" className="home">
            <div className="home_text-wrapper">
                <h1>
                    Hello, I'm Rahul Reddy
                    <br />
                    Software Developer
                </h1>
            </div>
            <Animate play duration={1.5} delay={1} start={{ transform: "translateY(550px)" }} end={{ transform: "translateX(0px)" }}>
                <div className="home_contact-me">
                    <button onClick={handleNavigateToContactPage}>Contact Me</button>
                </div>
                <div className="social-icons-wrapper">
                    <a 
                        href="https://www.linkedin.com/in/rahul-reddy-279559253" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <FaLinkedin size={40}/>
                    </a>
                    <a 
                        href="https://github.com/Rahulreddy4444" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <FaGithub size={40}/>
                    </a>
                </div>
            </Animate>
        </section>
    )
}

export default Home;