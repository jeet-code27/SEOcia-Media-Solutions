import React from 'react';
import { 
  Search, 
  TrendingUp, 
  Globe, 
  BarChart2, 
  Link2 ,
  Users,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
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

const Seo = () => {
  const technologies = [
    {
      icon: Search,
      title: "Keyword Research",
      category: "On-Page SEO",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Technical SEO",
      category: "Performance",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "International SEO",
      category: "Global Reach",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart2,
      title: "Analytics",
      category: "Tracking",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Link2 ,
      title: "Link Building",
      category: "Off-Page SEO",
      gradient: "from-amber-500 to-yellow-500"
    },
    {
      icon: Users,
      title: "Local SEO",
      category: "Local Search",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: Clock,
      title: "SEO Monitoring",
      category: "Maintenance",
      gradient: "from-rose-500 to-pink-500"
    }
  ];

  const services = [
    {
      title: "On-Page SEO",
      description: "Optimize your website content and structure for maximum search visibility.",
      image: "/images/onpage-seo.jpg"
    },
    {
      title: "Technical SEO",
      description: "Enhance your website's technical foundation for better search performance.",
      image: "/images/technical-seo.jpg"
    },
    {
      title: "Content Strategy",
      description: "Create engaging, SEO-optimized content that drives organic traffic.",
      image: "/images/content-strategy.jpg"
    },
    {
      title: "Local SEO",
      description: "Dominate local search results and attract nearby customers.",
      image: "/images/seo.jpg"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="px-4 py-16 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm rounded-full font-medium">
              Expert SEO Services
            </span>
            <h1 className="mt-6 pb-3 text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent md:text-6xl">
              Boost Your Search Rankings
            </h1>
            <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Drive organic traffic and increase conversions with our data-driven SEO strategies
            </p>
          </motion.div>

          {/* Technologies Grid */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative flex items-start space-x-4">
                  <div className={`bg-gradient-to-r ${tech.gradient} p-3 rounded-xl`}>
                    <tech.icon className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {tech.title}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {tech.category}
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
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-xl text-gray-600">Comprehensive SEO solutions for your business</p>
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
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-10" />
              <div className="relative">
                <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                  Ready to Improve Your Search Rankings?
                </h2>
                <p className="mt-4 text-gray-600 text-lg">
                  Get a SEO audit and discover opportunities for growth
                </p>
                <div className="mt-8 space-x-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 px-8 rounded-lg hover:opacity-90 transition-opacity duration-300">
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

export default Seo;