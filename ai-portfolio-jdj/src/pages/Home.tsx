import React from "react";
import '../styles/Home.css';
import ProjectCarousel from '../components/ProjectCarousel';
import projectsData from '../data/projects-data.json';

const Home = () => {
    const projects = projectsData;

    return (
        <div className="home-container">
            <section className="projects-carousel-section">
                <ProjectCarousel projects={projects} />
            </section>

            <section className="intro-section">
                <div className="intro-content">
                    <div className="intro-text">
                        <div className="title-row">
                            <h1 className="name">Jacob Jones</h1>
                            <p className="title">Full-Stack AI Engineer</p>
                        </div>
                        <p className="bio">
                            So eager to build that I regularly code on a mobile IDE during factory breaks. From React components to ReAct chains, I ship UIs and the agents behind them. With a strong foundation in AI and full-stack development, I focus on building practical, forward-looking systems that use modern tooling. I care about software that solves real problems and feels good to use. When I am not coding, I enjoy painting and teaching my kids.
                        </p>
                    </div>
                    <div className="intro-avatar">
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
                </div>
            </section>
        </div>
    );
}

export default Home;