import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot, Phone, Mail } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! Welcome to Vandy Recruitment Agency. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickReplies = [
    'Job opportunities',
    'Visa services',
    'Study abroad',
    'Book appointment',
    'Contact information'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(text.toLowerCase());
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const getBotResponse = (userText: string): string => {
    if (userText.includes('job') || userText.includes('work') || userText.includes('employment')) {
      return 'We have job opportunities in UAE, Saudi Arabia, Qatar, Kuwait, and many other countries. Would you like to apply or learn more about specific positions?';
    }
    if (userText.includes('visa')) {
      return 'We provide comprehensive visa services including visit visa to employment visa conversion, documentation assistance, and embassy coordination. Which country are you interested in?';
    }
    if (userText.includes('study') || userText.includes('education')) {
      return 'We offer study abroad services for UK, USA, Canada, Germany, Australia, Turkey, Belgium, Qatar, China, and Japan. Which destination interests you?';
    }
    if (userText.includes('appointment') || userText.includes('book')) {
      return 'I can help you book an appointment with our consultants. You can book directly through our website or call us at +233 555 012 965 (Ghana) or +971 559 850 526 (UAE).';
    }
    if (userText.includes('contact') || userText.includes('phone') || userText.includes('email')) {
      return 'You can reach us at:\n📞 Ghana: +233 555 012 965, +233 548 356 290\n📞 UAE: +971 559 850 526, +971 559 135 285\n📧 info@vandyrecruitment.com\n💬 WhatsApp: +233 555 012 965';
    }
    if (userText.includes('hello') || userText.includes('hi') || userText.includes('hey')) {
      return 'Hello! I\'m here to help you with job opportunities, visa services, study abroad programs, and more. What would you like to know?';
    }
    if (userText.includes('price') || userText.includes('cost') || userText.includes('fee')) {
      return 'Our service fees vary depending on the type of service and destination country. Please contact us for detailed pricing information or book a free consultation.';
    }
    return 'Thank you for your message. For detailed information about our services, please contact our team directly or book an appointment. Is there anything specific I can help you with?';
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 3, duration: 0.3 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            boxShadow: ['0 0 0 0 rgba(59, 130, 246, 0.7)', '0 0 0 20px rgba(59, 130, 246, 0)'],
          }}
          transition={{ 
            boxShadow: { duration: 2, repeat: Infinity },
          }}
        >
          <MessageCircle className="h-6 w-6" />
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 left-6 w-80 h-96 bg-white rounded-lg shadow-xl border z-50 flex flex-col"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img src="/logo.jpg" alt="Vandy" className="w-8 h-8 rounded-full" />
                <div>
                  <p className="font-medium">Vandy Support</p>
                  <p className="text-xs text-blue-100">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      message.sender === 'user'
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === 'bot' && (
                        <Bot className="h-4 w-4 mt-0.5 text-primary-500" />
                      )}
                      <div>
                        <p className="whitespace-pre-line">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 px-3 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 mb-2">Quick options:</p>
                <div className="flex flex-wrap gap-1">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                />
                <button
                  onClick={() => handleSendMessage(inputMessage)}
                  className="bg-primary-500 text-white p-2 rounded-lg hover:bg-primary-600 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <div className="flex justify-center space-x-4 mt-2">
                <a
                  href="tel:+233555012965"
                  className="flex items-center space-x-1 text-xs text-gray-500 hover:text-primary-500"
                >
                  <Phone className="h-3 w-3" />
                  <span>Call</span>
                </a>
                <a
                  href="mailto:info@vandyrecruitment.com"
                  className="flex items-center space-x-1 text-xs text-gray-500 hover:text-primary-500"
                >
                  <Mail className="h-3 w-3" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChat;