import React, { useState, useEffect, useRef } from "react";
import '../styles/FlipCard.css';

interface FlipCardProps {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
}

const FlipCard = ({ title, image, description, technologies, link }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    timeoutRef.current = setTimeout(() => {
      setIsFlipped(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      className={`flip-card ${isFlipped ? 'flipped' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <img src={image} alt={title} className="project-image" />
                <div className="project-title-overlay">
                    <h3>{title}</h3>
                </div>
            </div>
            <div className="flip-card-back">
                <div className="project-details">
                    <h3>{title}</h3>
                    <p className="project-description">{description}</p>
                    <div className="technologies">
                        {technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                    {link && (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                            View Project →
                        </a>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
}

export default FlipCard;