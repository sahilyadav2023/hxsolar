import { useState } from 'react';
import FadeIn from '../../components/animations/FadeIn';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', requirement: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, requirement } = formData;
    const subject = encodeURIComponent(`New Enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nRequirement:\n${requirement}`
    );
    window.location.href = `mailto:info@hxsolar.in?subject=${subject}&body=${body}`;
    setStatus('Opening your email client...');
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div className="page-container" style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: 'var(--color-bg-main)' }}>
      <div className="container">
        <FadeIn>
          <span className="subtitle text-accent">Contact Us</span>
          <h1 className="title" style={{ marginBottom: '20px' }}>Get in Touch</h1>
          <p className="text-muted" style={{ marginBottom: '60px', fontSize: '1.125rem' }}>Looking to switch to solar? Our experts are here to help.</p>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
            <div className="contact-info">
              <h3 className="text-2xl text-primary mb-6">Contact Information</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(164, 214, 94, 0.2)', color: 'var(--color-primary)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>✉</div>
                  <a href="mailto:info@hxsolar.in" className="text-muted">info@hxsolar.in</a>
                </li>
                <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(164, 214, 94, 0.2)', color: 'var(--color-primary)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>☏</div>
                  <a href="tel:+919928224448" className="text-muted">+91 99282 24448</a>
                </li>
                <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(164, 214, 94, 0.2)', color: 'var(--color-primary)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>📍</div>
                  <span className="text-muted">Jaipur, Rajasthan, India</span>
                </li>
              </ul>
            </div>

            <div className="contact-form-wrapper" style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', color: 'var(--color-primary)', fontWeight: '500' }}>Name</label>
                  <input type="text" id="name" placeholder="John Doe" required value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--color-border)', outline: 'none' }} />
                </div>
                <div>
                  <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', color: 'var(--color-primary)', fontWeight: '500' }}>Phone Number</label>
                  <input type="tel" id="phone" placeholder="+91 00000 00000" required value={formData.phone} onChange={handleChange} style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--color-border)', outline: 'none' }} />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', color: 'var(--color-primary)', fontWeight: '500' }}>Email</label>
                  <input type="email" id="email" placeholder="john@example.com" required value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--color-border)', outline: 'none' }} />
                </div>
                <div>
                  <label htmlFor="requirement" style={{ display: 'block', marginBottom: '8px', color: 'var(--color-primary)', fontWeight: '500' }}>Requirement</label>
                  <textarea id="requirement" placeholder="Tell us about your project..." rows="4" required value={formData.requirement} onChange={handleChange} style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--color-border)', outline: 'none', resize: 'vertical' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }}>Submit Request</button>
                {status && <p style={{ color: 'var(--color-accent-dark)', fontSize: '0.875rem', textAlign: 'center' }}>{status}</p>}
              </form>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Contact;
