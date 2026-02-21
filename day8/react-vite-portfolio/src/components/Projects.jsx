import { useState } from "react";

function Projects() {
    const [show, setShow] = useState(false);

    const projects = [
    { name: "MERN Blog App", desc: "Full-stack blogging platform using MERN." },
    { name: "Portfolio Website", desc: "Personal portfolio built with React." },
    { name: "E-commerce App", desc: "Online store with authentication." }
    ];

    return (
    <section id="projects" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="container">

        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
            My Projects
        </h2>

        {/* GRID LAYOUT */}
        <div
            style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px"
            }}
        >
            {projects.map((project, index) => (
            
            /* CARD STARTS HERE */
            <div
                key={index}
                style={{
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                backgroundColor: "white",
                transition: "0.3s"
            }}
            >
                <h3 style={{ marginBottom: "15px" }}>
                {project.name}
                </h3>

                {show && (
                <p style={{ marginBottom: "15px" }}>
                    {project.desc}
                </p>
                )}

                <button
                style={{
                    padding: "8px 15px",
                    backgroundColor: "#00adb5",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "5px"
                }}
                onClick={() => setShow(!show)}
                >
                {show ? "Show Less" : "Show More"}
                </button>
            </div>
            /* CARD ENDS HERE */

            ))}
        </div>

        </div>
    </section>
    );
}

export default Projects;