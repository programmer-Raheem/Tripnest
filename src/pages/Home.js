import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Feedback from "../components/Feedback";
import Contact from "../components/Contact";
import Chatbot from "../components/Chatbot";


const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Feedback />
      <Contact />
      <Chatbot />
    </main>
  );
};

export default Home;
