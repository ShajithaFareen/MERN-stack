import React from "react";
import styles from "./About.module.css";

const About = () => {
    return (
    <section className={styles.about}>
        <h2>About Me</h2>
        <p><strong>Education:</strong> B.Tech in Computer Science</p>

        <h3>Skills</h3>
        <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
            <li>Git & GitHub</li>
        </ul>
    </section>
    );
};

export default About;