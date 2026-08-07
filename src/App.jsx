import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Scholarships from './components/Scholarships';
import WhyUs from './components/WhyUs';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import VisualBreak from './components/VisualBreak';
import FAQ from './components/FAQ';
import LeadForm from './components/LeadForm';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import { SERVICES } from './data/site';

/** Service schema, generated from the same data the cards render from. */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Study in Italy services',
  itemListElement: SERVICES.map((service, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: service.title,
      description: service.body,
      serviceType: service.title,
      areaServed: { '@type': 'Country', name: 'India' },
      provider: {
        '@type': 'EducationalOrganization',
        name: 'Italy Education Consultants',
        '@id': 'https://www.italyeducationconsultants.com/#organization',
      },
    },
  })),
};

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ivory"
      >
        Skip to main content
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Navbar />

      <main id="main">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Process />
        <Scholarships />
        <WhyUs />
        <Achievements />
        <Testimonials />
        <VisualBreak />
        <FAQ />
        <LeadForm />
        <FinalCTA />
        <Contact />
      </main>

      <Footer />
      <FloatingCTA />
    </>
  );
}
