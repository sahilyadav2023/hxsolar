import { useState } from 'react';
import { Home, Building2, Battery, Zap, ChevronDown, X, Package, Sun, Cpu, Cable, Gauge, Shield } from 'lucide-react';
import FadeIn from '../../components/animations/FadeIn';
import SlideUp from '../../components/animations/SlideUp';
import './ServicesPreview.css';

const solarComponents = [
  { icon: <Sun size={28} />, name: 'Solar Panels', desc: 'Tier-1 monocrystalline & polycrystalline modules with 25-year performance warranty.' },
  { icon: <Cpu size={28} />, name: 'Solar Inverters', desc: 'String & micro inverters from leading brands — optimized for Indian grid conditions.' },
  { icon: <Package size={28} />, name: 'Module Mounting Structures', desc: 'Hot-dip galvanized & anodized aluminum structures for rooftop and ground-mount systems.' },
  { icon: <Cable size={28} />, name: 'DC & AC Cables', desc: 'UV-resistant, double-insulated solar cables rated for outdoor and high-temperature use.' },
  { icon: <Gauge size={28} />, name: 'Monitoring Systems', desc: 'IoT-enabled remote monitoring for real-time energy generation and fault alerts.' },
  { icon: <Shield size={28} />, name: 'Protection Devices', desc: 'MCBs, SPDs, earthing kits, and combiner boxes for complete system safety.' },
];

const services = [
  {
    icon: <Home size={32} />,
    title: 'Solar EPC',
    description: 'Turnkey solutions including design, procurement, installation, and commissioning.',
    details: {
      overview: 'HX Solar delivers complete Engineering, Procurement, and Construction (EPC) services for solar power plants across residential, commercial, and industrial sectors. We manage every aspect — from initial site assessment and system design to procurement of Tier-1 components, installation by certified engineers, and final grid commissioning.',
      highlights: [
        'Comprehensive site survey and shadow-free area analysis',
        'Custom system design using PVsyst for maximum yield',
        'Procurement from verified Tier-1 manufacturers only',
        'Professional installation by MNRE-certified technicians',
        'Complete documentation for net metering & subsidies',
        'Post-commissioning handover with performance guarantee'
      ]
    }
  },
  {
    icon: <Zap size={32} />,
    title: 'Operations & Maintenance',
    description: 'Preventive and breakdown maintenance with real-time monitoring and optimization.',
    details: {
      overview: 'Our dedicated O&M team ensures your solar plant operates at peak efficiency throughout its lifetime. We offer comprehensive Annual Maintenance Contracts (AMC) covering preventive servicing, real-time IoT monitoring, rapid breakdown response, and periodic performance audits — maximizing your return on investment year after year.',
      highlights: [
        'Preventive maintenance schedules (monthly/quarterly)',
        '24/7 remote monitoring via IoT-enabled dashboards',
        'Rapid breakdown response within 24–48 hours',
        'Panel cleaning, thermal imaging & IV curve testing',
        'Inverter servicing and firmware updates',
        'Annual performance reports with optimization recommendations'
      ]
    }
  },
  {
    icon: <Building2 size={32} />,
    title: 'Solar Trading & Components',
    description: 'Supply of high-quality solar components from trusted Tier-1 partners.',
    details: {
      overview: 'HX Solar is a trusted supplier of premium solar components sourced directly from Tier-1 manufacturers. Whether you\'re an EPC contractor, installer, or end-user — we provide competitively priced, warranty-backed components with reliable logistics across India. Our partnerships with top brands ensure quality, availability, and after-sales support.',
      highlights: [
        'Direct partnerships with Tier-1 global manufacturers',
        'Bulk & project-specific supply with competitive pricing',
        'Complete range: panels, inverters, structures, cables & more',
        'Warranty-backed products with authenticity certificates',
        'Pan-India logistics with on-time delivery guarantee',
        'Technical support for component selection & system sizing'
      ],
      showComponents: true
    }
  },
  {
    icon: <Battery size={32} />,
    title: 'Energy Storage & Hybrid',
    description: 'Hybrid solar systems with seamless energy storage integration.',
    details: {
      overview: 'Go beyond solar with our hybrid energy solutions. We design and install battery energy storage systems (BESS) that pair seamlessly with your solar plant — enabling 24/7 power availability, peak shaving, and complete energy independence. Our hybrid systems are ideal for commercial facilities, factories, and areas with unreliable grid supply.',
      highlights: [
        'Lithium-ion & LFP battery storage solutions',
        'Hybrid inverter integration for seamless switching',
        'Peak shaving & load management optimization',
        'Backup power during grid outages',
        'Scalable modular design for future expansion',
        'Smart BMS with remote monitoring & alerts'
      ]
    }
  }
];

const ServicesPreview = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section className="services-preview section-padding" id="services-section">
      <div className="container">
        <div className="section-header text-center">
          <FadeIn>
            <span className="subtitle text-accent">Our Services</span>
            <h2 className="title">What We Do</h2>
          </FadeIn>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <SlideUp key={index} delay={0.1 * (index + 1)}>
              <div className={`service-card ${expandedService === index ? 'expanded' : ''}`}>
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <div
                  className="service-link"
                  onClick={() => toggleService(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && toggleService(index)}
                >
                  <span>{expandedService === index ? 'Close' : 'Learn more'}</span>
                  <ChevronDown
                    size={20}
                    className={`service-link-chevron ${expandedService === index ? 'rotated' : ''}`}
                  />
                </div>
              </div>
            </SlideUp>
          ))}
        </div>

        {/* Expanded Detail Panel */}
        {expandedService !== null && (
          <div className="service-detail-panel" key={expandedService}>
            <button className="detail-close" onClick={() => setExpandedService(null)} aria-label="Close details">
              <X size={20} />
            </button>

            <div className="detail-header">
              <div className="detail-icon">{services[expandedService].icon}</div>
              <div>
                <span className="detail-category">Service Details</span>
                <h3 className="detail-title">{services[expandedService].title}</h3>
              </div>
            </div>

            <p className="detail-overview">{services[expandedService].details.overview}</p>

            <div className="detail-highlights">
              <h4 className="detail-highlights-title">Key Highlights</h4>
              <ul className="detail-list">
                {services[expandedService].details.highlights.map((item, i) => (
                  <li key={i} className="detail-list-item">
                    <span className="detail-check">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solar Components Showcase (only for Trading) */}
            {services[expandedService].details.showComponents && (
              <div className="components-showcase">
                <h4 className="components-title">Components We Supply</h4>
                <div className="components-grid">
                  {solarComponents.map((comp, i) => (
                    <div key={i} className="component-card">
                      <div className="component-icon">{comp.icon}</div>
                      <h5 className="component-name">{comp.name}</h5>
                      <p className="component-desc">{comp.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesPreview;
