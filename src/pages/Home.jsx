// import React from 'react';
// import HeaderMobile from '../components/layout/HeaderMobile'
// import HeroSection from '../components/sections/HeroSection';
// import FeaturedProducts from '../components/sections/FeaturedProducts';
// import { products } from '../data/products';
// import EventsPreview from '../components/sections/EventsPreview';
// import BrandStory from '../components/sections/BrandStory';
// import Testimonials from '../components/sections/Testimonials';
// import ContactCTA from '../components/sections/ContactCTA';
// import PartnersMarquee from '../components/sections/PartnersMarquee';

// const Home = () => {
//   return (
//     <>
//       <HeaderMobile />
//       {/* <div className="min-h-screen pt-16 lg:pt-0"> */}
//         <HeroSection />
//         <FeaturedProducts products={products} />
//         <EventsPreview />
//         <BrandStory />
//         {/* <PartnersMarquee /> */}
//         <Testimonials />
//         <ContactCTA />
//       {/* </div> */}
//     </>
//   );
// };

// export default Home;

// import React from 'react';
// import HeaderMobile from '../components/layout/HeaderMobile'
// import HeroSection from '../components/sections/HeroSection';
// import FeaturedProducts from '../components/sections/FeaturedProducts';
// import { products } from '../data/products';
// import EventsPreview from '../components/sections/EventsPreview';
// import BrandStory from '../components/sections/BrandStory';
// import Testimonials from '../components/sections/Testimonials';
// import ContactCTA from '../components/sections/ContactCTA';
// // import PartnersMarquee from '../components/sections/PartnersMarquee'; // Comentado temporalmente

// const Home = () => {
//   return (
//     <div className="w-full min-h-screen overflow-x-hidden">
//       <HeaderMobile />
//       <main className="safe-section">
//         <section className="safe-section">
//           <HeroSection />
//         </section>
//         <section className="safe-section">
//           <FeaturedProducts products={products} />
//         </section>
//         <section className="safe-section">
//           <EventsPreview />
//         </section>
//         <section className="safe-section">
//           <BrandStory />
//         </section>
//         {/* <section className="safe-section">
//           <PartnersMarquee />
//         </section> */}
//         <section className="safe-section">
//           <Testimonials />
//         </section>
//         <section className="safe-section">
//           <ContactCTA />
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import HeaderMobile from '../components/layout/HeaderMobile'
import HeroSection from '../components/sections/HeroSection';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import { products } from '../data/products';
import EventsPreview from '../components/sections/EventsPreview';
import BrandStory from '../components/sections/BrandStory';
import Testimonials from '../components/sections/Testimonials';
import ContactCTA from '../components/sections/ContactCTA';
import SEOMetaTags from '../components/common/SEOMetaTags'; // ← Importar SEOMetaTags
// import PartnersMarquee from '../components/sections/PartnersMarquee'; // Comentado temporalmente
import NaturalDifferentiator from '../components/sections/NaturalDifferentiator';
import CategoryShowcase from '../components/sections/CategoryShowcase';
import SocialProof from '../components/sections/SocialProof';
import QuickContact from '../components/sections/QuickContact';

const Home = () => {
  return (
    <>
      {/* SEO Meta Tags para página de inicio */}
      <SEOMetaTags 
        title="Pothe - Helados, nieves y paletas premium"
        description="Descubre los mejores helados artesanales, nieves y paletas premium en Pothe. Sabores únicos elaborados con ingredientes naturales de la más alta calidad. ¡Visítanos y vive la experiencia Pothe!"
        image="/images/og/home-og.jpg"
        url="/"
        type="website"
      />
      
      <div className="w-full min-h-screen overflow-x-hidden">
        <HeaderMobile />
        <main className="safe-section">
          <section className="safe-section">
            <HeroSection />
          </section>
          <section className="safe-section">
            <FeaturedProducts products={products} />
          </section>
          <section className="safe-section">
            <NaturalDifferentiator />
          </section>
          <section className="safe-section">
            <CategoryShowcase />
          </section>
          <section className="safe-section">
            <EventsPreview />
          </section>
          <section className="safe-section">
            <SocialProof />
          </section>
          <section className="safe-section">
            <QuickContact />
          </section>
          {/* <section className="safe-section">
            <BrandStory />
          </section> */}
          {/* <section className="safe-section">
            <PartnersMarquee />
          </section> */}
          {/* <section className="safe-section">
            <Testimonials />
          </section>
          <section className="safe-section">
            <ContactCTA />
          </section> */}
        </main>
      </div>
    </>
  );
};

export default Home;