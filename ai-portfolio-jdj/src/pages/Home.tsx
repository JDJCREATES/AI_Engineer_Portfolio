import React from "react";
import '../styles/Home.css';
import FlipCard from '../components/FlipCard';

const Home = () => {


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
                                demoVideo={project.demoVideo}
                                githubLink={project.githubLink}
                                liveLink={project.liveLink}
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
                      <p className="subtitle">PMO #37</p>
                      </div>
                </div>
            </section>
        </div>
    );
}

export default Home;