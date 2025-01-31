import React, { useEffect } from 'react';
import Brands from '../components/Brands';
import Projects from '../components/Projects';
import Testimonial from '../components/Testimonial';
import Hero from '../components/Hero';
import About from '../components/About';
//import Service from '../components/Service';
import HomePagdData from '../data/HomePagdData.json';
//import Experience from '../components/Experience';
import Contact from '../components/Contact';
import ImageSlider from '../components/ImageSlider';


export default function Home() {
  const {
    hero,
    socialBtns,
    brands,
    about,
    projects,
    testimonial,
    contact,
    ImageSlider,
  } = HomePagdData;
  return (
    <>
      <Hero data={hero} socialData={socialBtns} />
      <Brands data={brands} />
      <About data={about} />
      <Projects data={projects} />
      <Testimonial data={testimonial} />
      <ImageSlider data={ImageSlider} />
      <Contact data={contact} socialData={socialBtns} />
    </>
  );
}
