import { useState } from "react";

function Contact() {
    const [message, setMessage] = useState("");

    const handleClick = () => {
    setMessage("Thank you for contacting me!");
};

    return (
    <section id="contact" style={{ padding: "50px", textAlign: "center" }}>
        <h2>Contact Me</h2>
        <p>Email: shajitha@email.com</p>
        <p>Phone: 9876543210</p>

        <button onClick={handleClick}>Send Message</button>

        {message && <p>{message}</p>}
    </section>
);
}

export default Contact;