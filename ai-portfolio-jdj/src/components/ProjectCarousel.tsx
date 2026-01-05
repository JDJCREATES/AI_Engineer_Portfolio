import { useState, useMemo, useRef, useEffect } from 'react';
import FlipCard from './FlipCard';
import '../styles/ProjectCarousel.css';

interface TechnicalDetails {
  problemStatement?: string;
  issues?: string[];
  whatILearned?: string;
  differentNextTime?: string;
}

interface Project {
  title: string;
  sectionType?: string;
  status?: string;
  image: string;
  images?: string[]; // Multiple images for auto-scrolling
  technicalDetails?: TechnicalDetails;
  description: string;
  technologies: string[];
  link?: string;
  liveLink?: string;
  githubLink?: string;
  demoVideo?: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Group projects by section type
  const sections = useMemo(() => {
    const grouped: { [key: string]: Project[] } = {};
    projects.forEach(project => {
      const sectionType = project.sectionType || 'Other';
      if (!grouped[sectionType]) {
        grouped[sectionType] = [];
      }
      grouped[sectionType].push(project);
    });
    return Object.entries(grouped).map(([name, items]) => ({ name, items }));
  }, [projects]);

  const currentSection = sections[currentSectionIndex];

  const handlePrevious = () => {
    setCurrentSectionIndex((prev) => (prev > 0 ? prev - 1 : sections.length - 1));
  };

  const handleNext = () => {
    setCurrentSectionIndex((prev) => (prev < sections.length - 1 ? prev + 1 : 0));
  };

  // Handle mouse wheel scrolling with useEffect for non-passive listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        setCurrentSectionIndex((prev) => (prev < sections.length - 1 ? prev + 1 : 0));
      } else {
        setCurrentSectionIndex((prev) => (prev > 0 ? prev - 1 : sections.length - 1));
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [sections.length]);

  return (
    <div className="carousel-container" ref={containerRef}>
      <div className="carousel-header" onClick={handlePrevious}>
        <button
          className="carousel-nav-arrow carousel-nav-left"
          aria-label="Previous section"
        >
          ▲
        </button>
        <h2 className="carousel-section-title">{currentSection.name}</h2>
        <button
          className="carousel-nav-arrow carousel-nav-right"
          aria-label="Previous section"
        >
          ▲
        </button>
      </div>

      <div className="carousel-indicators">
        {sections.map((section, index) => (
          <button
            key={section.name}
            className={`carousel-indicator ${index === currentSectionIndex ? 'active' : ''}`}
            onClick={() => setCurrentSectionIndex(index)}
            aria-label={`Go to ${section.name}`}
          />
        ))}
      </div>

      <div className="carousel-content">
        <div className="projects-grid">
          {currentSection.items.map((project, index) => {
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
                status={project.status}
                image={project.image}
                images={project.images}
                description={project.description}
                technologies={project.technologies}
                demoVideo={project.demoVideo}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                technicalDetails={project.technicalDetails}
                position={position}
              />
            );
          })}
        </div>
      </div>

      <div className="carousel-footer" onClick={handleNext}>
        <button
          className="carousel-nav-arrow carousel-nav-left"
          aria-label="Next section"
        >
          ▼
        </button>
        <button
          className="carousel-nav-arrow carousel-nav-right"
          aria-label="Next section"
        >
          ▼
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;
