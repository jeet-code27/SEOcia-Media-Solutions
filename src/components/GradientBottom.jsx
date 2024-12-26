import React from 'react';
import { ArrowRight, Code, Paintbrush, Rocket, Sparkles, Check } from 'lucide-react';

const GradientBottom = () => {
  return (
    <div className="relative min-h-screen overflow-hidden pt-8 pb-8">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />

      {/* Animated Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_7s_infinite]" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_7s_infinite_2s]" />
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_7s_infinite_4s]" />
      </div>

      {/* Main Content */}
      <div className="relative w-full px-4 md:px-8 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-6xl bg-white/60 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Sparkle decorations */}
            <div className="relative">
              <Sparkles className="absolute -top-4 -left-4 w-8 h-8 text-yellow-400" />
              <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-yellow-400" />
              
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                  Get Your Customized Website
                  <span className="block">in Just 7 Days!</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                  Transform your online presence with our expert web development services.
                </p>

                {/* Feature list */}
                <div className="flex flex-col md:flex-row gap-4 justify-center text-gray-700 max-w-xl mx-auto">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Responsive Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>SEO Optimized</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/80 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Code className="w-8 h-8 mb-4 mx-auto text-blue-500 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2 text-gray-800">Custom Development</h3>
                <p className="text-sm text-gray-600">Tailored solutions built with modern technologies</p>
              </div>
              
              <div className="bg-white/80 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Paintbrush className="w-8 h-8 mb-4 mx-auto text-purple-500 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2 text-gray-800">Unique Design</h3>
                <p className="text-sm text-gray-600">Stand out with stunning, brand-aligned visuals</p>
              </div>
              
              <div className="bg-white/80 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Rocket className="w-8 h-8 mb-4 mx-auto text-pink-500 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2 text-gray-800">Fast Delivery</h3>
                <p className="text-sm text-gray-600">From concept to launch in just 7 days</p>
              </div>
            </div>

            <div className="pt-8">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto group">
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientBottom;