import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, User, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-navy pt-20 px-4">
      <div className="container mx-auto py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            Get in <span className="text-gold">Touch</span>
          </h1>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Have questions about fundraising? Want to learn more about our platform? 
            We're here to help you succeed in your entrepreneurial journey.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-navy-light p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-300">contact@fundvision.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-navy-light p-3 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Live Chat</h3>
                  <p className="text-gray-300">Available 24/7</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-navy-light border border-gray-600 rounded-lg py-3 px-10 focus:outline-none focus:border-gold"
                    placeholder="Your name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-navy-light border border-gray-600 rounded-lg py-3 px-10 focus:outline-none focus:border-gold"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-navy-light border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-gold min-h-[150px]"
                  placeholder="Your message"
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}