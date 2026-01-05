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
  status?: string;
  image: string;
  images?: string[]; // Multiple images for auto-scrolling
  description: string;
  technologies: string[];
  link?: string;
  demoVideo?: string;
  githubLink?: string;
  liveLink?: string;
  position?: 'left' | 'center' | 'right';
  technicalDetails?: TechnicalDetails;
}

const FlipCard = ({ title, status, image, images, description, technologies, link, demoVideo, githubLink, liveLink, position = 'center', technicalDetails }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const imageIntervalRef = useRef<number | null>(null);
  const animationTimeoutRef = useRef<number | null>(null);

  // Auto-scroll images if multiple images provided
  useEffect(() => {
    if (images && images.length > 1) {
      const cycleImages = () => {
        // Start pan animation
        setIsAnimating(true);
        
        // After pan completes (5s), pause at right position for 2s, then switch to next image
        animationTimeoutRef.current = setTimeout(() => {
          // Pause before switching image (keep isAnimating true to stay at right position)
          setTimeout(() => {
            setIsAnimating(false);
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            
            // Small delay to reset position before next animation starts
            setTimeout(() => {
              setIsAnimating(true);
            }, 50);
          }, 2000);
        }, 5000);
      };

      // Initial cycle
      cycleImages();
      
      // Repeat every 7 seconds (5s animation + 2s pause)
      imageIntervalRef.current = setInterval(cycleImages, 7000);

      return () => {
        if (imageIntervalRef.current) {
          clearInterval(imageIntervalRef.current);
        }
        if (animationTimeoutRef.current) {
          clearTimeout(animationTimeoutRef.current);
        }
      };
    }
  }, [images, currentImageIndex]);

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
      if (imageIntervalRef.current) {
        clearInterval(imageIntervalRef.current);
      }
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  const currentImage = images && images.length > 0 ? images[currentImageIndex] : image;

  return (
    <>
      <div 
        className={`flip-card ${isFlipped ? 'flipped' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
          <div className="flip-card-inner">
              <div className="flip-card-front">
                  {status && (
                      <div className={`status-pill status-${status}`}>
                          {status.replace(/-/g, ' ').toUpperCase()}
                      </div>
                  )}
                  <img 
                      src={currentImage} 
                      alt={title} 
                      className={`project-image ${isAnimating ? 'panning' : ''}`}
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