import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Leaf, TrendingUp } from 'lucide-react';
import SlideUp from '../../components/animations/SlideUp';
import FadeIn from '../../components/animations/FadeIn';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
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
              Smart <span className="text-accent">Solar Solutions</span> for a Limitless Tomorrow.
            </h1>
          </SlideUp>
          
          <SlideUp delay={0.2}>
            <p className="hero-subtitle">
              End-to-end solar EPC solutions for residential, commercial, and utility-scale projects. Reduce your energy costs and switch to clean power today.
            </p>
          </SlideUp>
          
          <SlideUp delay={0.3}>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary hero-btn">
                Get Free Quote <ArrowRight size={18} />
              </Link>
              <Link to="/savings" className="btn btn-outline hero-btn">
                Calculate Savings
              </Link>
            </div>
          </SlideUp>

          <SlideUp delay={0.4}>
            <div className="hero-stats">
              <div className="stat-item">
                <h3 className="stat-value text-accent">10k+</h3>
                <p className="stat-label">Installations</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <h3 className="stat-value text-accent">100M+</h3>
                <p className="stat-label">kWh Generated</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <h3 className="stat-value text-accent">70%</h3>
                <p className="stat-label">Cost Savings</p>
              </div>
            </div>
          </SlideUp>
        </div>

        <div className="hero-visual">
          <FadeIn delay={0.2}>
            <div className="hero-image-wrapper">
              <img src="/hero.jpg" alt="Wind turbines and solar panels" className="hero-image" />
              
              <div className="floating-card top-right">
                <div className="icon-wrapper bg-accent">
                  <Leaf size={24} color="var(--color-primary)" />
                </div>
                <div className="card-text">
                  <strong>100% Clean</strong>
                  <span>Zero Emissions</span>
                </div>
              </div>
              
              <div className="floating-card bottom-left">
                <div className="icon-wrapper bg-primary">
                  <TrendingUp size={24} color="var(--color-accent)" />
                </div>
                <div className="card-text">
                  <strong>High ROI</strong>
                  <span>Fast payback</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
