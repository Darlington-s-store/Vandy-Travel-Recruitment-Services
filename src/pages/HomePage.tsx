import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Globe, 
  Users, 
  Shield, 
  Clock, 
  Star,
  CheckCircle,
  Plane,
  Building,
  MapPin,
  Award,
  TrendingUp,
  Phone,
  Mail
} from 'lucide-react';

// Import new components
import SuccessStories from '../components/SuccessStories';
import TrustIndicators from '../components/TrustIndicators';
import JobAlerts from '../components/JobAlerts';

const HomePage: React.FC = () => {
  const stats = [
    { label: 'Countries Served', value: '50+', icon: Globe },
    { label: 'Jobs Placed', value: '10K+', icon: Users },
    { label: 'Years Experience', value: '15+', icon: Award },
    { label: 'Success Rate', value: '98%', icon: TrendingUp },
  ];

  const services = [
    {
      icon: Users,
      title: 'Manpower Recruitment',
      description: 'Connect with opportunities worldwide through our extensive network of employers.',
      features: ['Skilled & Unskilled Labor', 'Professional Positions', 'Temporary & Permanent'],
      link: '/services#recruitment'
    },
    {
      icon: Shield,
      title: 'Visa Services',
      description: 'Complete visa assistance from application to approval with expert guidance.',
      features: ['Visit to Employment Visa', 'Documentation Support', 'Legal Compliance'],
      link: '/services#visa'
    },
    {
      icon: Plane,
      title: 'Travel Arrangements',
      description: 'End-to-end travel solutions including flights, accommodation, and transfers.',
      features: ['Flight Booking', 'Airport Pickup', 'Hotel Reservations'],
      link: '/services#travel'
    },
    {
      icon: Building,
      title: 'Corporate Services',
      description: 'Specialized services for companies seeking international talent.',
      features: ['Bulk Recruitment', 'Staff Augmentation', 'Compliance Management'],
      link: '/services#corporate'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      country: 'UAE',
      content: 'Vandy Recruitment made my dream of working in Dubai a reality. Their professional support throughout the process was exceptional.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Mohammed Al-Rashid',
      role: 'HR Manager',
      country: 'Saudi Arabia',
      content: 'As a hiring manager, I rely on Vandy for quality candidates. They consistently deliver skilled professionals who exceed our expectations.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Grace Osei',
      role: 'Nurse',
      country: 'Qatar',
      content: 'From visa processing to job placement, everything was handled professionally. I am now successfully working as a nurse in Qatar.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
    }
  ];

  const countries = [
    { name: 'United Arab Emirates', flag: '🇦🇪', jobs: '2,500+', salary: '$2,500-$8,000' },
    { name: 'Saudi Arabia', flag: '🇸🇦', jobs: '1,800+', salary: '$2,000-$7,000' },
    { name: 'Qatar', flag: '🇶🇦', jobs: '1,200+', salary: '$2,800-$9,000' },
    { name: 'Kuwait', flag: '🇰🇼', jobs: '900+', salary: '$2,200-$6,500' },
    { name: 'Bahrain', flag: '🇧🇭', jobs: '600+', salary: '$1,800-$5,500' },
    { name: 'Oman', flag: '🇴🇲', jobs: '400+', salary: '$1,500-$4,500' },
  ];

  const quickActions = [
    {
      title: 'Apply for Jobs',
      description: 'Start your application process',
      icon: Users,
      link: '/apply',
      color: 'from-primary-500 to-secondary-500'
    },
    {
      title: 'Book Consultation',
      description: 'Schedule a free consultation',
      icon: Clock,
      link: '/book-appointment',
      color: 'from-secondary-500 to-accent-500'
    },
    {
      title: 'Study Abroad',
      description: 'Explore education opportunities',
      icon: Globe,
      link: '/study-abroad',
      color: 'from-accent-500 to-primary-500'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] sm:h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 py-8 sm:py-12 md:py-16">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/80 to-secondary-600/90 z-10" />
          <img
            src="https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Dubai Skyline"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 sm:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.img
              src="/logo.jpg"
              alt="Vandy Recruitment"
              className="w-20 h-20 mx-auto mb-4 rounded-full shadow-2xl sm:w-24 sm:h-24 sm:mb-6"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Reliable, Smooth & 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-accent-400">
                {' '}Accurate
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8">
              Travel and Recruitment Services connecting talent with opportunities worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link
                to="/apply"
                className="bg-gradient-to-r from-secondary-500 to-accent-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Enroll Now</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/book-appointment"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Book Now
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-blue-100">
              <a href="tel:+233555012965" className="flex items-center space-x-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                <span>🇬🇭 +233 555 012 965</span>
              </a>
              <a href="tel:+971559850526" className="flex items-center space-x-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                <span>🇦🇪 +971 559 850 526</span>
              </a>
              <a href="mailto:info@vandyrecruitment.com" className="flex items-center space-x-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@vandyrecruitment.com</span>
              </a>
            </div>
          </motion.div>
        </div>

      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-primary-600 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our global impact and success stories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex flex-col space-y-4 sm:space-y-6 mt-6 sm:mt-8">
                  <div className="bg-primary-50 rounded-full p-4 mb-6">
                    <stat.icon className="h-12 w-12 text-primary-600" />
                  </div>
                  <p className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</p>
                  <p className="text-lg text-gray-600">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Started Today</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take the first step towards your international career journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link
                  to={action.link}
                  className={`block bg-gradient-to-r ${action.color} p-8 rounded-xl text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                >
                  <action.icon className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{action.title}</h3>
                  <p className="text-blue-100">{action.description}</p>
                  <ArrowRight className="h-6 w-6 mt-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive recruitment and travel solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group hover:bg-white border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Countries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connecting talent with opportunities across the Gulf region and beyond
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-4xl">{country.flag}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{country.name}</h3>
                      <p className="text-sm text-gray-600">{country.jobs} active jobs</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 mb-4">
                  <p className="text-sm text-gray-600 mb-1">Salary Range</p>
                  <p className="font-semibold text-green-600">{country.salary}</p>
                </div>
                <Link
                  to="/country-packages"
                  className="flex items-center justify-between text-primary-600 hover:text-primary-700 font-medium"
                >
                  <span>View Package</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Alerts Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <JobAlerts />
        </div>
      </section>

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our clients who have found success through our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    {testimonial.country}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <SuccessStories />

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
              Join thousands of successful candidates who have found their dream jobs through our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/apply"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
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

export default HomePage;