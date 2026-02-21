import React, { useState } from "react";

const Home = () => {
    const [showIntro, setShowIntro] = useState(true);

return (
    <section style={{ padding: "50px", textAlign: "center" }}>
        <h1 style={{ color: "#00adb5" }}>Your Name</h1>

        <h2>Frontend Developer</h2>

        {showIntro && (
        <p>
            I am a passionate developer who loves building modern web
            applications using React and JavaScript.
        </p>
        )}

        <button onClick={() => setShowIntro(!showIntro)}>
        {showIntro ? "Hide Intro" : "Show Intro"}
        </button>
    </section>
);
};

export default Home;