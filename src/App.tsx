import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Preloader from './components/Preloader';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LiveChat from './components/LiveChat';
import NewsletterPopup from './components/NewsletterPopup';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ApplyPage from './pages/ApplyPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import StudyAbroadPage from './pages/StudyAbroadPage';
import BookAppointmentPage from './pages/BookAppointmentPage';
import CountryPackagesPage from './pages/CountryPackagesPage';

// Services
import { sendWelcomeSMS } from './services/smsService';

function App() {
  const [loading, setLoading] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Increased to 4 seconds to show the enhanced preloader

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Send welcome SMS on first visit
    if (!loading && !hasVisited) {
      const visited = localStorage.getItem('hasVisited');
      if (!visited) {
        // Here you would typically get the user's phone number through a popup or form
        // For demo purposes, we'll skip the actual SMS sending
        console.log('Welcome SMS would be sent here');
        localStorage.setItem('hasVisited', 'true');
        setHasVisited(true);
      }
    }
  }, [loading, hasVisited]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <AnimatePresence mode="wait">
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/study-abroad" element={<StudyAbroadPage />} />
              <Route path="/book-appointment" element={<BookAppointmentPage />} />
              <Route path="/country-packages" element={<CountryPackagesPage />} />
              <Route path="/apply" element={<ApplyPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
        <Footer />
        <WhatsAppButton />
        <LiveChat />
        <NewsletterPopup />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#4ade80',
                secondary: '#fff',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;