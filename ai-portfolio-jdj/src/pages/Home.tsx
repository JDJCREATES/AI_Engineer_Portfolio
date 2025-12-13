import React from "react";
import '../styles/Home.css';
import FlipCard from '../components/FlipCard';

const Home = () => {
    const projects = [
        {
            title: "Obj Mark",
            image: "https://via.placeholder.com/600x400/708090/FFFDD0?text=Project+1",
            description: "A cutting-edge AI solution that leverages machine learning to solve complex problems. This project demonstrates advanced techniques in natural language processing and computer vision.",
            technologies: ["React Native", "Vertex AI", "Google ML-Kit", "Expo", "Google Cloud"],
            link: "#"
        },
        {
            title: "AI Project 2",
            image: "https://via.placeholder.com/600x400/778899/FFFDD0?text=Project+2",
            description: "An innovative application of deep learning for predictive analytics. Features real-time data processing and intelligent decision-making capabilities.",
            technologies: ["PyTorch", "FastAPI", "Docker", "AWS"],
            link: "#"
        },
        {
            title: "AI Project 3",
            image: "https://via.placeholder.com/600x400/708090/FFFDD0?text=Project+3",
            description: "Machine learning pipeline for automated data analysis and insights generation. Implements state-of-the-art algorithms for pattern recognition.",
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
            image: "https://via.placeholder.com/600x400/708090/FFFDD0?text=Resume-AI",
            description: "An AI-driven resume builder that helps users create professional resumes effortlessly. Utilizes NLP to optimize content and format for job applications.",
            technologies: ["React", "TensorFlow.js", "Express", "MongoDB", "Digital Ocean"],
            link: "#"
        }
    ];

    return (
        <div className="home-container">
            <section className="projects-section">
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <FlipCard
                            key={index}
                            title={project.title}
                            image={project.image}
                            description={project.description}
                            technologies={project.technologies}
                            link={project.link}
                        />
                    ))}
                </div>
            </section>

            <section className="intro-section">
                <div className="intro-content">
                    <h1 className="name">Jacob Jones</h1>
                    <p className="title">AI Engineer - Packaging Machine Operator</p>
                </div>
            </section>
        </div>
    );
}

export default Home;