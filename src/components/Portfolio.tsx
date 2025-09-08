import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'TechFlow SaaS Platform',
      category: 'web',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A comprehensive project management platform built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'EcoShop E-commerce',
      category: 'ecommerce',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Sustainable shopping platform with integrated payment processing',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'FitTracker Mobile App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/4161663/pexels-photo-4161663.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Cross-platform fitness tracking app with social features',
      technologies: ['React Native', 'Firebase', 'Redux', 'Charts.js'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'FinanceHub Dashboard',
      category: 'web',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Real-time financial analytics dashboard for investment firms',
      technologies: ['Vue.js', 'D3.js', 'Express', 'WebSocket'],
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'FoodieDelight Restaurant',
      category: 'ecommerce',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Online ordering system with delivery tracking',
      technologies: ['React', 'GraphQL', 'PostgreSQL', 'AWS'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'MediCare Health App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Telemedicine platform connecting patients with healthcare providers',
      technologies: ['Flutter', 'Firebase', 'WebRTC', 'Node.js'],
      link: '#',
      github: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ecommerce', label: 'E-commerce' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Discover the innovative projects we've crafted for our clients. 
            Each project represents our commitment to excellence and cutting-edge technology.
          </p>

          {/* Filter Buttons */}
          <div className="inline-flex bg-gray-100 rounded-full p-1 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <a
                      href={project.link}
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a
                      href={project.github}
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-1 group">
                  <span>View Project</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;