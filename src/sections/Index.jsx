import {useRef} from "react";
import Home from "./Home";
import Hero from "./Hero";
import Services from "./Services";
import Industries from "./Industries";
import Innovation from "./Innovation";
import About from "./About";
import { Contact } from "./Contact";
import Footer from "./Footer";


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
        <Contact />
        <Footer />
      </>
    )
}

export default Index;