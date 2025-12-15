import React from "react";
import '../styles/Home.css';
import FlipCard from '../components/FlipCard';

const Home = () => {
    const projects = [
        {
            title: "ObjMark",
            image: "/src/assets/obj-mark/Screenshot 2025-12-14 170312.png",
            description: "Annotate images for computer vision datasets using AI assistance offline. This mobile app leverages on-device machine learning to streamline the annotation process, making it faster and more efficient.",
            technologies: ["React Native", "Vertex AI", "Google ML-Kit", "Expo", "Google Cloud"],
            link: "#"
        },
        {
            title: "SortxPort",
            image: "/src/assets/sortxport/Screenshot 2025-12-14 170355.png",
            description: "Sort then export your vast image library with natural language queries in a controlled environment. Langchain LCEL-powered backend provides the ability to search, categorize, and organize images effortlessly.",
            technologies: ["React Native", "Typescript", "Langchain", "LCEL", "AWS", "Google ML-Kit"],
            link: "#"
        },
        {
            title: "PepsiCo Code Date Agent",
            image: "https://via.placeholder.com/600x400/708090/FFFDD0?text=Project+3",
            description: "Demo of a mildly agentic chain for analyzing packaging code dates live. The agent compares historical records, asseses code date, and determines what action to take for the least financial impact.",
            technologies: ["Scikit-learn", "Pandas", "Flask", "PostgreSQL"],
            link: "#"
        },
        {
            title: "AI Project 4",
            image: "https://via.placeholder.com/600x400/778899/FFFDD0?text=Project+4",
            description: "AI-powered automation system that streamlines workflows and enhances productivity. Combines multiple ML models for comprehensive solutions.",
            technologies: ["Keras", "Node.js", "GraphQL", "Redis"],
            link: "#"
        },
        {
            title: "Resume-AI",
            image: "/src/assets/resum-ai/Screenshot 2025-12-14 170601.png",
            description: "An AI-driven resume builder that helps users create professional resumes effortlessly. Utilizes NLP to optimize content and format for job applications.",
            technologies: ["React", "TensorFlow.js", "Express", "MongoDB", "Digital Ocean"],
            link: "#"
        }
    ];

    return (
        <div className="home-container">
            <section className="projects-section">
                <div className="projects-grid">
                    {projects.map((project, index) => {
                        // Determine position based on index for 5-card grid
                        let position: 'left' | 'center' | 'right' = 'center';
                        if (index === 0) position = 'left';
                        else if (index === 4) position = 'right';
                        else if (index === 1 || index === 2) position = 'center';
                        else if (index === 3) position = 'center';
                        
                        return (
                            <FlipCard
                                key={index}
                                title={project.title}
                                image={project.image}
                                description={project.description}
                                technologies={project.technologies}
                                link={project.link}
                                position={position}
                            />
                        );
                    })}
                </div>
            </section>

            <section className="intro-section">
                <div className="intro-content">
                    <div className="intro-text">
                        <div className="title-row">
                            <h1 className="name">Jacob Jones</h1>
                            <p className="title">Full-Stack AI Engineer</p>
                            <p className="subtitle">Packaging Machine Operator #37</p>
                        </div>
                        <p className="bio">
                            So eager to build that I regularly code on a mobile IDE during factory breaks. From React components to ReAct chains, I ship UIs and the agents behind them. With a strong foundation in AI and full-stack development, I focus on building practical, forward-looking systems that use modern tooling. I care about software that solves real problems and feels good to use. When I am not coding, I enjoy painting and teaching my kids.
                        </p>
                    </div>
                    <div className="avatar-frame">
                        <img 
                            src="/src/assets/20251106_182031.jpg" 
                            alt="Jacob Jones"
                            className="avatar-image"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;