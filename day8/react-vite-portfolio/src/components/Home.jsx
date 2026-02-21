import { useState } from "react";

function Home() {
    const [showMore, setShowMore] = useState(false);

    return (
    <section id="home">
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
        <div>
            <h1 style={{ color: "#00adb5", fontSize: "48px" }}>
            Hi, I'm Shajitha Fareen
            </h1>

            <h3 style={{ marginTop: "10px" }}>
            B.Tech Computer Science Engineer
            </h3>

            <p style={{ marginTop: "20px", maxWidth: "500px" }}>
            Passionate MERN Stack Developer building modern web applications.
            </p>

            {showMore && (
            <p style={{ marginTop: "10px", maxWidth: "500px" }}>
                I am a fresher looking for opportunities to contribute to real-world projects and grow as a full-stack developer.
            </p>
            )}

            <button
            style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}
            onClick={() => setShowMore(!showMore)}
            >
            {showMore ? "Show Less" : "Show More"}
            </button>
        </div>

        {/* Right Side (Profile Placeholder) */}
        <div>
            <div style={{
            width: "250px",
            height: "250px",
            backgroundColor: "#00adb5",
            borderRadius: "50%"
            }}></div>
        </div>

        </div>
    </section>
);
}

export default Home;