import { useEffect, useState } from 'react';
import '../styles/ExpandedCard.css';

interface TechnicalDetails {
  problemStatement?: string;
  issues?: string[];
  whatILearned?: string;
  differentNextTime?: string;
}

interface ExpandedCardProps {
  title: string;
  description: string;
  technologies: string[];
  demoVideo?: string;
  githubLink?: string;
  liveLink?: string;
  position: 'left' | 'center' | 'right';
  technicalDetails?: TechnicalDetails;
  onClose: () => void;
}

const ExpandedCard = ({ 
  title, 
  description, 
  technologies: _technologies, 
  demoVideo, 
  githubLink, 
  liveLink,
  position,
  technicalDetails,
  onClose 
}: ExpandedCardProps) => {
  const [expandPhase, setExpandPhase] = useState<'vertical' | 'horizontal'>('vertical');
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  useEffect(() => {
    // After vertical expansion, trigger horizontal
    const timer = setTimeout(() => {
      setExpandPhase('horizontal');
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`expanded-card-overlay ${expandPhase} position-${position}`} onClick={onClose}>
      <div 
        className={`expanded-card ${expandPhase} position-${position}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
        
        <div className="expanded-content">
          <div className="demo-section">
            {demoVideo ? (
              demoVideo.includes('youtube.com') || demoVideo.includes('youtu.be') ? (
                <iframe 
                  className="demo-video"
                  src={demoVideo}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ border: 'none' }}
                  title='demoVideoFrame'
                />
              ) : (
                <video className="demo-video" autoPlay loop muted playsInline>
                  <source src={demoVideo} type="video/mp4" />
                  Your browser does not support video.
                </video>
              )
            ) : (
              <div className="demo-placeholder">
                <p>Demo coming soon</p>
              </div>
            )}
          </div>

          <div className="details-section">
            <h2 className="expanded-title">{title}</h2>
            
            <div className="description-section">
              <div className={`description-content ${isDescriptionExpanded ? 'expanded' : 'collapsed'}`}>
                <p className="expanded-description">{description}</p>
                
                {technicalDetails && (
                  <div className="technical-details">
                    {technicalDetails.problemStatement && (
                      <div className="detail-item">
                        <h4>Problem</h4>
                        <p>{technicalDetails.problemStatement}</p>
                      </div>
                    )}
                    {technicalDetails.issues && technicalDetails.issues.length > 0 && (
                      <div className="detail-item">
                        <h4>Challenges</h4>
                        <ul>
                          {technicalDetails.issues.map((issue, idx) => (
                            <li key={idx}>{issue}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {technicalDetails.whatILearned && (
                      <div className="detail-item">
                        <h4>What I Learned</h4>
                        <p>{technicalDetails.whatILearned}</p>
                      </div>
                    )}
                    {technicalDetails.differentNextTime && (
                      <div className="detail-item">
                        <h4>Next Time</h4>
                        <p>{technicalDetails.differentNextTime}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <button 
                className="description-expand-btn"
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              >
                {isDescriptionExpanded ? '▲ Show Less' : '▼ Read More'}
              </button>
            </div>

            <div className="code-editor">
              <div className="editor-header">
                <div className="editor-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="editor-title">project.config.json</span>
              </div>
              <div className="editor-content">
                <pre>
                  <code>
                    <span className="code-line"><span className="code-bracket">{'{'}</span></span>
                    {githubLink && (
                      <span className="code-line">
                        <span className="code-key">  "repository"</span><span className="code-punctuation">: </span>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="code-value code-link">"{githubLink}"</a>
                        {liveLink && <span className="code-punctuation">,</span>}
                      </span>
                    )}
                    {liveLink && (
                      <span className="code-line">
                        <span className="code-key">  "live"</span><span className="code-punctuation">: </span>
                        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="code-value code-link">"{liveLink}"</a>
                      </span>
                    )}
                    <span className="code-line"><span className="code-bracket">{'}'}</span></span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpandedCard;