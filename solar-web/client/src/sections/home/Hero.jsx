import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Leaf, TrendingUp, Sun, Users, BarChart3, Award } from 'lucide-react';
import SlideUp from '../../components/animations/SlideUp';
import FadeIn from '../../components/animations/FadeIn';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Full-width background image */}
      <div className="hero-bg">
        <img src="/hero-bg.png" alt="" className="hero-bg-img" />
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <SlideUp>
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Powering a Sustainable Future
            </div>
          </SlideUp>
          
          <SlideUp delay={0.1}>
            <h1 className="hero-title">
              Smart Solar Solutions<br />for a Limitless<br /><span className="text-highlight">Tomorrow.</span>
            </h1>
          </SlideUp>
          
          <SlideUp delay={0.2}>
            <p className="hero-subtitle">
              End-to-end solar EPC solutions for residential, commercial, and utility-scale projects. Reduce your energy costs and switch to clean power today.
            </p>
          </SlideUp>
          
          <SlideUp delay={0.3}>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-hero-primary">
                Get Free Quote <ArrowRight size={18} />
              </Link>
              <a href="#calculator" className="btn btn-hero-outline">
                Calculate Savings <BarChart3 size={18} />
              </a>
            </div>
          </SlideUp>

          <SlideUp delay={0.4}>
            <div className="hero-social-proof">
              <div className="avatar-stack">
                <div className="avatar" style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}>
                  <Users size={14} color="#fff" />
                </div>
                <div className="avatar" style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}>
                  <Sun size={14} color="#fff" />
                </div>
                <div className="avatar" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
                  <Award size={14} color="#fff" />
                </div>
                <div className="avatar" style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }}>
                  <Zap size={14} color="#fff" />
                </div>
              </div>
              <div className="social-proof-text">
                <strong>50+</strong>
                <span>Happy Customers</span>
              </div>
            </div>
          </SlideUp>
        </div>

        {/* Floating cards positioned over the right side of the background */}
        <div className="hero-cards">
          <FadeIn delay={0.3}>
            {/* Clean Energy Card */}
            <div className="floating-card card-clean-energy">
              <div className="icon-wrapper-sm bg-accent-glow">
                <Leaf size={18} color="#22c55e" />
              </div>
              <div className="card-text">
                <strong>100% Clean Energy</strong>
                <span>Zero Emissions</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Stats Bar */}
      <SlideUp delay={0.5}>
        <div className="hero-stats-bar">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon-wrapper">
                  <Sun size={22} color="#22c55e" />
                </div>
                <div className="stat-info">
                  <h3 className="stat-value">50+</h3>
                  <p className="stat-label">Installations</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon-wrapper">
                  <Zap size={22} color="#22c55e" />
                </div>
                <div className="stat-info">
                  <h3 className="stat-value">100M+</h3>
                  <p className="stat-label">kWh Generated</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon-wrapper">
                  <BarChart3 size={22} color="#22c55e" />
                </div>
                <div className="stat-info">
                  <h3 className="stat-value">70%</h3>
                  <p className="stat-label">Cost Savings</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon-wrapper">
                  <Users size={22} color="#22c55e" />
                </div>
                <div className="stat-info">
                  <h3 className="stat-value">50+</h3>
                  <p className="stat-label">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideUp>
    </section>
  );
};

export default Hero;
