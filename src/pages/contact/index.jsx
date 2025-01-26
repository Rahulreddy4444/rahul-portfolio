import React from "react";
import { IoIosContact } from "react-icons/io";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./style.scss";

const Contact = () => {
    const [result, setResult] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false); 

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("");
        setIsSubmitting(true); 
        const formData = new FormData(event.target);

        formData.append("access_key", "d6158adc-b205-4cde-ab09-4b363669884d");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                event.target.reset();
            } else {
                console.error("Error", data);
                setResult(data.message || "Failed to submit the form.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setResult("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false); 
        }
    };

    return (
        <section className="contact" id="contact">
            <PageHeaderContent headerText="My Contact" icon={<IoIosContact size={40} />} />
            <div className="contact_content">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{ transform: "translateX(-200px)" }}
                    end={{ transform: "translate(0px)" }}
                >
                    <h3 className="contact_content_header-text">Let's Connect</h3>
                </Animate>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{ transform: "translateX(200px)" }}
                    end={{ transform: "translate(0px)" }}
                >
                    <form className="contact_content_form" onSubmit={onSubmit}>
                        <div className="contact_content_form_controlswrapper">
                            <div>
                                <input
                                    name="name"
                                    className="inputName"
                                    type="text"
                                    required
                                    disabled={isSubmitting} 
                                />
                                <label htmlFor="name" className="nameLabel">
                                    Name
                                </label>
                            </div>
                            <div>
                                <input
                                    name="email"
                                    className="inputEmail"
                                    type="email"
                                    required
                                    disabled={isSubmitting}
                                />
                                <label htmlFor="email" className="emailLabel">
                                    Email
                                </label>
                            </div>
                            <div>
                                <textarea
                                    rows="5"
                                    name="description"
                                    className="inputDescription"
                                    required
                                    disabled={isSubmitting} 
                                />
                                <label htmlFor="description" className="descriptionLabel">
                                    Description
                                </label>
                            </div>
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                    {result && (
                        <p className={`result-message ${result.includes("Successfully") ? "success" : "error"}`}>
                            {result}
                        </p>
                    )}
                </Animate>
            </div>
        </section>
    );
};

export default Contact;
