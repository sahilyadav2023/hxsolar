import { useState, useRef } from 'react';
import { Briefcase, Upload, X, CheckCircle } from 'lucide-react';
import FadeIn from '../../components/animations/FadeIn';
import SlideUp from '../../components/animations/SlideUp';
import './Careers.css';

const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [status, setStatus] = useState('');
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setStatus('File size must be under 5 MB.');
        return;
      }
      setResumeFile(file);
      setStatus('');
    }
  };

  const removeFile = () => {
    setResumeFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, phone, position, experience, message } = formData;

    const subject = encodeURIComponent(`Career Application – ${position || 'General'} – ${fullName}`);
    const body = encodeURIComponent(
      `CAREER APPLICATION\n` +
      `${'='.repeat(40)}\n\n` +
      `Full Name: ${fullName}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Position Applied For: ${position || 'Open / General'}\n` +
      `Years of Experience: ${experience}\n\n` +
      `Cover Note:\n${message}\n\n` +
      `${'='.repeat(40)}\n` +
      `${resumeFile ? `[REMINDER: Please attach your resume file "${resumeFile.name}" to this email before sending]` : '[No resume was selected]'}`
    );

    window.location.href = `mailto:carrer@hxsolar.in?subject=${subject}&body=${body}`;
    setStatus('Opening your email client — please attach your resume before sending!');
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div className="page-container careers-page" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container">
        {/* Hero Banner */}
        <FadeIn>
          <div className="careers-hero">
            <div className="careers-hero-content">
              <span className="subtitle text-accent">Careers</span>
              <h1 className="title careers-title">Join the Solar Revolution</h1>
              <p className="careers-subtitle">
                Be part of a passionate team building India's clean energy future. We're always looking for talented individuals who share our vision for sustainable power.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Why Work With Us */}
        <div className="careers-perks">
          <SlideUp>
            <h2 className="careers-section-title">Why Work With Us</h2>
          </SlideUp>
          <div className="perks-grid">
            {[
              { emoji: '🌱', title: 'Meaningful Impact', desc: 'Contribute directly to India\'s clean energy transition and a greener planet.' },
              { emoji: '📈', title: 'Growth Opportunities', desc: 'Fast-track your career in one of the world\'s fastest-growing industries.' },
              { emoji: '🤝', title: 'Collaborative Culture', desc: 'Work with a close-knit, supportive team that values every voice.' },
              { emoji: '💡', title: 'Learning & Development', desc: 'Continuous training, field exposure, and industry certifications.' },
            ].map((perk, i) => (
              <SlideUp key={i} delay={0.1 * (i + 1)}>
                <div className="perk-card">
                  <span className="perk-emoji">{perk.emoji}</span>
                  <h3 className="perk-title">{perk.title}</h3>
                  <p className="perk-desc">{perk.desc}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <FadeIn>
          <div className="careers-form-section" id="apply">
            <div className="careers-form-header">
              <Briefcase size={28} className="form-header-icon" />
              <div>
                <h2 className="careers-section-title" style={{ marginBottom: '4px' }}>Apply Now</h2>
                <p className="text-muted">Fill out the form below and attach your resume. We'll get back to you soon!</p>
              </div>
            </div>

            <form className="careers-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name <span className="required">*</span></label>
                  <input type="text" id="fullName" name="fullName" placeholder="Your full name" required value={formData.fullName} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address <span className="required">*</span></label>
                  <input type="email" id="email" name="email" placeholder="you@example.com" required value={formData.email} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number <span className="required">*</span></label>
                  <input type="tel" id="phone" name="phone" placeholder="+91 00000 00000" required value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="position">Position Applied For</label>
                  <select id="position" name="position" value={formData.position} onChange={handleChange}>
                    <option value="">Select a role (or leave open)</option>
                    <option value="Solar Design Engineer">Solar Design Engineer</option>
                    <option value="Site Engineer">Site Engineer</option>
                    <option value="Project Manager">Project Manager</option>
                    <option value="Sales Executive">Sales Executive</option>
                    <option value="O&M Technician">O&M Technician</option>
                    <option value="Business Development">Business Development</option>
                    <option value="Accounts & Admin">Accounts & Admin</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="experience">Years of Experience <span className="required">*</span></label>
                  <select id="experience" name="experience" required value={formData.experience} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Fresher">Fresher</option>
                    <option value="1-2 years">1–2 years</option>
                    <option value="3-5 years">3–5 years</option>
                    <option value="5-10 years">5–10 years</option>
                    <option value="10+ years">10+ years</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Resume / CV <span className="required">*</span></label>
                  <div
                    className={`file-upload-zone ${resumeFile ? 'has-file' : ''}`}
                    onClick={() => !resumeFile && fileInputRef.current?.click()}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                    />
                    {resumeFile ? (
                      <div className="file-info">
                        <CheckCircle size={18} className="file-check" />
                        <span className="file-name">{resumeFile.name}</span>
                        <button type="button" className="file-remove" onClick={(e) => { e.stopPropagation(); removeFile(); }}>
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <div className="file-placeholder">
                        <Upload size={20} />
                        <span>Click to upload (PDF, DOC — max 5 MB)</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Cover Note / Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Tell us about yourself, your skills, and why you'd like to join HX Solar..." value={formData.message} onChange={handleChange}></textarea>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary btn-lg">Submit Application</button>
                <p className="form-note">
                  Your application will be sent to <strong>carrer@hxsolar.in</strong>. Please remember to attach your resume in the email.
                </p>
              </div>

              {status && (
                <div className="form-status">
                  <CheckCircle size={18} />
                  <span>{status}</span>
                </div>
              )}
            </form>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Careers;
