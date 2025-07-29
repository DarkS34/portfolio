import experiences from "../../data/experiences.json";
import "./Experience.css"

const ExperienceSection = () => {
  return (
    <section id="experiences">
      <button className="experience-btn btn-left">
        <ArrowLeft />
      </button>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>

      <button className="experience-btn btn-right">
        <ArrowRight />
      </button>

      <div className="bottom-btn-container">
        <button className="bottom-experience-btn btn-left">
          <ArrowLeft />
        </button>
        <button className="bottom-experience-btn btn-right">
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

const ExperienceCard = ({ company, logoSvg, dates, description, responsibilities, web }) => {
  return (
    <article className="experience-card">
      <div className="logo-container" dangerouslySetInnerHTML={{ __html: logoSvg }} />
      <div className="job-info">
        <a href={web} target="_blank" rel="noopener noreferrer" className="company-name">
          {company}
        </a>
        <span className="working-interval">{dates}</span>
        <span className="job-description">{description}</span>
        <p className="resp-intro">Responsibilities:</p>
        <ul className="job-responsibilities">
          {responsibilities.map((item, idx) => (
            <li key={idx} className="responsibility">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="56" viewBox="0 96 960 960" width="56">
    <path
      fill="#f5f5f5"
      d="M560.615 802.153 333.847 575.385l226.768-227.153 32.615 32.614-194.154 194.539L593.23 769.538l-32.615 32.615Z"
    />
  </svg>
);

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="56" viewBox="0 96 960 960" width="56">
    <path
      fill="#f5f5f5"
      d="m375.385 802.153-32.615-32.615 194.154-194.153L342.77 380.846l32.615-32.614 226.768 227.153-226.768 226.768Z"
    />
  </svg>
);

export default ExperienceSection;
