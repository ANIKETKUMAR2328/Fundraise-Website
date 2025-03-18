import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'We maintain the highest standards of security and transparency in all transactions.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Continuously evolving our platform to meet the changing needs of entrepreneurs.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive ecosystem of founders, investors, and industry experts.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to providing the best fundraising experience for startups.'
    }
  ];

  return (
    <div className="min-h-screen bg-navy pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            About <span className="text-gold">FundVision</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Empowering entrepreneurs to turn their visions into reality through innovative fundraising solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-display font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300">
              At FundVision, we're dedicated to democratizing access to capital for innovative startups 
              and emerging businesses. Our platform bridges the gap between visionary entrepreneurs 
              and forward-thinking investors, creating opportunities for growth and success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-display font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300">
              We envision a future where every entrepreneur has equal access to the resources they need 
              to build successful businesses. Through technology and innovation, we're making fundraising 
              more accessible, efficient, and transparent.
            </p>
          </motion.div>
        </div>

        <div className="py-16">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <value.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mt-20"
        >
          <h2 className="text-3xl font-display font-bold mb-6">Join Our Journey</h2>
          <p className="text-gray-300 mb-8">
            Whether you're an entrepreneur looking to raise funds or an investor seeking promising 
            opportunities, FundVision is here to help you achieve your goals.
          </p>
          <button className="btn-primary">Get Started Today</button>
        </motion.div>
      </div>
    </div>
  );
}