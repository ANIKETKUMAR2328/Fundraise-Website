import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Bell, 
  MessageSquare,
  Plus,
  Search,
  Filter
} from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { label: 'Total Raised', value: '$125,000', icon: BarChart3 },
    { label: 'Active Campaigns', value: '2', icon: TrendingUp },
    { label: 'Investor Connections', value: '45', icon: Users }
  ];

  const campaigns = [
    {
      title: 'Tech Innovation Fund',
      type: 'Equity',
      raised: '$75,000',
      target: '$100,000',
      progress: 75,
      status: 'active'
    },
    {
      title: 'Growth Expansion',
      type: 'Debt',
      raised: '$50,000',
      target: '$80,000',
      progress: 62.5,
      status: 'active'
    }
  ];

  return (
    <div className="min-h-screen bg-navy pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold mb-2">Welcome back, Founder</h1>
            <p className="text-gray-300">Here's what's happening with your campaigns</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button className="p-2 relative bg-navy-light rounded-full">
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-gold rounded-full"></span>
            </button>
            <button className="p-2 relative bg-navy-light rounded-full">
              <MessageSquare className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-gold rounded-full"></span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card flex items-center gap-4"
            >
              <div className="p-3 bg-navy rounded-lg">
                <stat.icon className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-sm text-gray-400">{stat.label}</p>
                <p className="text-2xl font-semibold text-gold">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Campaign Management */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Campaigns */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Active Campaigns</h2>
              <button className="btn-primary flex items-center gap-2">
                <Plus className="w-4 h-4" />
                New Campaign
              </button>
            </div>

            <div className="space-y-4">
              {campaigns.map((campaign, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold mb-1">{campaign.title}</h3>
                      <span className="text-sm text-gray-400">{campaign.type}</span>
                    </div>
                    <span className="px-3 py-1 bg-gold/20 text-gold rounded-full text-sm">
                      {campaign.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Raised: {campaign.raised}</span>
                      <span className="text-gray-400">Target: {campaign.target}</span>
                    </div>
                    <div className="h-2 bg-navy rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gold"
                        style={{ width: `${campaign.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-right text-sm text-gray-400">{campaign.progress}%</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Investor Search */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Find Investors</h2>
            <div className="card space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search investors..."
                  className="w-full bg-navy border border-gray-600 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-gold"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-400">Filter by:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Technology', 'Finance', 'Healthcare', 'Real Estate'].map((filter, index) => (
                  <button
                    key={index}
                    className="px-3 py-1 text-sm border border-gray-600 rounded-full hover:border-gold transition-colors"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}