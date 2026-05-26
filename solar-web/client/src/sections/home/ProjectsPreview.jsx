import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import FadeIn from '../../components/animations/FadeIn';
import './ProjectsPreview.css';

const galleryImages = [
  {
    id: 1,
    src: '/solar-project-4.jpg',
    title: 'Industrial Solar Farm',
    category: 'Utility Scale',
    description: 'Expansive utility-scale renewable energy farm delivering grid-connected clean energy across optimized arrays.',
  },
  {
    id: 2,
    src: '/solar-project-1.jpg',
    title: 'Large-Scale Installation',
    category: 'Utility Scale',
    description: 'Vast arrays of high-efficiency solar panels set against modern urban infrastructure, optimizing energy generation.',
  },
  {
    id: 3,
    src: '/solar-project-2.jpg',
    title: 'Professional Team Installation',
    category: 'Commercial',
    description: 'Our expert team meticulously installing high-efficiency solar panels on a commercial rooftop.',
  },
  {
    id: 4,
    src: '/solar-project-3.jpg',
    title: 'On-Site System Diagnostics',
    category: 'Commercial',
    description: 'Specialized engineers conducting thorough system diagnostics and performance auditing to ensure optimal energy yield.',
  },
];

const ProjectsPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  const goTo = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const goNext = useCallback(() => {
    goTo((activeIndex + 1) % galleryImages.length);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo((activeIndex - 1 + galleryImages.length) % galleryImages.length);
  }, [activeIndex, goTo]);

  // Autoplay
  useEffect(() => {
    if (!autoplay || isLightboxOpen) return;
    const timer = setInterval(goNext, 2500);
    return () => clearInterval(timer);
  }, [autoplay, goNext, isLightboxOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'Escape') setIsLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  const activeImage = galleryImages[activeIndex];

  return (
    <section className="projects-preview section-padding" id="projects-gallery">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <FadeIn>
            <span className="subtitle text-accent">Our Work</span>
            <h2 className="title">Project Gallery</h2>
            <p className="gallery-subtitle">
              Explore our portfolio of solar installations across industrial, commercial, and residential sectors.
            </p>
          </FadeIn>
        </div>

        {/* Main Gallery */}
        <FadeIn>
          <div
            className="gallery-showcase mt-12"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            {/* Hero Image Slider */}
            <div className="gallery-hero">
              <div className="gallery-hero-inner">
                {galleryImages.map((img, i) => (
                  <img
                    key={img.id}
                    src={img.src}
                    alt={img.title}
                    className={`gallery-hero-img ${i === activeIndex ? 'active' : ''} ${i === (activeIndex - 1 + galleryImages.length) % galleryImages.length ? 'prev' : ''} ${i === (activeIndex + 1) % galleryImages.length ? 'next' : ''}`}
                  />
                ))}

                {/* Overlay Info */}
                <div className="gallery-hero-overlay">
                  <div className="gallery-hero-info">
                    <span className="gallery-category">{activeImage.category}</span>
                    <h3 className="gallery-hero-title">{activeImage.title}</h3>
                    <p className="gallery-hero-desc">{activeImage.description}</p>
                  </div>
                  <button
                    className="gallery-expand-btn"
                    onClick={() => setIsLightboxOpen(true)}
                    aria-label="View fullscreen"
                  >
                    <Maximize2 size={20} />
                  </button>
                </div>

                {/* Navigation Arrows */}
                <button className="gallery-nav-btn gallery-nav-prev" onClick={goPrev} aria-label="Previous image">
                  <ChevronLeft size={24} />
                </button>
                <button className="gallery-nav-btn gallery-nav-next" onClick={goNext} aria-label="Next image">
                  <ChevronRight size={24} />
                </button>

                {/* Progress Bar */}
                <div className="gallery-progress">
                  <div
                    className="gallery-progress-fill"
                    key={activeIndex}
                    style={{ animationDuration: autoplay ? '2.5s' : '0s' }}
                  />
                </div>
              </div>
            </div>

            {/* Dot Indicators (mobile) */}
            <div className="gallery-dots">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  className={`gallery-dot ${i === activeIndex ? 'active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="gallery-lightbox" onClick={() => setIsLightboxOpen(false)}>
          <button className="lightbox-close" aria-label="Close lightbox">
            <X size={28} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={activeImage.src} alt={activeImage.title} className="lightbox-img" />
            <div className="lightbox-info">
              <span className="gallery-category">{activeImage.category}</span>
              <h3>{activeImage.title}</h3>
              <p>{activeImage.description}</p>
            </div>
            <button className="gallery-nav-btn lightbox-prev" onClick={goPrev} aria-label="Previous image">
              <ChevronLeft size={28} />
            </button>
            <button className="gallery-nav-btn lightbox-next" onClick={goNext} aria-label="Next image">
              <ChevronRight size={28} />
            </button>
          </div>
          {/* Lightbox Thumbnails */}
          <div className="lightbox-thumbs">
            {galleryImages.map((img, i) => (
              <button
                key={img.id}
                className={`lightbox-thumb ${i === activeIndex ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); goTo(i); }}
              >
                <img src={img.src} alt={img.title} />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsPreview;
