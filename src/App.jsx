// import { useEffect, useState, Suspense, lazy } from 'react';
// import min.js from 'gsap'
import { useGSAP } from '@gsap/react';
import Wards from './assets/Wards';
import Loader from './assets/Loader';
import Header from './assets/Header';
import Hero from './assets/Hero';
import RowSlider from './assets/RowSlider';
import Footer from './assets/Footer';
import DopeSlider from './assets/DopeSlider';
import './app.css';
import Services from './assets/Services';

export default function App() {
  useGSAP(()=> {

  })
  return (
    <>
      <div className="container">
        <Loader />
        <Wards />
        <Header />
        <Hero />
        <RowSlider />
        <Services />
        <DopeSlider />
        <Footer />
        <script src=''></script>
      </div>
    </>
  );
}
