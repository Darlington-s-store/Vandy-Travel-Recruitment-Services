import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Users, 
  DollarSign, 
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Briefcase,
  Home,
  Plane,
  Shield
} from 'lucide-react';

const CountryPackagesPage: React.FC = () => {
  const packages = [
    {
      country: 'United Arab Emirates',
      flag: '🇦🇪',
      image: 'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      description: 'Experience luxury living and tax-free income in the heart of the Middle East.',
      rating: 4.9,
      jobsAvailable: '2,500+',
      averageSalary: '$2,500 - $8,000',
      processingTime: '4-6 weeks',
      popular: true,
      features: [
        'Tax-free income',
        'Modern infrastructure',
        'Multicultural environment',
        'Career growth opportunities',
        'World-class healthcare',
        'Excellent transportation'
      ],
      industries: ['Construction', 'Healthcare', 'Hospitality', 'IT', 'Finance', 'Retail'],
      packageIncludes: [
        'Job placement assistance',
        'Visa processing',
        'Airport pickup',
        'Initial accommodation',
        'Medical insurance',
        'Bank account setup'
      ],
      price: '$1,200'
    },
    {
      country: 'Saudi Arabia',
      flag: '🇸🇦',
      image: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      description: 'Join the Vision 2030 transformation with excellent career opportunities.',
      rating: 4.7,
      jobsAvailable: '1,800+',
      averageSalary: '$2,000 - $7,000',
      processingTime: '5-7 weeks',
      popular: false,
      features: [
        'Vision 2030 opportunities',
        'Competitive salaries',
        'Cultural experience',
        'Professional development',
        'Family-friendly policies',
        'Modern cities'
      ],
      industries: ['Oil & Gas', 'Construction', 'Healthcare', 'Education', 'Technology', 'Manufacturing'],
      packageIncludes: [
        'Job placement assistance',
        'Visa processing',
        'Cultural orientation',
        'Accommodation support',
        'Medical insurance',
        'Local registration'
      ],
      price: '$1,000'
    },
    {
      country: 'Qatar',
      flag: '🇶🇦',
      image: 'https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      description: 'Be part of the World Cup legacy with excellent infrastructure and opportunities.',
      rating: 4.8,
      jobsAvailable: '1,200+',
      averageSalary: '$2,800 - $9,000',
      processingTime: '4-5 weeks',
      popular: true,
      features: [
        'High standard of living',
        'World Cup infrastructure',
        'Safe environment',
        'Excellent benefits',
        'Modern facilities',
        'International community'
      ],
      industries: ['Construction', 'Hospitality', 'Healthcare', 'Sports', 'Education', 'Finance'],
      packageIncludes: [
        'Job placement assistance',
        'Visa processing',
        'Airport transfer',
        'Temporary accommodation',
        'Health insurance',
        'Orientation program'
      ],
      price: '$1,300'
    },
    {
      country: 'Kuwait',
      flag: '🇰🇼',
      image: 'https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      description: 'Stable economy with excellent benefits and family-friendly environment.',
      rating: 4.6,
      jobsAvailable: '900+',
      averageSalary: '$2,200 - $6,500',
      processingTime: '5-6 weeks',
      popular: false,
      features: [
        'Stable economy',
        'Family benefits',
        'Good work-life balance',
        'Healthcare benefits',
        'Educational opportunities',
        'Cultural diversity'
      ],
      industries: ['Oil & Gas', 'Healthcare', 'Education', 'Banking', 'Retail', 'Construction'],
      packageIncludes: [
        'Job placement assistance',
        'Visa processing',
        'Medical examination',
        'Accommodation guidance',
        'Insurance coverage',
        'Local support'
      ],
      price: '$950'
    },
    {
      country: 'Bahrain',
      flag: '🇧🇭',
      image: 'https://images.pexels.com/photos/3889856/pexels-photo-3889856.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      description: 'Gateway to the Gulf with liberal lifestyle and business opportunities.',
      rating: 4.5,
      jobsAvailable: '600+',
      averageSalary: '$1,800 - $5,500',
      processingTime: '4-5 weeks',
      popular: false,
      features: [
        'Liberal lifestyle',
        'Business hub',
        'Affordable living',
        'Easy travel access',
        'English-friendly',
        'Growing economy'
      ],
      industries: ['Banking', 'Tourism', 'Manufacturing', 'Healthcare', 'IT', 'Retail'],
      packageIncludes: [
        'Job placement assistance',
        'Visa processing',
        'Airport pickup',
        'Housing assistance',
        'Medical insurance',
        'Registration support'
      ],
      price: '$850'
    },
    {
      country: 'Oman',
      flag: '🇴🇲',
      image: 'https://images.pexels.com/photos/3889857/pexels-photo-3889857.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      description: 'Beautiful landscapes with growing economy and peaceful environment.',
      rating: 4.4,
      jobsAvailable: '400+',
      averageSalary: '$1,500 - $4,500',
      processingTime: '5-7 weeks',
      popular: false,
      features: [
        'Peaceful environment',
        'Natural beauty',
        'Growing economy',
        'Cultural heritage',
        'Friendly people',
        'Strategic location'
      ],
      industries: ['Oil & Gas', 'Tourism', 'Agriculture', 'Fishing', 'Manufacturing', 'Construction'],
      packageIncludes: [
        'Job placement assistance',
        'Visa processing',
        'Cultural briefing',
        'Accommodation support',
        'Health insurance',
        'Local orientation'
      ],
      price: '$800'
    }
  ];

  const benefits = [
    {
      icon: Briefcase,
      title: 'Job Guarantee',
      description: 'We guarantee job placement or full refund of processing fees'
    },
    {
      icon: Shield,
      title: 'Legal Protection',
      description: 'Full legal support and contract verification for your safety'
    },
    {
      icon: Home,
      title: 'Accommodation Support',
      description: 'Assistance with finding suitable accommodation in your destination'
    },
    {
      icon: Plane,
      title: 'Travel Arrangements',
      description: 'Complete travel booking and airport pickup services'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">Country Packages</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive packages for your international career journey. Everything you need for a smooth transition to your dream destination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Packages?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete end-to-end solutions for your international career journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully curated country packages designed for your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.country}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <img
                    src={pkg.image}
                    alt={pkg.country}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className="text-3xl">{pkg.flag}</span>
                    {pkg.popular && (
                      <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{pkg.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{pkg.country}</h3>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary-600">{pkg.price}</p>
                      <p className="text-sm text-gray-500">Processing fee</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{pkg.description}</p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="h-4 w-4 text-primary-500 mr-1" />
                      </div>
                      <p className="text-sm font-semibold text-gray-900">{pkg.jobsAvailable}</p>
                      <p className="text-xs text-gray-500">Jobs Available</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <DollarSign className="h-4 w-4 text-green-500 mr-1" />
                      </div>
                      <p className="text-sm font-semibold text-gray-900">{pkg.averageSalary}</p>
                      <p className="text-xs text-gray-500">Salary Range</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Clock className="h-4 w-4 text-blue-500 mr-1" />
                      </div>
                      <p className="text-sm font-semibold text-gray-900">{pkg.processingTime}</p>
                      <p className="text-xs text-gray-500">Processing</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {pkg.features.slice(0, 4).map((feature) => (
                        <div key={feature} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Industries */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Popular Industries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.industries.slice(0, 4).map((industry) => (
                        <span
                          key={industry}
                          className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs"
                        >
                          {industry}
                        </span>
                      ))}
                      {pkg.industries.length > 4 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          +{pkg.industries.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Package Includes */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Package Includes:</h4>
                    <div className="space-y-1">
                      {pkg.packageIncludes.slice(0, 3).map((item) => (
                        <div key={item} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                      <p className="text-xs text-gray-500 mt-2">
                        +{pkg.packageIncludes.length - 3} more services included
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Link
                      to="/book-appointment"
                      className="flex-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <span>Book Consultation</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="flex-1 border-2 border-primary-500 text-primary-600 py-3 px-4 rounded-lg font-medium hover:bg-primary-50 transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Book a free consultation to discuss which package is right for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-appointment"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Book Free Consultation
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CountryPackagesPage;