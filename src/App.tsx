import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CircleDollarSign, TrendingUp, Lightbulb, Award, Users, BarChart3 } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThreeScene from './components/ThreeScene';
import QuotesSection from './components/QuotesSection';
import ConnectSection from './components/ConnectSection';
import Login from './pages/Login';
import Contact from './pages/Contact';
import About from './pages/About';
import Dashboard from './pages/Dashboard';

function Home() {
  const stats = [
    { value: '1000+', label: 'Startups Funded', icon: Users },
    { value: '$500M+', label: 'Capital Raised', icon: CircleDollarSign },
    { value: '50k+', label: 'Active Investors', icon: BarChart3 },
  ];

  return (
    <>
      {/* Hero Section with 3D Background */}
      <header className="relative min-h-screen flex items-center">
        <ThreeScene />
        <div className="container mx-auto px-4 pt-20 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-gold">Fund</span> Your Vision
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Connect with investors and raise capital through equity, debt, loans, or grants.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button className="btn-primary">Start Fundraising</button>
            <button className="btn-secondary">Explore Startups</button>
          </motion.div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-20 bg-navy-light/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-gold mb-2">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <QuotesSection />

      {/* 3D Dollar Sign */}
      
      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-display text-3xl md:text-4xl text-center mb-16"
        >
          Multiple Ways to <span className="text-gold">Raise Capital</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <CircleDollarSign className="w-8 h-8 text-gold" />,
              title: 'Equity Funding',
              description: 'Raise capital by offering shares of your company to investors.'
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-gold" />,
              title: 'Debt Financing',
              description: 'Secure funds with flexible repayment terms and competitive rates.'
            },
            {
              icon: <Lightbulb className="w-8 h-8 text-gold" />,
              title: 'Business Loans',
              description: 'Quick access to working capital for your growing business.'
            },
            {
              icon: <Award className="w-8 h-8 text-gold" />,
              title: 'Grants',
              description: 'Discover and apply for non-dilutive funding opportunities.'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-display font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Connect Section */}
      <ConnectSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-navy to-navy-dark">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;