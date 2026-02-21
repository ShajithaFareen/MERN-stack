import React, { useState } from "react";

const Projects = () => {
    const [showMore, setShowMore] = useState(false);

    const projects = [
    {
        name: "Portfolio Website",
        description: "A personal portfolio built using React and Vite.",
    },
    {
        name: "Todo App",
        description: "A task manager app using React hooks.",
    },
    {
        name: "Weather App",
        description: "Weather app using API integration.",
    },
    ];

    return (
    <section style={{ padding: "50px" }}>
        <h2>My Projects</h2>

        {projects.map((project, index) => (
        <div
            key={index}
            style={{
            border: "1px solid #ccc",
            padding: "20px",
            margin: "20px 0",
        }}
        >
            <h3>{project.name}</h3>

            {showMore && <p>{project.description}</p>}

        <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Show More"}
            </button>
        </div>
        ))}
    </section>
);
};

export default Projects;