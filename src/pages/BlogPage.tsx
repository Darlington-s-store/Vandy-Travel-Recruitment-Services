import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Clock,
  Tag,
  TrendingUp,
  Globe,
  FileText,
  Users
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const featuredPost = {
    id: 1,
    title: 'Complete Guide to Working in the UAE: Visa Requirements and Job Market Trends 2024',
    excerpt: 'Everything you need to know about securing employment in the United Arab Emirates, from visa processes to salary expectations and cultural considerations.',
    image: 'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'UAE Jobs',
    tags: ['UAE', 'Visa', 'Employment']
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Top 10 In-Demand Jobs in Saudi Arabia for 2024',
      excerpt: 'Discover the most sought-after professions in Saudi Arabia and what qualifications you need to succeed.',
      image: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Mohammed Al-Rashid',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Career Advice',
      tags: ['Saudi Arabia', 'Jobs', 'Career']
    },
    {
      id: 3,
      title: 'How to Prepare for Your International Job Interview',
      excerpt: 'Essential tips and strategies to ace your job interview for positions abroad.',
      image: 'https://images.pexels.com/photos/5439381/pexels-photo-5439381.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Grace Osei',
      date: '2024-01-10',
      readTime: '5 min read',
      category: 'Interview Tips',
      tags: ['Interview', 'Tips', 'Career']
    },
    {
      id: 4,
      title: 'Understanding Gulf Culture: A Guide for International Workers',
      excerpt: 'Navigate cultural differences and build successful relationships in Gulf countries.',
      image: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'David Chen',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Cultural Guide',
      tags: ['Culture', 'Gulf', 'Tips']
    },
    {
      id: 5,
      title: 'Salary Negotiation Tips for International Positions',
      excerpt: 'Learn how to negotiate competitive salaries and benefits packages for overseas jobs.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Sarah Johnson',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Salary Guide',
      tags: ['Salary', 'Negotiation', 'Career']
    },
    {
      id: 6,
      title: 'Document Checklist for International Job Applications',
      excerpt: 'Complete list of documents you need to prepare for your international job application.',
      image: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Mohammed Al-Rashid',
      date: '2024-01-03',
      readTime: '4 min read',
      category: 'Documentation',
      tags: ['Documents', 'Application', 'Guide']
    },
    {
      id: 7,
      title: 'Healthcare Jobs in Qatar: Opportunities and Requirements',
      excerpt: 'Explore the booming healthcare sector in Qatar and learn about qualification requirements.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Grace Osei',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Healthcare',
      tags: ['Qatar', 'Healthcare', 'Jobs']
    }
  ];

  const categories = [
    { name: 'UAE Jobs', count: 15, icon: Globe },
    { name: 'Career Advice', count: 12, icon: TrendingUp },
    { name: 'Interview Tips', count: 8, icon: Users },
    { name: 'Cultural Guide', count: 6, icon: FileText },
    { name: 'Salary Guide', count: 10, icon: TrendingUp },
    { name: 'Documentation', count: 5, icon: FileText }
  ];

  const popularTags = [
    'UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Career', 'Visa', 'Interview', 
    'Salary', 'Healthcare', 'Engineering', 'IT Jobs', 'Culture'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">Career Insights & News</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and opportunities in international recruitment
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <motion.article
              className="bg-white rounded-xl shadow-lg overflow-hidden mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 text-lg mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{featuredPost.author}</p>
                      <p className="text-sm text-gray-500">Senior Recruitment Specialist</p>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.article>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                          <User className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More Button */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Load More Articles
              </button>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Categories */}
              <motion.div
                className="bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      to={`/blog/category/${category.name.toLowerCase().replace(' ', '-')}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex items-center space-x-3">
                        <category.icon className="h-4 w-4 text-gray-400 group-hover:text-primary-500" />
                        <span className="text-gray-700 group-hover:text-gray-900">{category.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Popular Tags */}
              <motion.div
                className="bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/blog/tag/${tag.toLowerCase()}`}
                      className="inline-flex items-center space-x-1 bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      <Tag className="h-3 w-3" />
                      <span>{tag}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter Signup */}
              <motion.div
                className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-6 text-white"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-3">Stay Updated</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get the latest career insights and job opportunities delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="w-full bg-white text-primary-600 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </motion.div>

              {/* Contact CTA */}
              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 text-center"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Need Personal Guidance?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Speak with our recruitment experts for personalized career advice.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;