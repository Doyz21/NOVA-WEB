import React from 'react';
import { Code, Smartphone, Globe, Zap, Shield, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and applications built with modern technologies like React, TypeScript, and Node.js.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Ready']
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'App Store Optimization']
    },
    {
      icon: Globe,
      title: 'E-Commerce',
      description: 'Powerful online stores that convert visitors into customers with seamless shopping experiences.',
      features: ['Payment Integration', 'Inventory Management', 'Analytics Dashboard']
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Lightning-fast websites optimized for speed, conversions, and search engine rankings.',
      features: ['Core Web Vitals', 'CDN Integration', 'Image Optimization']
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security measures to protect your business and customer data.',
      features: ['SSL Certificates', 'Data Encryption', 'Regular Updates']
    },
    {
      icon: TrendingUp,
      title: 'Analytics',
      description: 'Data-driven insights to help you understand your audience and grow your business.',
      features: ['Conversion Tracking', 'User Behavior', 'ROI Reporting']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world.
            From concept to deployment, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-blue-100 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
          >
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;