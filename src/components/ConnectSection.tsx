import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send } from 'lucide-react';

export default function ConnectSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedinId: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    window.location.href = `mailto:aniketkumar764264@gmail.com?subject=Connect Request&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ALinkedIn: ${formData.linkedinId}`;
  };

  return (
    <section className="py-20 bg-navy-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Let's <span className="text-gold">Connect</span>
          </h2>
          <p className="text-gray-300 mb-8">
            Want to discuss opportunities or collaborate? I'd love to hear from you!
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <a
              href="mailto:aniketkumar764264@gmail.com"
              className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            >
              <Mail className="w-5 h-5" />
              aniketkumar764264@gmail.com
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-navy border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-gold"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-navy border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-gold"
              required
            />
            <input
              type="text"
              placeholder="LinkedIn Profile URL"
              value={formData.linkedinId}
              onChange={(e) => setFormData({ ...formData, linkedinId: e.target.value })}
              className="w-full bg-navy border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-gold"
              required
            />
            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
              <Send className="w-5 h-5" />
              Connect with Me
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}