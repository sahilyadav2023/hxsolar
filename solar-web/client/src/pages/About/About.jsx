import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Target, Sparkles, Shield, Users, Leaf, Award, ChevronRight, Zap, CheckCircle2 } from 'lucide-react';
import SlideUp from '../../components/animations/SlideUp';
import FadeIn from '../../components/animations/FadeIn';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* ===== Hero Banner with Background Image ===== */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <img src="/about-hero-bg.png" alt="" />
          <div className="about-hero-overlay"></div>
        </div>
        <div className="about-hero-content">
          <FadeIn>
            <div className="about-hero-badge">
              <span className="badge-dot"></span>
              About HX Solar
            </div>
          </FadeIn>
          <SlideUp delay={0.1}>
            <h1>Powering a Sustainable Future</h1>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p>
              Delivering reliable and high-performance solar solutions across India since our founding — one rooftop at a time.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* ===== Breadcrumb ===== */}
      <div className="about-breadcrumb-bar">
        <div className="container">
          <div className="breadcrumb-list">
            <Link to="/">Home</Link>
            <ChevronRight size={14} className="breadcrumb-separator" />
            <span className="breadcrumb-current">About Us</span>
          </div>
        </div>
      </div>

      {/* ===== Our Story Section ===== */}
      <section className="about-story">
        <div className="container">
          <div className="about-story-grid">
            <SlideUp>
              <div className="about-story-image">
                <img src="/about-team.png" alt="HX Solar team working on a rooftop solar installation" />
                <div className="about-story-image-accent"></div>
              </div>
            </SlideUp>
            <SlideUp delay={0.2}>
              <div className="about-story-content">
                <div className="section-label">
                  <Sparkles size={16} />
                  Our Story
                </div>
                <h2>Building India's Clean Energy Infrastructure</h2>
                <p>
                  Helioxara Solar Private Limited is a fast-growing solar EPC company delivering reliable and high-performance solar solutions across India. From the very beginning, our goal has been clear — make clean energy affordable and accessible to everyone.
                </p>
                <p>
                  We specialize in on-grid, off-grid, and hybrid systems ranging from small rooftop installations to large-scale power plants. Our engineering expertise and commitment to quality have made us a trusted partner for hundreds of businesses and homeowners.
                </p>
                <div className="about-story-highlight">
                  <div className="highlight-item">
                    <span className="highlight-value">50+</span>
                    <span className="highlight-label">Projects Completed</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-value">100MW+</span>
                    <span className="highlight-label">Capacity Installed</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-value">10K+</span>
                    <span className="highlight-label">Happy Customers</span>
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* ===== Vision / Mission / Purpose ===== */}
      <section className="about-pillars">
        <div className="container">
          <SlideUp>
            <div className="about-pillars-header">
              <div className="section-label">
                <Target size={16} />
                What Drives Us
              </div>
              <h2>Our Vision, Mission & Purpose</h2>
            </div>
          </SlideUp>

          <div className="pillars-grid">
            <SlideUp delay={0.1}>
              <div className="pillar-card">
                <div className="pillar-icon vision-icon">
                  <Eye size={28} color="#22c55e" />
                </div>
                <h3>Vision</h3>
                <p>
                  To be a trusted national leader in clean energy and accelerate India's transition to renewable power — creating a greener, more sustainable world for future generations.
                </p>
              </div>
            </SlideUp>

            <SlideUp delay={0.2}>
              <div className="pillar-card">
                <div className="pillar-icon mission-icon">
                  <Target size={28} color="#3b82f6" />
                </div>
                <h3>Mission</h3>
                <ul>
                  <li>
                    <CheckCircle2 size={18} color="#22c55e" />
                    Deliver high-performance solar assets with cutting-edge technology
                  </li>
                  <li>
                    <CheckCircle2 size={18} color="#22c55e" />
                    Ensure uncompromising quality, safety, and customer satisfaction
                  </li>
                  <li>
                    <CheckCircle2 size={18} color="#22c55e" />
                    Make clean energy affordable and accessible for every Indian
                  </li>
                </ul>
              </div>
            </SlideUp>

            <SlideUp delay={0.3}>
              <div className="pillar-card">
                <div className="pillar-icon purpose-icon">
                  <Sparkles size={28} color="#f59e0b" />
                </div>
                <h3>Our Purpose</h3>
                <p>
                  We aim to create long-term impact through clean energy by reducing carbon emissions, empowering communities, and building future-ready infrastructure that stands the test of time.
                </p>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* ===== Core Values ===== */}
      <section className="about-values">
        <div className="container">
          <SlideUp>
            <div className="about-values-header">
              <div className="section-label">
                <Award size={16} />
                Our Principles
              </div>
              <h2>Core Values That Define Us</h2>
            </div>
          </SlideUp>

          <div className="values-grid">
            <SlideUp delay={0.1}>
              <div className="value-card">
                <div className="value-icon">
                  <Shield size={24} color="#22c55e" />
                </div>
                <h4>Quality First</h4>
                <p>We use only premium components and follow industry best practices to deliver solar solutions that last decades.</p>
              </div>
            </SlideUp>

            <SlideUp delay={0.15}>
              <div className="value-card">
                <div className="value-icon">
                  <Users size={24} color="#22c55e" />
                </div>
                <h4>Customer Focus</h4>
                <p>Every project is tailored to the customer's specific needs, with transparent communication from start to finish.</p>
              </div>
            </SlideUp>

            <SlideUp delay={0.2}>
              <div className="value-card">
                <div className="value-icon">
                  <Leaf size={24} color="#22c55e" />
                </div>
                <h4>Sustainability</h4>
                <p>We are committed to environmental stewardship and minimizing our ecological footprint in every project we undertake.</p>
              </div>
            </SlideUp>

            <SlideUp delay={0.25}>
              <div className="value-card">
                <div className="value-icon">
                  <Zap size={24} color="#22c55e" />
                </div>
                <h4>Innovation</h4>
                <p>We continuously adopt the latest solar technologies and engineering practices to maximize energy output and efficiency.</p>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="about-cta">
        <div className="container">
          <SlideUp>
            <div className="about-cta-box">
              <h2>Ready to Go Solar?</h2>
              <p>Join thousands of happy customers who have made the switch to clean, affordable solar energy with HX Solar.</p>
              <Link to="/contact" className="about-cta-btn">
                Get Your Free Quote <ArrowRight size={18} />
              </Link>
            </div>
          </SlideUp>
        </div>
      </section>
    </div>
  );
};

export default About;
