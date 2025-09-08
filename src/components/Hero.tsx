import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform rotate-12 scale-150"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          <div className="text-white">
            <div className="inline-flex items-center bg-blue-500/50 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
              <span className="text-sm font-medium">Trusted by 500+ businesses</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Build Your
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Digital</span>
              <br />Future Today
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              We create stunning, high-performance websites and applications that drive results. 
              From concept to launch, we're your trusted South Tangerang Area development partner.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 flex items-center justify-center space-x-2 backdrop-blur-sm hover:bg-white/10"
              >
                <Play className="h-5 w-5" />
                <span>View Our Work</span>
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-blue-200 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-blue-200 text-sm">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">5+</div>
                <div className="text-blue-200 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm">
                  <div className="text-green-400">// NOVA Development</div>
                  <div className="text-blue-400 mt-2">const</div>
                  <div className="text-white ml-4">{"success = {"}</div>
                  <div className="text-purple-400 ml-8">design: 'beautiful',</div>
                  <div className="text-purple-400 ml-8">performance: 'blazing-fast',</div>
                  <div className="text-purple-400 ml-8">results: 'guaranteed'</div>
                  <div className="text-white ml-4">{"};"};</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-xl opacity-50 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
