import React from 'react';
import HeaderMobile from '../components/layout/HeaderMobile'
import HeroSection from '../components/sections/HeroSection';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import { products } from '../data/products';
import EventsPreview from '../components/sections/EventsPreview';
import BrandStory from '../components/sections/BrandStory';
import Testimonials from '../components/sections/Testimonials';
import ContactCTA from '../components/sections/ContactCTA';
import PartnersMarquee from '../components/sections/PartnersMarquee';

const Home = () => {
  return (
    <>
      <HeaderMobile />
      {/* <div className="min-h-screen pt-16 lg:pt-0"> */}
        <HeroSection />
        <FeaturedProducts products={products} />
        <EventsPreview />
        <BrandStory />
        <PartnersMarquee />
        <Testimonials />
        <ContactCTA />
      {/* </div> */}
    </>
  );
};

export default Home;