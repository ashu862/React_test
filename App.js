// src/App.js
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import BestSellers from './components/BestSellers';
import Categories from './components/Categories';
import NewArrivals from './components/NewArrivals';
import AboutUs from './components/AboutUs';
import USPs from './components/USPs';
import WhyChooseUs from './components/WhyChooseUs';
import CollectionBanner from './components/CollectionBanner';
import Testimonials from './components/Testimonials';
import VisitStore from './components/VisitStore';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <HeroBanner />
      <BestSellers />
      <Categories />
      <NewArrivals />
      <AboutUs />
      <USPs />
      <WhyChooseUs />
      <CollectionBanner />
      <Testimonials />
      <VisitStore />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;