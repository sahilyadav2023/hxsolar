import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-primary">
      <div className="container footer-container">
        <div className="footer-col about-col">
          <Link to="/" className="footer-logo">
            <img src="/hx-solar-logo.png" alt="HX Solar - Shaping Energy with Sunlight" className="footer-logo-img" />
          </Link>
          <p className="text-muted mt-4">
            Powering a Sustainable Future with Smart Solar Solutions. End-to-end solar EPC solutions for residential, commercial, and utility-scale projects.
          </p>
          <div className="social-links mt-6">
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Our Services</h3>
          <ul className="footer-links">
            <li><Link to="/services">Solar EPC</Link></li>
            <li><Link to="/services">Operations & Maintenance</Link></li>
            <li><Link to="/services">Solar Trading</Link></li>
            <li><Link to="/services">Energy Storage</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Contact Info</h3>
          <ul className="footer-contact">
            <li>
              <Mail size={18} className="contact-icon" />
              <a href="mailto:info@hxsolar.in">info@hxsolar.in</a>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <a href="tel:+919928224448">+91 99282 24448</a>
                <a href="tel:+919314516900">+91 93145 16900</a>
              </div>
            </li>
            <li>
              <MapPin size={18} className="contact-icon" />
              <a href="https://www.google.com/maps?q=26.913618,75.717681" target="_blank" rel="noopener noreferrer" style={{ lineHeight: '1.4' }}>
                Plot No. 2, Bhuvneshwari Vatika, Karni Palace, Jaipur
                <span style={{ display: 'block', color: 'var(--color-accent)', fontSize: '0.875rem', marginTop: '4px', textDecoration: 'underline' }}>View Map ↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container flex justify-between items-center flex-wrap">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Helioxara Solar Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
