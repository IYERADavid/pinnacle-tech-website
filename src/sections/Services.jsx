import digital_transformation from "../assets/images/digital_transformation.jpg";
import PropTypes from "prop-types";
import IT_consulting1 from "../assets/images/IT_consulting1.jpg";
import IT_consulting2 from "../assets/images/IT_consulting2.jpg";
import cyber_security1 from "../assets/images/cyber_security1.jpg";
import cloud_solution1 from "../assets/images/cloud_solution1.jpg";
import software_development from "../assets/images/software_development.jpg";
import digitalCreativeServices from "../assets/images/digitalCreativeServices.jpg";
import Emerging_Tech_Services from "../assets/images/Emerging_Tech_Services.jpg";

const Services = ({ servicesSectionRef }) => {
  const services = [
    {
      category: "Cloud Solutions",
      title: "Cloud Infrastructure Management",
      image: cloud_solution1,
      hoverDetails:
        "Leverage enterprise-grade cloud solutions with full lifecycle management, ensuring optimal performance, cost-efficiency, and compliance across multi-cloud environments.",
    },
    {
      category: "Cybersecurity",
      title: "Advanced Threat Protection",
      image: cyber_security1,
      hoverDetails:
        "Enterprise-grade security operations with 24/7 threat monitoring, AI-powered anomaly detection, and incident response orchestration aligned with NIST frameworks.",
    },
    {
      category: "Data Analytics",
      title: "Business Intelligence Solutions",
      image: IT_consulting2,
      hoverDetails:
        "Transform raw data into actionable insights with predictive analytics powered by machine learning models and real-time dashboarding for C-level decision support.",
    },
    {
      category: "Emerging Tech Services",
      title: "Innovative & Disruptive Technologies",
      image: Emerging_Tech_Services,
      hoverDetails:
        "Implementation partner for blockchain, IoT, and AI solutions with proof-of-concept development and scalable deployment strategies for future-ready enterprises.",
    },
    {
      category: "Digital & Creative Services",
      title: "Design & Digital Experience",
      image: digitalCreativeServices,
      hoverDetails:
        "End-to-end digital transformation services including UX/UI design systems, omnichannel content strategy, and brand experience optimization through user-centric design methodologies.",
    },
    {
      category: "IT Consulting",
      title: "Strategic IT Consulting",
      image: IT_consulting1,
      hoverDetails:
        "Technology roadmap development aligned with business objectives, featuring IT maturity assessments, architecture modernization plans, and digital transformation ROI analysis.",
    },
    {
      category: "Managed Services",
      title: "Comprehensive IT Support",
      image: digital_transformation,
      hoverDetails:
        "Proactive IT operations management with SLA-backed performance guarantees, including network optimization, cloud governance, and continuous improvement through ITIL-aligned processes.",
    },
    {
      category: "Software Development",
      title: "Custom Software Development",
      image: software_development,
      hoverDetails:
        "Full-cycle software engineering services employing Agile DevOps practices, microservices architecture, and compliance-driven development for regulated industries.",
    },
  ];

  return (
    <section
      id="servicesSectionRef"
      ref={servicesSectionRef}
      className="py-7 md:py-12 bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-12 tracking-tight"> 
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8"> 
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full bg-gray-800 rounded-lg overflow-hidden group cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col h-full"
            >
              <div className="relative h-48 sm:h-40 md:h-48 lg:h-52 w-full overflow-hidden"> 
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/40 to-transparent" />
              </div>

              <div className="flex flex-col flex-grow p-4 md:p-5">
                <div className="mb-3">
                  <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest">
                    {service.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold mt-1 leading-tight tracking-tight text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                  {service.hoverDetails}
                </p>
                
                <button
                  className="self-start px-4 py-2 text-xs font-semibold text-white uppercase tracking-widest border border-white rounded-full hover:bg-purple-500 transition-colors duration-300"
                  aria-label={`Explore ${service.title}`}
                >
                  Explore Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Services.propTypes = {
  servicesSectionRef: PropTypes.object.isRequired,
};

export default Services;