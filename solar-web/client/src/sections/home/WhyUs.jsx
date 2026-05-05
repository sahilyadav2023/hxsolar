import { CheckCircle, ShieldCheck, Briefcase, FileCheck } from 'lucide-react';
import FadeIn from '../../components/animations/FadeIn';
import SlideUp from '../../components/animations/SlideUp';
import './WhyUs.css';

const benefits = [
  {
    icon: <FileCheck size={24} />,
    text: "Government-ready documentation & approvals"
  },
  {
    icon: <ShieldCheck size={24} />,
    text: "Full compliance with DISCOM & MNRE norms"
  },
  {
    icon: <Briefcase size={24} />,
    text: "One-stop solution from design to maintenance"
  },
  {
    icon: <CheckCircle size={24} />,
    text: "High-quality execution with performance guarantee"
  }
];

const WhyUs = () => {
  return (
    <section className="why-us section-padding bg-primary">
      <div className="container why-us-container">
        <div className="why-us-content">
          <FadeIn>
            <span className="subtitle text-accent">Why HX Solar</span>
            <h2 className="title text-light">The Benefits Of Going Solar With Us</h2>
            <p className="why-us-desc text-muted-light mt-6">
              We deliver high-performance solar assets, ensuring quality, safety, and customer satisfaction at every step.
            </p>
          </FadeIn>

          <div className="benefits-list mt-8">
            {benefits.map((benefit, index) => (
              <SlideUp key={index} delay={0.1 * index}>
                <div className="benefit-item">
                  <div className="benefit-icon-wrapper">
                    {benefit.icon}
                  </div>
                  <p className="benefit-text">{benefit.text}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>

        <div className="why-us-visual">
          <FadeIn delay={0.3}>
            <div className="image-frame">
              <img src="/benefits.jpg" alt="Solar panels in a field" className="why-us-image" />
              <div className="image-overlay"></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
