import { useState } from 'react';
import { Leaf, TrendingDown, Sun } from 'lucide-react';
import FadeIn from '../../components/animations/FadeIn';
import SlideUp from '../../components/animations/SlideUp';
import './Impact.css';

const Impact = () => {
  const [billAmount, setBillAmount] = useState(5000);

  // Simplified savings calculation logic for demonstration
  const monthlySavings = (billAmount * 0.7).toFixed(0);
  const yearlySavings = (monthlySavings * 12).toLocaleString();
  const treesPlanted = Math.round((billAmount / 1000) * 2.5);

  return (
    <section className="impact section-padding">
      <div className="container">
        <div className="impact-grid">
          
          <div className="impact-content">
            <FadeIn>
              <span className="subtitle text-accent">Our Impact</span>
              <h2 className="title">Driving Clean Energy Impact</h2>
              <p className="impact-desc mt-6">
                Transitioning to solar isn't just good for the planet—it's a smart financial decision. Our systems are designed for long-term ROI and immediate utility bill reduction.
              </p>
            </FadeIn>

            <div className="impact-features mt-8">
              <SlideUp delay={0.1}>
                <div className="impact-feature">
                  <div className="feature-icon"><TrendingDown size={20} /></div>
                  <div>
                    <h4>Reduce electricity bills</h4>
                    <p>Save up to 80% on your monthly utility costs from day one.</p>
                  </div>
                </div>
              </SlideUp>
              <SlideUp delay={0.2}>
                <div className="impact-feature">
                  <div className="feature-icon"><Leaf size={20} /></div>
                  <div>
                    <h4>Lower carbon footprint</h4>
                    <p>Generate 100% clean, emission-free energy for your facility.</p>
                  </div>
                </div>
              </SlideUp>
              <SlideUp delay={0.3}>
                <div className="impact-feature">
                  <div className="feature-icon"><Sun size={20} /></div>
                  <div>
                    <h4>Long-term ROI-focused</h4>
                    <p>Systems engineered for 25+ years of optimal performance.</p>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>

          <div className="calculator-wrapper">
            <SlideUp delay={0.4}>
              <div className="savings-calculator bg-primary text-light">
                <h3 className="calc-title">How Much Can You Save?</h3>
                <p className="calc-subtitle">Discover your potential savings with HX Solar.</p>
                
                <div className="calc-form mt-8">
                  <label htmlFor="bill-slider" className="calc-label">
                    Average Monthly Electricity Bill
                  </label>
                  <div className="bill-value">₹ {Number(billAmount).toLocaleString()}</div>
                  <input 
                    type="range" 
                    id="bill-slider" 
                    min="1000" 
                    max="50000" 
                    step="500" 
                    value={billAmount} 
                    onChange={(e) => setBillAmount(e.target.value)}
                    className="slider"
                  />
                  <div className="slider-labels">
                    <span>₹1K</span>
                    <span>₹50K+</span>
                  </div>
                </div>

                <div className="calc-results mt-8">
                  <div className="result-card">
                    <span className="result-label">Estimated Yearly Savings</span>
                    <span className="result-value text-accent">₹ {yearlySavings}</span>
                  </div>
                  <div className="result-card secondary">
                    <span className="result-label">Equivalent Trees Planted</span>
                    <span className="result-value">{treesPlanted} / yr</span>
                  </div>
                </div>
                
                <button className="btn btn-accent w-full mt-8">Get Detailed Quote</button>
              </div>
            </SlideUp>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Impact;
