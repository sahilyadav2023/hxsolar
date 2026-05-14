import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import FadeIn from '../../components/animations/FadeIn';
import './ProjectsPreview.css';

const galleryImages = [
  {
    id: 1,
    src: '/industrial-rooftop-installation.jpg',
    title: 'Industrial Rooftop Installation',
    category: 'Rooftop',
    description: 'Large-scale solar panel deployment on an industrial facility rooftop, maximizing energy output for commercial operations.',
  },
  {
    id: 2,
    src: '/ground-mount-solar-farm.jpg',
    title: 'Ground Mount Solar Farm',
    category: 'Utility Scale',
    description: 'Expansive ground-mounted solar farm delivering grid-connected clean energy across acres of optimized panel arrays.',
  },
  {
    id: 3,
    src: '/commercial-rooftop-installation.jpg',
    title: 'Commercial Rooftop Installation',
    category: 'Commercial',
    description: 'Expert team installing high-efficiency solar panels on a commercial rooftop, reducing operational energy costs.',
  },
  {
    id: 4,
    src: '/residential-building-solar.jpg',
    title: 'Residential Building Solar',
    category: 'Residential',
    description: 'Aerial view of a multi-story residential complex powered by rooftop solar — sustainable living at scale.',
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
    const timer = setInterval(goNext, 4000);
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
            {/* Hero Image */}
            <div className="gallery-hero">
              <div className="gallery-hero-inner">
                {galleryImages.map((img, i) => (
                  <img
                    key={img.id}
                    src={img.src}
                    alt={img.title}
                    className={`gallery-hero-img ${i === activeIndex ? 'active' : ''}`}
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
                    style={{ animationDuration: autoplay ? '4s' : '0s' }}
                  />
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="gallery-thumbnails">
              {galleryImages.map((img, i) => (
                <button
                  key={img.id}
                  className={`gallery-thumb ${i === activeIndex ? 'active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`View ${img.title}`}
                >
                  <img src={img.src} alt={img.title} />
                  <div className="gallery-thumb-overlay">
                    <span className="thumb-title">{img.title}</span>
                  </div>
                </button>
              ))}
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
