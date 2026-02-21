import React, { useState } from "react";

const Contact = () => {
    const [message, setMessage] = useState("");

    const handleClick = () => {
    setMessage("Thank you for contacting me!");
    };

    return (
    <section style={{ padding: "50px", textAlign: "center" }}>
        <h2>Contact Me</h2>
        <p>Email: your@email.com</p>
        <p>Phone: +1234567890</p>

        <button onClick={handleClick}>Send Message</button>

        {message && <p>{message}</p>}
    </section>
);
};

export default Contact;