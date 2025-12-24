import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import './index.css';

/**
 * Main App Component
 * 
 * Structure:
 * - Navbar: Sticky navigation with glassmorphism
 * - Hero: Bold headline with 3D floating element
 * - Features: Bento grid layout with animated cards
 * - Footer: Social links and newsletter signup
 * 
 * All components use Framer Motion for smooth animations
 * and Tailwind CSS for responsive styling
 */
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
