import {useRef} from "react";
import Home from "./sections/Home";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Industries from "./sections/Industries";
import Innovation from "./sections/Innovation";
import About from "./sections/About";
import Main from "./sections/Main";
import { Contact } from "./sections/Contact";
import Footer from "./sections/Footer";
import Scroll from "./sections/Scroll";
import PrivacyPolicy from "./sections/privacyPolicy";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Index = () => {
  const industrySectionRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const innovationSectionRef = useRef(null);

  return (
    <>
      <Home  innovationSectionRef={innovationSectionRef} />
      <Hero industrySectionRef={industrySectionRef} servicesSectionRef={servicesSectionRef} />
      <Services servicesSectionRef={servicesSectionRef} />
      <Industries industrySectionRef={industrySectionRef} />
      <Innovation innovationSectionRef={innovationSectionRef} />
      <About />
      <Main />
      <Contact />
      <Footer />
      <Scroll />
    </>
  )
}


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route  path="/" element={<Index />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;