import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Home, Building2, Battery, Zap, X, Package, Sun, Cpu, Cable, Gauge, Shield, ArrowRight } from 'lucide-react';
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
        'Post-commissioning handover with performance guarantee',
      ],
    },
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
        'Annual performance reports with optimization recommendations',
      ],
    },
  },
  {
    icon: <Building2 size={32} />,
    title: 'Solar Trading & Components',
    description: 'Supply of high-quality solar components from trusted Tier-1 partners.',
    details: {
      overview: "HX Solar is a trusted supplier of premium solar components sourced directly from Tier-1 manufacturers. Whether you're an EPC contractor, installer, or end-user — we provide competitively priced, warranty-backed components with reliable logistics across India.",
      highlights: [
        'Direct partnerships with Tier-1 global manufacturers',
        'Bulk & project-specific supply with competitive pricing',
        'Complete range: panels, inverters, structures, cables & more',
        'Warranty-backed products with authenticity certificates',
        'Pan-India logistics with on-time delivery guarantee',
        'Technical support for component selection & system sizing',
      ],
      showComponents: true,
    },
  },
  {
    icon: <Battery size={32} />,
    title: 'Energy Storage & Hybrid',
    description: 'Hybrid solar systems with seamless energy storage integration.',
    details: {
      overview: 'Go beyond solar with our hybrid energy solutions. We design and install battery energy storage systems (BESS) that pair seamlessly with your solar plant — enabling 24/7 power availability, peak shaving, and complete energy independence.',
      highlights: [
        'Lithium-ion & LFP battery storage solutions',
        'Hybrid inverter integration for seamless switching',
        'Peak shaving & load management optimization',
        'Backup power during grid outages',
        'Scalable modular design for future expansion',
        'Smart BMS with remote monitoring & alerts',
      ],
    },
  },
];

/* ── 3-D Tilt Card (ReactBits-inspired) ─────────────────── */
const TiltCard = ({ children, className = '', onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`tilt-card ${className}`}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.03, zIndex: 2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {children}
    </motion.div>
  );
};

/* ── Modal ───────────────────────────────────────────────── */
const ServiceModal = ({ service, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="service-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="service-modal"
          initial={{ opacity: 0, y: 60, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="modal-header">
            <div className="modal-icon">{service.icon}</div>
            <div className="modal-header-text">
              <span className="modal-category">Service Details</span>
              <h3 className="modal-title">{service.title}</h3>
            </div>
            <button className="modal-close" onClick={onClose} aria-label="Close">
              <X size={20} />
            </button>
          </div>

          {/* Overview */}
          <p className="modal-overview">{service.details.overview}</p>

          {/* Highlights */}
          <div className="modal-highlights">
            <h4 className="modal-highlights-title">Key Highlights</h4>
            <ul className="modal-list">
              {service.details.highlights.map((item, i) => (
                <motion.li
                  key={i}
                  className="modal-list-item"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.15 }}
                >
                  <span className="modal-check">✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Components (Trading only) */}
          {service.details.showComponents && (
            <div className="modal-components">
              <h4 className="modal-highlights-title">Components We Supply</h4>
              <div className="modal-components-grid">
                {solarComponents.map((comp, i) => (
                  <motion.div
                    key={i}
                    className="modal-component-card"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i + 0.3 }}
                  >
                    <div className="modal-component-icon">{comp.icon}</div>
                    <h5 className="modal-component-name">{comp.name}</h5>
                    <p className="modal-component-desc">{comp.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ── Main Section ─────────────────────────────────────────── */
const ServicesPreview = () => {
  const [activeService, setActiveService] = useState(null);

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
              <TiltCard className="service-card">
                {/* Shimmer border overlay */}
                <span className="shimmer-border" aria-hidden="true" />

                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>

                <button
                  className="service-link-btn"
                  onClick={() => setActiveService(service)}
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn more <ArrowRight size={16} />
                </button>
              </TiltCard>
            </SlideUp>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeService && (
        <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
      )}
    </section>
  );
};

export default ServicesPreview;
