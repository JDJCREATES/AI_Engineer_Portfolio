import React, { useState, useEffect, useRef } from "react";
import '../styles/FlipCard.css';
import ExpandedCard from './ExpandedCard';

interface TechnicalDetails {
  problemStatement?: string;
  issues?: string[];
  whatILearned?: string;
  differentNextTime?: string;
}

interface FlipCardProps {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
  demoVideo?: string;
  githubLink?: string;
  liveLink?: string;
  position?: 'left' | 'center' | 'right';
  technicalDetails?: TechnicalDetails;
}

const FlipCard = ({ title, image, description, technologies, link, demoVideo, githubLink, liveLink, position = 'center', technicalDetails }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
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
    <>
      <div 
        className={`flip-card ${isFlipped ? 'flipped' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
          <div className="flip-card-inner">
              <div className="flip-card-front">
                  <img 
                      src={image} 
                      alt={title} 
                      className="project-image" 
                      loading="lazy"
                      decoding="async"
                  />
                  <div className="project-title-overlay">
                      <h3>{title}</h3>
                  </div>
              </div>
              <div className="flip-card-back" onClick={() => setIsExpanded(true)}>
                  <div className="project-details">
                      <h3>{title}</h3>
                      <div className="technologies">
                          {technologies.map((tech, index) => (
                              <span key={index} className="tech-tag">{tech}</span>
                          ))}
                      </div>
                      <button 
                          onClick={(e) => {
                              e.stopPropagation();
                              setIsExpanded(true);
                          }}
                          className="project-link"
                      >
                          View Project
                      </button>
                  </div>
              </div>
          </div>
      </div>
      
      {isExpanded && (
          <ExpandedCard
              title={title}
              description={description}
              technologies={technologies}
              demoVideo={demoVideo}
              githubLink={githubLink}
              liveLink={liveLink}
              position={position}
              technicalDetails={technicalDetails}
              onClose={() => setIsExpanded(false)}
          />
      )}
    </>
  );
}

export default FlipCard;