import React, { useState } from 'react';
import { Search, Heart, Eye, Menu, X, ChevronDown, Star, TrendingUp, Clock } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Discover');
  const [sortBy, setSortBy] = useState('Popular');

  const categories = [
    'Discover', 'Animation', 'Branding', 'Illustration', 'Mobile', 
    'Print', 'Product Design', 'Typography', 'Web Design'
  ];

  const popularTags = [
    'dashboard', 'landing page', 'e-commerce', 'logo', 'card', 'icons'
  ];

  const sortOptions = ['Popular', 'Newest', 'Trending'];

  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'Modern Dashboard Interface',
      creator: 'Alex Johnson',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 1247,
      views: 15800
    },
    {
      id: 2,
      title: 'E-commerce Mobile App',
      creator: 'Sarah Chen',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 892,
      views: 12400
    },
    {
      id: 3,
      title: 'Brand Identity System',
      creator: 'Mike Rodriguez',
      image: 'https://images.pexels.com/photos/193349/pexels-photo-193349.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 2134,
      views: 28900
    },
    {
      id: 4,
      title: 'Landing Page Design',
      creator: 'Emma Wilson',
      image: 'https://images.pexels.com/photos/196657/pexels-photo-196657.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 756,
      views: 9200
    },
    {
      id: 5,
      title: 'Mobile Banking App',
      creator: 'David Park',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800',
      likes: 1389,
      views: 18700
    },
    {
      id: 6,
      title: 'Logo Collection',
      creator: 'Lisa Zhang',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpg?auto=compress&cs=tinysrgb&w=800',
      likes: 924,
      views: 11300
    },
    {
      id: 7,
      title: 'Web App Interface',
      creator: 'Tom Anderson',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpg?auto=compress&cs=tinysrgb&w=800',
      likes: 1567,
      views: 21400
    },
    {
      id: 8,
      title: 'Icon Set Design',
      creator: 'Rachel Kim',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpg?auto=compress&cs=tinysrgb&w=800',
      likes: 678,
      views: 8900
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">SMS</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Explore</a>
              <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Find Talent</a>
              <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Get Hired</a>
              <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Blog</a>
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-400 hover:text-white font-medium transition-colors">
                Login
              </button>
              <button className="bg-green-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors">
                Sign Up
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-400 hover:text-white"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-800 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-gray-400 hover:text-white font-medium">Explore</a>
                <a href="#" className="text-gray-400 hover:text-white font-medium">Find Talent</a>
                <a href="#" className="text-gray-400 hover:text-white font-medium">Get Hired</a>
                <a href="#" className="text-gray-400 hover:text-white font-medium">Blog</a>
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-800">
                  <button className="text-gray-400 hover:text-white font-medium text-left">
                    Login
                  </button>
                  <button className="bg-green-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors w-fit">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Discover the World's Top{' '}
                <span className="text-green-500">SMS Designs</span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Explore unique projects, creative visuals, and design inspirations, 
                all created and shared under SMS.
              </p>

              {/* Search Bar */}
              <div className="relative mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="What type of design are you interested in?"
                    className="w-full pl-6 pr-14 py-4 text-lg bg-gray-900 border-2 border-gray-700 rounded-2xl focus:border-green-700 focus:outline-none transition-colors text-white placeholder-gray-500"
                  />
                  <button className="absolute right-2 top-2 bg-green-700 text-white p-3 rounded-xl hover:bg-green-600 transition-colors">
                    <Search size={20} />
                  </button>
                </div>
              </div>

              {/* Popular Tags */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {popularTags.map((tag, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 bg-gray-900 text-gray-400 rounded-full hover:bg-gray-800 transition-colors text-sm font-medium"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Animation/Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-96 h-96 bg-gradient-to-br from-green-800 to-green-900 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-white text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-2xl mb-6 mx-auto flex items-center justify-center">
                    <Star size={48} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Featured Design</h3>
                  <p className="text-white/80">Premium SMS Collections</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Gallery Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-green-700 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sorting Dropdown */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              Trending designs in <span className="text-green-500">{activeCategory}</span>
            </h2>
            
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 pr-8 font-medium text-gray-400 hover:border-gray-600 focus:border-green-700 focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-2 top-3 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  {/* Hover Actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-black/90 p-2 rounded-lg hover:bg-black transition-colors">
                      <Heart size={16} className="text-gray-400" />
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-white mb-2 group-hover:text-green-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">{project.creator}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Heart size={14} />
                        <span>{project.likes.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye size={14} />
                        <span>{project.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-gray-800 border-2 border-green-700 text-green-500 px-8 py-3 rounded-lg font-medium hover:bg-green-700 hover:text-white transition-colors">
              Load more designs
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-4">About SMS</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">What is SMS?</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Team</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4">Help</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Support Center</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Guidelines</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4">Careers</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Open Positions</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Culture</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Benefits</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4">Privacy</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">GDPR</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4">Terms</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Copyright</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Licensing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Get in Touch</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Partnerships</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <h2 className="text-xl font-bold text-white">SMS</h2>
              <p className="text-gray-500 text-sm">© 2024 SMS. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-500 hover:text-green-500 transition-colors">
                <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-green-700/20">
                  <span className="text-xs font-bold">f</span>
                </div>
              </a>
              <a href="#" className="text-gray-500 hover:text-green-500 transition-colors">
                <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-green-700/20">
                  <span className="text-xs font-bold">t</span>
                </div>
              </a>
              <a href="#" className="text-gray-500 hover:text-green-500 transition-colors">
                <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-green-700/20">
                  <span className="text-xs font-bold">ig</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;