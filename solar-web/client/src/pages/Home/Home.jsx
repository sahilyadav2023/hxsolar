import Hero from '../../sections/home/Hero';
import ServicesPreview from '../../sections/home/ServicesPreview';
import WhyUs from '../../sections/home/WhyUs';
import ProjectsPreview from '../../sections/home/ProjectsPreview';
import Impact from '../../sections/home/Impact';
import CTA from '../../sections/home/CTA';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <WhyUs />
      <ServicesPreview />
      <ProjectsPreview />
      <Impact />
      <CTA />
    </div>
  );
};

export default Home;
