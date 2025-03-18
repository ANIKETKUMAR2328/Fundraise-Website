import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-xl font-display font-bold mb-4">About the Developer</h3>
            <p className="mb-4">
              This website is made by Aniket Kumar, an undergrad at IIT Bombay. 
              I am a full-stack developer passionate about creating innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="hover:text-gold transition-colors">
                <Github />
              </a>
              <a href="https://linkedin.com" className="hover:text-gold transition-colors">
                <Linkedin />
              </a>
              <a href="mailto:contact@example.com" className="hover:text-gold transition-colors">
                <Mail />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-gold transition-colors">Contact</a></li>
              <li><a href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-gold transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>Mumbai, India</li>
              <li>contact@example.com</li>
              <li>+91 123 456 7890</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} FundVision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}