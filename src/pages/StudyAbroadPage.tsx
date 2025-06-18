import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Globe, 
  Users, 
  Award,
  CheckCircle,
  ArrowRight,
  BookOpen,
  MapPin,
  DollarSign,
  Clock,
  Star,
  Plane
} from 'lucide-react';

const StudyAbroadPage: React.FC = () => {
  const countries = [
    {
      name: 'United Kingdom',
      flag: '🇬🇧',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Top-ranked universities, work-study opportunities, post-study work visa.',
      highlights: ['World-class education', 'Post-study work visa', 'Rich cultural heritage', 'English-speaking'],
      tuitionRange: '£15,000 - £35,000/year',
      duration: '3-4 years (Bachelor), 1-2 years (Master)',
      popularCourses: ['Business', 'Engineering', 'Medicine', 'Law']
    },
    {
      name: 'United States',
      flag: '🇺🇸',
      image: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'World\'s best education system with scholarships and career options.',
      highlights: ['Ivy League universities', 'Research opportunities', 'Diverse programs', 'Innovation hub'],
      tuitionRange: '$20,000 - $60,000/year',
      duration: '4 years (Bachelor), 2 years (Master)',
      popularCourses: ['Computer Science', 'Business', 'Medicine', 'Engineering']
    },
    {
      name: 'Canada',
      flag: '🇨🇦',
      image: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Affordable tuition, immigration pathways, and multicultural environment.',
      highlights: ['Immigration pathways', 'Affordable education', 'Safe environment', 'Bilingual advantage'],
      tuitionRange: 'CAD $15,000 - $30,000/year',
      duration: '4 years (Bachelor), 1-2 years (Master)',
      popularCourses: ['Healthcare', 'Technology', 'Natural Resources', 'Business']
    },
    {
      name: 'Germany',
      flag: '🇩🇪',
      image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Tuition-free public universities, engineering and business excellence.',
      highlights: ['Tuition-free education', 'Engineering excellence', 'Strong economy', 'Central Europe location'],
      tuitionRange: '€0 - €3,000/year (Public), €20,000+/year (Private)',
      duration: '3 years (Bachelor), 2 years (Master)',
      popularCourses: ['Engineering', 'Technology', 'Business', 'Sciences']
    },
    {
      name: 'Australia',
      flag: '🇦🇺',
      image: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Quality education, student-friendly cities, and migration options.',
      highlights: ['High quality of life', 'Work while studying', 'Migration opportunities', 'Beautiful landscapes'],
      tuitionRange: 'AUD $20,000 - $45,000/year',
      duration: '3 years (Bachelor), 1-2 years (Master)',
      popularCourses: ['Mining', 'Healthcare', 'Tourism', 'Agriculture']
    },
    {
      name: 'Turkey',
      flag: '🇹🇷',
      image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Affordable tuition with cultural diversity and modern campuses.',
      highlights: ['Affordable education', 'Cultural bridge', 'Modern facilities', 'Strategic location'],
      tuitionRange: '$2,000 - $8,000/year',
      duration: '4 years (Bachelor), 2 years (Master)',
      popularCourses: ['Medicine', 'Engineering', 'Business', 'Arts']
    },
    {
      name: 'Belgium',
      flag: '🇧🇪',
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Centrally located in Europe with multilingual education.',
      highlights: ['Heart of Europe', 'Multilingual programs', 'EU advantages', 'Research excellence'],
      tuitionRange: '€835 - €4,175/year (EU), €4,175+/year (Non-EU)',
      duration: '3 years (Bachelor), 1-2 years (Master)',
      popularCourses: ['European Studies', 'Business', 'Sciences', 'Arts']
    },
    {
      name: 'Qatar',
      flag: '🇶🇦',
      image: 'https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'International campuses and safe environment.',
      highlights: ['International branch campuses', 'Safe environment', 'Modern facilities', 'Tax-free income'],
      tuitionRange: '$15,000 - $50,000/year',
      duration: '4 years (Bachelor), 1-2 years (Master)',
      popularCourses: ['Business', 'Engineering', 'Medicine', 'Islamic Studies']
    },
    {
      name: 'China',
      flag: '🇨🇳',
      image: 'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Technology-driven, affordable education in English.',
      highlights: ['Technology advancement', 'Affordable costs', 'Scholarships available', 'Growing economy'],
      tuitionRange: '$3,000 - $10,000/year',
      duration: '4 years (Bachelor), 2-3 years (Master)',
      popularCourses: ['Technology', 'Medicine', 'Business', 'Engineering']
    },
    {
      name: 'Japan',
      flag: '🇯🇵',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Innovative programs with a mix of tradition and high-tech learning.',
      highlights: ['Innovation leader', 'Technology excellence', 'Cultural experience', 'Job opportunities'],
      tuitionRange: '¥500,000 - ¥1,500,000/year',
      duration: '4 years (Bachelor), 2 years (Master)',
      popularCourses: ['Technology', 'Engineering', 'Robotics', 'Business']
    }
  ];

  const services = [
    {
      icon: BookOpen,
      title: 'University Selection',
      description: 'Expert guidance in choosing the right university and program for your career goals.'
    },
    {
      icon: Award,
      title: 'Scholarship Assistance',
      description: 'Help you find and apply for scholarships and financial aid opportunities.'
    },
    {
      icon: Globe,
      title: 'Visa Processing',
      description: 'Complete student visa application support with document preparation.'
    },
    {
      icon: Plane,
      title: 'Travel Arrangements',
      description: 'Flight booking, accommodation, and pre-departure orientation services.'
    }
  ];

  const whyStudyAbroad = [
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Gain international exposure and develop a global mindset for your career.'
    },
    {
      icon: Users,
      title: 'Cultural Diversity',
      description: 'Experience different cultures and build lifelong international connections.'
    },
    {
      icon: Award,
      title: 'Quality Education',
      description: 'Access world-class education systems and cutting-edge research facilities.'
    },
    {
      icon: Star,
      title: 'Career Opportunities',
      description: 'Enhance your career prospects with international qualifications and experience.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-secondary-600 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                <GraduationCap className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">Study Abroad Programs</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Explore global education opportunities in top destinations. We help with admissions, 
              visa processing, accommodation, and travel arrangements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-appointment"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Book Consultation
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Get Information
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Study Abroad */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Study Abroad?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Studying abroad opens doors to endless opportunities and transforms your perspective
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyStudyAbroad.map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Study Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully selected study destinations around the world
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-2xl mr-2">{country.flag}</span>
                    <span className="font-semibold text-gray-800">{country.name}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{country.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="h-4 w-4 mr-2 text-green-500" />
                      <span>{country.tuitionRange}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{country.duration}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {country.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center text-xs text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-1 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Popular Courses:</h4>
                    <div className="flex flex-wrap gap-1">
                      {country.popularCourses.map((course) => (
                        <span
                          key={course}
                          className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/book-appointment"
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Study Abroad Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support throughout your study abroad journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group hover:bg-white border border-gray-100"
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
                <p className="text-gray-600">{service.description}</p>
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
              Ready to Start Your Study Abroad Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Book a consultation with our education experts and take the first step towards your international education
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

export default StudyAbroadPage;