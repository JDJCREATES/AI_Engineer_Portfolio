import React from "react";
import '../styles/Home.css';
import FlipCard from '../components/FlipCard';

const Home = () => {
    const projects = [
        {
            title: "Obj Mark",
            image: "https://via.placeholder.com/600x400/708090/FFFDD0?text=Project+1",
            description: "Annotate images for computer vision datasets using AI assistance offline. This mobile app leverages on-device machine learning to streamline the annotation process, making it faster and more efficient.",
            technologies: ["React Native", "Vertex AI", "Google ML-Kit", "Expo", "Google Cloud"],
            link: "#"
        },
        {
            title: "SortxPort",
            image: "https://via.placeholder.com/600x400/778899/FFFDD0?text=Project+2",
            description: "Sort then export your vast image library with natural language queries in a controlled environment. Langchain LCEL-powered backend provides the ability to search, categorize, and organize images effortlessly.",
            technologies: ["React Native", "Typescript", "Langchain", "LCEL", "AWS", "Google ML-Kit"],
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
                    <div className="intro-text">
                        <div className="title-row">
                            <h1 className="name">Jacob Jones</h1>
                            <p className="title">Full-Stack AI Engineer</p>
                            <p className="title">Packaging Machine Operator #37</p>
                        </div>
                        <p className="bio">
                            So eager to build I regularly code on a mobile IDE during lunch breaks. With a strong foundation in AI and machine learning, I specialize in developing innovative solutions that leverage cutting-edge technologies. My passion lies in creating applications that not only solve complex problems but also enhance user experiences. When I'm not coding, I enjoy painting and teaching my kids.
                        </p>
                    </div>
                    <div className="avatar-frame">
                        <img 
                            src="/src/assets/20251106_182031.jpg" 
                            alt="Jacob Jones"
                            className="avatar-image"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;