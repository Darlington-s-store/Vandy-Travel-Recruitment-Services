import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Calendar, Quote } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const stories = [
    {
      id: 1,
      name: 'Kwame Asante',
      role: 'Construction Supervisor',
      country: 'UAE',
      flag: '🇦🇪',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      story: 'Vandy Recruitment changed my life completely. I was working as a laborer in Ghana earning very little. Now I\'m a construction supervisor in Dubai earning 10 times more and supporting my family back home. The process was smooth and professional.',
      salary: '$3,500/month',
      duration: '2 years',
      rating: 5,
      date: '2023'
    },
    {
      id: 2,
      name: 'Fatima Al-Zahra',
      role: 'Registered Nurse',
      country: 'Qatar',
      flag: '🇶🇦',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      story: 'As a nurse from Nigeria, I dreamed of working in a world-class healthcare system. Vandy made it possible. They handled everything from visa processing to accommodation. I\'m now working at Hamad Medical Corporation and loving every moment.',
      salary: '$4,200/month',
      duration: '3 years',
      rating: 5,
      date: '2022'
    },
    {
      id: 3,
      name: 'John Mensah',
      role: 'Software Engineer',
      country: 'Saudi Arabia',
      flag: '🇸🇦',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      story: 'I was skeptical about recruitment agencies until I met Vandy. They found me a perfect match with a tech company in Riyadh. The salary is amazing, and I\'m gaining invaluable international experience. Highly recommended!',
      salary: '$6,000/month',
      duration: '1.5 years',
      rating: 5,
      date: '2023'
    },
    {
      id: 4,
      name: 'Aisha Mohammed',
      role: 'Hotel Manager',
      country: 'UAE',
      flag: '🇦🇪',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      story: 'From a small hotel in Lagos to managing a 5-star resort in Abu Dhabi - this journey wouldn\'t have been possible without Vandy. They believed in my potential and found the perfect opportunity. Forever grateful!',
      salary: '$5,500/month',
      duration: '2.5 years',
      rating: 5,
      date: '2022'
    },
    {
      id: 5,
      name: 'Emmanuel Osei',
      role: 'Mechanical Engineer',
      country: 'Kuwait',
      flag: '🇰🇼',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      story: 'Vandy didn\'t just find me a job; they found me a career. Working in Kuwait\'s oil industry has opened doors I never imagined. The support from application to arrival was exceptional. My family\'s future is now secure.',
      salary: '$4,800/month',
      duration: '3 years',
      rating: 5,
      date: '2021'
    },
    {
      id: 6,
      name: 'Grace Adebayo',
      role: 'Teacher',
      country: 'Qatar',
      flag: '🇶🇦',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      story: 'Teaching in an international school in Doha has been a dream come true. Vandy handled all the paperwork and even helped me find accommodation. The work environment is fantastic, and I\'m saving more than I ever could back home.',
      salary: '$3,200/month',
      duration: '2 years',
      rating: 5,
      date: '2023'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who transformed their lives through our services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Header */}
              <div className="relative p-6 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                <div className="flex items-center space-x-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{story.name}</h3>
                    <p className="text-blue-100">{story.role}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-2xl">{story.flag}</span>
                      <span className="text-blue-100">{story.country}</span>
                    </div>
                  </div>
                </div>
                <Quote className="absolute top-4 right-4 h-8 w-8 text-white/30" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Story */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{story.story}"
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600">Monthly Salary</p>
                    <p className="font-semibold text-green-600">{story.salary}</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-semibold text-blue-600">{story.duration}</p>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Placed in {story.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of successful candidates who have transformed their lives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/apply"
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.a>
            <motion.a
              href="/book-appointment"
              className="border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;