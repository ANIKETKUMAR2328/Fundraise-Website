import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const quotes = [
  {
    text: "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
    author: "Mark Zuckerberg",
    role: "CEO, Meta"
  },
  {
    text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    author: "Steve Jobs",
    role: "Co-founder, Apple"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    role: "Founder, Disney"
  }
];

export default function QuotesSection() {
  return (
    <section className="py-20 bg-navy-light/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          Words of <span className="text-gold">Wisdom</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="card relative"
            >
              <Quote className="absolute top-4 right-4 text-gold/20 w-8 h-8" />
              <p className="text-lg mb-6 text-gray-300">{quote.text}</p>
              <div>
                <p className="font-semibold text-gold">{quote.author}</p>
                <p className="text-sm text-gray-400">{quote.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}