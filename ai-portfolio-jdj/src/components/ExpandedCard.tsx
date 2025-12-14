import '.././ExpandedCardStyles.tsx';

const ExpandedCard = ( props) => {
  
  return (
    <section className="expanded-card-section">
      <div className="demo-video-container">
        <video className="demo-video">
          <source src={props.demoSrc1}  />
        </video>
      </div>
      <div className="project-details">
        <h2 className="project-title">
          {props.title}
        </h2>
        <p className="project-description">
          {props.description}
        </p>
      </div>
    </section>
  );
}