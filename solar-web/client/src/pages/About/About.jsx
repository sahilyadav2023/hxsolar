import FadeIn from '../../components/animations/FadeIn';

const About = () => {
  return (
    <div className="page-container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container">
        <FadeIn>
          <span className="subtitle text-accent">About Us</span>
          <h1 className="title" style={{ marginBottom: '40px' }}>Powering a Sustainable Future</h1>
          
          <div className="content-block" style={{ marginBottom: '40px', maxWidth: '800px', fontSize: '1.125rem', lineHeight: '1.8' }}>
            <p>
              Helioxara Solar Private Limited is a fast-growing solar EPC company delivering reliable and high-performance solar solutions across India.
            </p>
            <p style={{ marginTop: '20px' }}>
              We specialize in on-grid, off-grid, and hybrid systems ranging from small rooftop installations to large-scale power plants.
            </p>
          </div>
          
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <div className="card" style={{ padding: '32px', backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <h2 className="text-2xl mb-4 text-primary">Vision</h2>
              <p className="text-muted">To be a trusted national leader in clean energy and accelerate India's transition to renewable power.</p>
            </div>
            <div className="card" style={{ padding: '32px', backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <h2 className="text-2xl mb-4 text-primary">Mission</h2>
              <ul className="text-muted" style={{ listStyle: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li>Deliver high-performance solar assets</li>
                <li>Ensure quality, safety, and customer satisfaction</li>
                <li>Make clean energy affordable and accessible</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '32px', backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <h2 className="text-2xl mb-4 text-primary">Our Purpose</h2>
              <p className="text-muted">We aim to create long-term impact through clean energy by reducing carbon emissions and building future-ready infrastructure.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default About;
