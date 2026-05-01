import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SlideUp from '../../components/animations/SlideUp';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section bg-accent">
      <div className="container">
        <SlideUp>
          <div className="cta-content">
            <h2 className="cta-title">Ready to Go Solar?</h2>
            <p className="cta-desc">
              Switch to clean, reliable, and cost-effective energy today. Our experts are ready to design the perfect system for you.
            </p>
            <Link to="/contact" className="btn btn-primary cta-btn">
              Get Free Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default CTA;
