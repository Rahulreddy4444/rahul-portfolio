import React from "react";
import { IoIosContact } from "react-icons/io";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./style.scss";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <PageHeaderContent headerText="My Contact" icon={<IoIosContact size={40} />} />
            <div className="contact_content">
                <Animate play duration={1} delay={0} start={{ transform: "translateX(-200px)" }} end={{ transform: "translate(0px)" }}>
                    <h3 className="contact_content_header-text"> Let's Connect</h3>
                </Animate>
                <Animate play duration={1} delay={0} start={{ transform: "translateX(200px)" }} end={{ transform: "translate(0px)" }}>
                    <div className="contact_content_form">

                        <div className="contact_content_form_controlswrapper">
                            <div>
                                <input name="name" className="inputName" type="text" required />
                                <label htmlFor="name" className="nameLabel"> Name </label>
                            </div>
                            <div>
                                <input name="email" className="inputEmail" type="text" required/>
                                <label htmlFor="email" className="emailLabel"> Email </label>
                            </div>
                            <div>
                                <textarea rows="5" name="description" className="inputDescription" type="text" required/>
                                <label htmlFor="description" className="descriptionLabel"> Description </label>
                            </div>
                        </div>
                    </div>
                    <button>Submit</button>
                </Animate>
            </div>
        </section>
    )
}

export default Contact;