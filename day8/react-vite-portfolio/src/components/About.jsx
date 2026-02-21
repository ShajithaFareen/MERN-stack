import styles from "../styles/About.module.css";

function About() {
    return (
    <section id="about" className={styles.about}>
        <h2>About Me</h2>
        <p><strong>Education:</strong> B.Tech CSE</p>

        <h3>Skills:</h3>
        <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>React, Node.js, Express</li>
        <li>MongoDB</li>
        </ul>
    </section>
    );
}
<div className="container"></div>
export default About;