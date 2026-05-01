import { Home, Building2, Battery, Zap } from 'lucide-react';
import FadeIn from '../../components/animations/FadeIn';
import SlideUp from '../../components/animations/SlideUp';
import './ServicesPreview.css';

const services = [
  {
    icon: <Home size={32} />,
    title: 'Solar EPC',
    description: 'Turnkey solutions including design, procurement, installation, and commissioning.'
  },
  {
    icon: <Zap size={32} />,
    title: 'Operations & Maintenance',
    description: 'Preventive and breakdown maintenance with real-time monitoring and optimization.'
  },
  {
    icon: <Building2 size={32} />,
    title: 'Solar Trading & Components',
    description: 'Supply of high-quality solar components from trusted Tier-1 partners.'
  },
  {
    icon: <Battery size={32} />,
    title: 'Energy Storage & Hybrid',
    description: 'Hybrid solar systems with seamless energy storage integration.'
  }
];

const ServicesPreview = () => {
  return (
    <section className="services-preview section-padding">
      <div className="container">
        <div className="section-header text-center">
          <FadeIn>
            <span className="subtitle text-accent">Our Services</span>
            <h2 className="title">What We Do</h2>
          </FadeIn>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <SlideUp key={index} delay={0.1 * (index + 1)}>
              <div className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <div className="service-link">
                  <span>Learn more</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
