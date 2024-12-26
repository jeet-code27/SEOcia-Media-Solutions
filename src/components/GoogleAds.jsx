import React from 'react';
import { 
  Target, 
  TrendingUp, 
  BarChart, 
  Search, 
  Users, 
  Settings, 
  DollarSign 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const GoogleAdsServices = () => {
  const features = [
    { 
      name: "Keyword Research", 
      category: "Campaign Planning",
      icon: <Search className="w-6 h-6 text-white" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      name: "Performance Tracking", 
      category: "Analytics",
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      name: "Audience Targeting", 
      category: "Demographics",
      icon: <Target className="w-6 h-6 text-white" />,
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      name: "ROI Analytics", 
      category: "Reporting",
      icon: <BarChart className="w-6 h-6 text-white" />,
      gradient: "from-orange-500 to-red-500"
    },
    { 
      name: "Conversion Tracking", 
      category: "Optimization",
      icon: <DollarSign className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500"
    },
    { 
      name: "Campaign Management", 
      category: "Strategy",
      icon: <Settings className="w-6 h-6 text-white" />,
      gradient: "from-yellow-500 to-orange-500"
    },
    { 
      name: "Remarketing", 
      category: "Audience",
      icon: <Users className="w-6 h-6 text-white" />,
      gradient: "from-teal-500 to-green-500"
    }
  ];

  const services = [
    {
      title: "Search Campaigns",
      description: "Target potential customers actively searching for your products or services with strategic keyword campaigns.",
      image: "/images/search-ads.jpg"  // Add your image path here
    },
    {
      title: "Display Advertising",
      description: "Reach your audience across millions of websites with visually engaging display ads and precise targeting.",
      image: "/images/display-ads.jpg"  // Add your image path here
    },
    {
      title: "Shopping Campaigns",
      description: "Showcase your products directly in Google search results with optimized shopping campaigns.",
      image: "/images/shopping-ads.jpg"  // Add your image path here
    },
    {
      title: "Performance Analysis",
      description: "Comprehensive tracking and optimization of your campaigns for maximum ROI and conversion rates.",
      image: "/images/analytics.jpg"  // Add your image path here
    }
  ];

  return (
    <section className="bg-gradient-to-br from-teal-50 via-white to-blue-50">
      <div className="px-4 py-16 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm rounded-full font-medium">
              Professional Google Ads Management
            </span>
            <h1 className="mt-6 text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent md:text-6xl">
              Maximize Your Ad Performance
            </h1>
            <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Drive targeted traffic, increase conversions, and grow your business with our expert Google Ads management services
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative flex items-start space-x-4">
                  <div className={`bg-gradient-to-r ${feature.gradient} p-3 rounded-xl`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {feature.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Services Section */}
          <div className="py-24">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Google Ads Services</h2>
              <p className="text-xl text-gray-600">Comprehensive advertising solutions for your business</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-fit"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-gray-600 text-lg">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="relative max-w-3xl mx-auto p-8 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 opacity-10" />
              <div className="relative">
                <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                  Ready to Boost Your Ad Performance?
                </h2>
                <p className="mt-4 text-gray-600 text-lg">
                  Get a free consultation and campaign analysis
                </p>
                <div className="mt-8 space-x-4">
                <Link
                 to="/contact"  
                 className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 px-8 rounded-lg hover:opacity-90 transition-opacity duration-300">
                    Contact Us
                  </Link>
                 
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GoogleAdsServices;



