import React from 'react';
import { Users, Award, Clock, Heart, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Ahmad SP',
      role: 'CEO & Full Stack Developer',
      image: 'manusia-berkepala-notion.png',
      expertise: ['React', 'Next.js', 'Python', 'JavaScript']
    },
    {
      name: 'Alex Chen',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['React', 'Node.js', 'AWS']
    },
    {
      name: 'Sarah Johnson',
      role: 'Design Director',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['UI/UX', 'Figma', 'Branding']
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Full-Stack Developer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Python', 'Django', 'PostgreSQL']
    },
    {
      name: 'Emily Zhang',
      role: 'Mobile Developer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['React Native', 'Swift', 'Kotlin']
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable outcomes that drive your business forward.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions.'
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships with our clients.'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'We maintain the highest standards in code quality and user experience.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About NOVA's Web
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We're a passionate team of developers, designers, and digital strategists based in the South Tangerang Area. 
            Since 2024, we've been helping businesses transform their digital presence with innovative web solutions.
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <Award className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <Heart className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we approach every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="bg-blue-100 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Team</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our diverse team brings together years of experience in web development, 
              design, and digital strategy to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-2"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h4>
                <p className="text-blue-600 font-medium mb-4">
                  {member.role}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
          >
            Work With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;