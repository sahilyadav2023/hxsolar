import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import FadeIn from '../../components/animations/FadeIn';
import SlideUp from '../../components/animations/SlideUp';
import './ProjectsPreview.css';

const projects = [
  {
    id: '01',
    title: 'Rooftop Solar Installations',
    location: 'Residential & Commercial',
    image: '/projects.png'
  },
  {
    id: '02',
    title: 'Industrial Ground Mount',
    location: 'Large Scale Facilities',
    image: '/benefits.png'
  },
  {
    id: '03',
    title: 'Utility Scale Solar Plants',
    location: 'Grid-Connected Farms',
    image: '/hero.png'
  },
  {
    id: '04',
    title: 'PM-KUSUM Projects',
    location: 'Government Initiatives',
    image: '/projects.png'
  }
];

const ProjectsPreview = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="projects-preview section-padding">
      <div className="container">
        <div className="section-header text-center">
          <FadeIn>
            <span className="subtitle text-accent">Our Work</span>
            <h2 className="title">Success Stories</h2>
          </FadeIn>
        </div>

        <div className="projects-container mt-12">
          <div className="projects-list">
            {projects.map((project, index) => (
              <SlideUp key={project.id} delay={0.1 * index}>
                <div 
                  className={`project-item ${activeProject === index ? 'active' : ''}`}
                  onClick={() => setActiveProject(index)}
                >
                  <div className="project-header">
                    <span className="project-id">{project.id}</span>
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                  <div className="project-icon">
                    <ArrowRight className={`arrow ${activeProject === index ? 'active' : ''}`} />
                  </div>
                </div>
                {activeProject === index && (
                  <div className="project-content-mobile d-block-md">
                    <img src={project.image} alt={project.title} className="mobile-project-img" />
                    <p className="mobile-project-loc">{project.location}</p>
                  </div>
                )}
              </SlideUp>
            ))}
          </div>

          <div className="project-visual d-none-md">
            <FadeIn>
              <div className="project-image-wrapper">
                <img 
                  src={projects[activeProject].image} 
                  alt={projects[activeProject].title} 
                  className="project-main-image"
                />
                <div className="project-info-overlay">
                  <h4>{projects[activeProject].title}</h4>
                  <p>{projects[activeProject].location}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
