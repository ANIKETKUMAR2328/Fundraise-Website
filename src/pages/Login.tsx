import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Github, Linkedin } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-navy-light p-8 rounded-xl border border-gold/20 backdrop-blur-sm w-full max-w-md"
      >
        <h2 className="text-3xl font-display font-bold text-center mb-8">Welcome Back</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-navy border border-gray-600 rounded-lg py-3 px-10 focus:outline-none focus:border-gold"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-navy border border-gray-600 rounded-lg py-3 px-10 focus:outline-none focus:border-gold"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <button type="submit" className="btn-primary w-full">
            Sign In
          </button>
        </form>

        <div className="mt-6">
          <p className="text-center text-sm">Or continue with</p>
          <div className="flex justify-center gap-4 mt-4">
            <button className="p-3 bg-navy border border-gray-600 rounded-lg hover:border-gold transition-colors">
              <Github className="w-5 h-5" />
            </button>
            <button className="p-3 bg-navy border border-gray-600 rounded-lg hover:border-gold transition-colors">
              <Linkedin className="w-5 h-5" />
            </button>
          </div>
        </div>

        <p className="text-center mt-8 text-sm">
          Don't have an account?{' '}
          <Link to="/signup" className="text-gold hover:text-gold-light">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}