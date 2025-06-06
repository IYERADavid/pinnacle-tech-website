import { CheckCircle, Globe, Lightbulb, Award, Briefcase, Shield } from 'lucide-react';
import { useInView } from "react-intersection-observer";
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

const Card = ({ children, className }) => {

  return (
    <div className={`bg-white rounded shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${className}`} 
        role= "region"
        aria-live = "polite">
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
const CardContent = ({ children }) => {
  return (
    <div className="p-0 animate-fade-in-up">
      {children}
    </div>
  );
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
};
const AboutSection = ({ contactSectionRef }) => {
  const [ref, inView] = useInView({
   triggerOnce: true,
   threshold: 0.1 
  })
  const stats = [
    { title: "Years of Excellence", value: "2", icon: Award, suffix: "+" },
    { title: "Global Clients Served", value: "4", icon: Briefcase, suffix: "+" },
    { title: "Certified Experts", value: "3", icon: CheckCircle, suffix: "+" },
    { title: "Countries Covered", value: "2", icon: Globe, suffix: "+" },
  ];

  return (
    <div id="contactSectionRef" ref={contactSectionRef}  className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Mission Statement */}
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Accelerating Digital Transformation
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Partner with industry leaders to future-proof your enterprise through secure, scalable solutions that deliver measurable ROI and sustainable competitive advantage.
          </p>
        </div>

        {/* Improved Stats Section with Icons */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center p-8 border border-gray-100">
                <CardContent className="space-y-4">
                  <Icon className="w-14 h-14 text-purple-700 mx-auto mb-4 p-2 bg-purple-50 rounded-full" />
                  <h3 className="text-4xl font-bold text-gray-900 flex items-center justify-center">
                    {inView && <CountUp end={stat.value} duration={2.5} />}
                    {stat.suffix}
                  </h3>
                  <p className="text-lg text-gray-600 font-medium">{stat.title}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Value Propositions */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 bg-gray-50 rounded-xl">
            <Globe className="w-14 h-14 text-purple-700 mx-auto mb-6 p-2 bg-white rounded-full shadow-sm" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Technology Leadership</h3>
            <p className="text-gray-600 leading-relaxed">
              Delivering enterprise-grade solutions across 6 continents with localized expertise and 24/7 support.
            </p>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-xl">
            <Lightbulb className="w-14 h-14 text-purple-700 mx-auto mb-6 p-2 bg-white rounded-full shadow-sm" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation Ecosystem</h3>
            <p className="text-gray-600 leading-relaxed">
              Driving digital disruption through AI-powered platforms and blockchain-enabled architectures.
            </p>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-xl">
            <Shield className="w-14 h-14 text-purple-700 mx-auto mb-6 p-2 bg-white rounded-full shadow-sm" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise-Grade Security</h3>
            <p className="text-gray-600 leading-relaxed">
              ISO 27001-certified solutions with zero-trust frameworks and real-time threat intelligence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;