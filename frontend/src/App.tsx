import React, { useState, useEffect } from 'react';
import { 
  Laptop, 
  ShoppingBag, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ChevronRight, 
  ShieldCheck, 
  Truck, 
  Clock, 
  Cpu,
  Search,
  Filter,
  Server,
  Leaf,
  Briefcase,
  Building2,
  ArrowLeft,
  Recycle
} from 'lucide-react';

// --- Data Constants ---

const PRODUCTS = [
  {
    id: 1,
    name: "MacBook Pro M3 Max",
    category: "Laptops",
    specs: "16-inch, 32GB RAM, 1TB SSD",
    buyPrice: "$2,499",
    rentPrice: "$150/mo",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tag: "Premium"
  },
  {
    id: 2,
    name: "Dell PowerEdge R750",
    category: "Servers",
    specs: "Rack Server, Dual Xeon Gold, 128GB",
    buyPrice: "$4,899",
    rentPrice: "$350/mo",
    image: "https://images.unsplash.com/photo-1558494949-ef2cb3bbcc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tag: "Enterprise"
  },
  {
    id: 3,
    name: "Dell XPS 15",
    category: "Laptops",
    specs: "15.6-inch OLED, i9, 32GB RAM",
    buyPrice: "$1,899",
    rentPrice: "$110/mo",
    image: "https://images.unsplash.com/photo-1593642632823-8f78536788c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tag: "Best Seller"
  },
  {
    id: 4,
    name: "HPE ProLiant DL380",
    category: "Servers",
    specs: "Gen10 Plus, Scalable Performance",
    buyPrice: "$3,550",
    rentPrice: "$280/mo",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tag: "Server"
  },
  {
    id: 5,
    name: "Asus ROG Zephyrus",
    category: "Laptops",
    specs: "Gaming Beast, RTX 4080, 240Hz",
    buyPrice: "$2,100",
    rentPrice: "$130/mo",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tag: "Gaming"
  },
  {
    id: 6,
    name: "Lenovo ThinkPad X1",
    category: "Laptops",
    specs: "Business Class, Carbon Fiber",
    buyPrice: "$1,650",
    rentPrice: "$95/mo",
    image: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tag: "Business"
  },
  {
    id: 7,
    name: "HP Spectre x360",
    category: "Laptops",
    specs: "2-in-1 Convertible, Touchscreen",
    buyPrice: "$1,450",
    rentPrice: "$85/mo",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tag: "Versatile"
  },
  {
    id: 8,
    name: "MacBook Air M2",
    category: "Laptops",
    specs: "13.6-inch, Midnight, 16GB RAM",
    buyPrice: "$1,199",
    rentPrice: "$70/mo",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tag: "Popular"
  }
];

const REVIEWS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CTO, TechStart Inc",
    date: "2 days ago",
    rating: 5,
    text: "We contracted Jee Technologies for our entire dev team's hardware. The server deployment was flawless and the rental terms are unbeatable.",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Freelance Designer",
    date: "1 week ago",
    rating: 5,
    text: "Bought a refurbished Dell XPS. It works like new but for half the price. Their customer service team is incredibly helpful.",
    avatar: "MC"
  },
  {
    id: 3,
    name: "David Ross",
    role: "IT Manager, CorpFlow",
    date: "3 weeks ago",
    rating: 4,
    text: "Excellent service on the E-Waste recycling contract. They handled our old fleet disposal with full green certification compliance.",
    avatar: "DR"
  }
];

// --- Shared Components ---

const ProductCard = ({ product, activeTab } : { product: any, activeTab: string }) => (
  <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
    <div className="relative h-64 bg-gray-100 overflow-hidden shrink-0">
      <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-md shadow-sm z-10 flex items-center gap-1">
        {product.category === 'Servers' ? <Server size={12}/> : <Laptop size={12}/>}
        {product.tag}
      </span>
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Details
          </button>
      </div>
    </div>
    
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
        <Cpu size={14} /> {product.specs}
      </p>
      
      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500 uppercase font-semibold">
            {activeTab === 'buy' ? 'Starting at' : 'Monthly Contract'}
          </p>
          <p className="text-2xl font-bold text-blue-600">
            {activeTab === 'buy' ? product.buyPrice : product.rentPrice}
          </p>
        </div>
        <button className="p-3 bg-gray-900 text-white rounded-xl hover:bg-blue-600 transition-colors shadow-md">
          <ShoppingBag size={20} />
        </button>
      </div>
    </div>
  </div>
);

const Navbar = ({ isMenuOpen, toggleMenu, navigateTo, currentView, scrolled } : { isMenuOpen: boolean, toggleMenu: () => void, navigateTo: (view: 'home' | 'catalog') => void, currentView: string, scrolled: boolean }) => (
  <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
    <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
      <div 
        onClick={() => navigateTo('home')}
        className="flex items-center gap-2 font-bold text-2xl tracking-tighter text-blue-600 cursor-pointer"
      >
        <div className="bg-blue-600 text-white p-1.5 rounded-lg">
          <Laptop size={24} />
        </div>
        <span>Jee Technologies.</span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
        <button onClick={() => navigateTo('home')} className={`hover:text-blue-600 transition-colors ${currentView === 'home' ? 'text-blue-600 font-bold' : ''}`}>Home</button>
        <button onClick={() => navigateTo('catalog')} className={`hover:text-blue-600 transition-colors ${currentView === 'catalog' ? 'text-blue-600 font-bold' : ''}`}>Catalog</button>
        <a href="#corporate" className="hover:text-blue-600 transition-colors">Corporate & Servers</a>
        <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-green-200">
          <Leaf size={12} /> Green Certified
        </div>
        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-md flex items-center gap-2">
          B2B Inquiry
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="md:hidden p-2 text-gray-700">
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    {/* Mobile Nav */}
    {isMenuOpen && (
      <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
        <button onClick={() => navigateTo('home')} className="text-left block py-2 text-gray-600 hover:text-blue-600">Home</button>
        <button onClick={() => navigateTo('catalog')} className="text-left block py-2 text-gray-600 hover:text-blue-600">Full Catalog</button>
        <a href="#corporate" onClick={toggleMenu} className="block py-2 text-gray-600 hover:text-blue-600">Corporate Solutions</a>
        <a href="#contact" onClick={toggleMenu} className="block py-2 text-gray-600 hover:text-blue-600">Contact</a>
        <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold">B2B Inquiry</button>
      </div>
    )}
  </nav>
);

const Hero = ({ navigateTo }: { navigateTo: (view: 'home' | 'catalog') => void }) => (
  <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    {/* Abstract Background Shapes */}
    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-40"></div>

    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Corporate Rental Experts
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-semibold border border-green-200">
              <Recycle size={14} />
              Licensed Green E-Waste Recycler
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-6">
            IT Infrastructure <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Sold, Rented, Recycled.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Premium laptops, enterprise servers, and certified e-waste solutions. We power IT companies with flexible contracts and sustainable lifecycle management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={() => navigateTo('catalog')}
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              View Catalog <ShoppingBag size={20} />
            </button>
            <a href="#corporate" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
              Corporate Services <Building2 size={20} />
            </a>
          </div>
          
          <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm font-medium text-gray-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-blue-500" size={18} /> Enterprise Warranty
            </div>
            <div className="flex items-center gap-2">
              <Server className="text-purple-500" size={18} /> Server Solutions
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="text-green-500" size={18} /> Green License
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 border border-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1531297461136-82lw8zacaaa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Modern Laptop Setup" 
              className="rounded-2xl w-full h-auto object-cover"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-slow">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <Recycle size={20} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Eco-Certified</p>
                <p className="text-xs text-gray-500">Responsible Disposal</p>
              </div>
            </div>
          </div>
          {/* Decorative circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-gray-200 rounded-full -z-10"></div>
        </div>
      </div>
    </div>
  </section>
);

const CorporateSolutions = () => (
  <section id="corporate" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">For IT Companies</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Complete Corporate IT Solutions</h2>
        <p className="text-gray-500 text-lg">We understand the needs of modern IT firms. From scalable infrastructure to compliant end-of-life disposal, we are your strategic partner.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Rental Contracts */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
          <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
            <Briefcase size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Rental Contracts</h3>
          <p className="text-gray-500 mb-6">Flexible leasing for startups and enterprises. Scale your team up or down with monthly contracts. Includes hot-swaps and maintenance.</p>
          <ul className="space-y-2 mb-6 text-gray-600 text-sm">
            <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-green-500"/> Zero-Depreciation Cost</li>
            <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-green-500"/> Instant Replacements</li>
          </ul>
          <button className="text-blue-600 font-bold text-sm hover:underline flex items-center gap-1">Get a Quote <ChevronRight size={16}/></button>
        </div>

        {/* Server Contracts */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
          <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
            <Server size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Server & Infrastructure</h3>
          <p className="text-gray-500 mb-6">High-performance rack and tower servers available for purchase or rent. Optimized for virtualization, databases, and AI workloads.</p>
          <ul className="space-y-2 mb-6 text-gray-600 text-sm">
            <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-green-500"/> On-Site Setup Support</li>
            <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-green-500"/> Custom Configurations</li>
          </ul>
          <button className="text-purple-600 font-bold text-sm hover:underline flex items-center gap-1">View Server Specs <ChevronRight size={16}/></button>
        </div>

        {/* E-Waste Contracts */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all border-b-4 border-b-green-500">
          <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
            <Recycle size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Certified E-Waste & Green Recycling</h3>
          <p className="text-gray-500 mb-6">We hold a Green License for recycling green waste and electronic waste. We provide destruction certificates for data security compliance.</p>
          <ul className="space-y-2 mb-6 text-gray-600 text-sm">
            <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-green-500"/> Green License Certified</li>
            <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-green-500"/> Data Destruction Certs</li>
          </ul>
          <button className="text-green-600 font-bold text-sm hover:underline flex items-center gap-1">Recycle With Us <ChevronRight size={16}/></button>
        </div>
      </div>
    </div>
  </section>
);

const FeaturedInventory = ({ products, activeTab, setActiveTab, navigateTo } : any) => (
  <section id="collection" className="py-20 bg-white">
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Inventory</h2>
          <p className="text-gray-500 max-w-md">Laptops and Servers ready for immediate deployment.</p>
        </div>
        
        {/* Toggle Switch */}
        <div className="bg-gray-100 p-1 rounded-full inline-flex">
          <button 
            onClick={() => setActiveTab('buy')}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${activeTab === 'buy' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}
          >
            Buy Now
          </button>
          <button 
            onClick={() => setActiveTab('rent')}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${activeTab === 'rent' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}
          >
            Rent Monthly
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.slice(0, 3).map((product : any) => (
          <ProductCard key={product.id} product={product} activeTab={activeTab} />
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <button 
          onClick={() => navigateTo('catalog')}
          className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline text-lg"
        >
          View All Laptops & Servers <ChevronRight size={20} />
        </button>
      </div>
    </div>
  </section>
);

const Reviews = ({ reviews }: { reviews: any[] }) => (
  <section id="reviews" className="py-24 bg-white overflow-hidden border-t border-gray-100">
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
         <div className="flex items-center gap-4 mb-4 md:mb-0">
           <div className="w-12 h-12 bg-white border border-gray-200 rounded-full shadow-sm flex items-center justify-center">
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-6 h-6" />
           </div>
           <div>
             <h2 className="text-2xl font-bold text-gray-900">Google Reviews</h2>
             <div className="flex items-center gap-2">
               <span className="font-bold text-orange-400">4.9</span>
               <div className="flex text-orange-400">
                 {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
               </div>
               <span className="text-sm text-gray-500">(1,240 Reviews)</span>
             </div>
           </div>
         </div>
         <button className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition-colors">
           Write a Review
         </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-blue-600 font-medium">{review.role}</p>
                </div>
              </div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-4 h-4 opacity-50" />
            </div>
            <div className="flex text-orange-400 mb-3">
              {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">"{review.text}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-900 text-white">
    <div className="container mx-auto px-4 md:px-8">
      <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-gray-700">
        <div className="lg:w-1/2 p-10 lg:p-16">
          <h2 className="text-3xl font-bold mb-6">Contact Jee Technologies</h2>
          <p className="text-gray-400 mb-10 text-lg">Discuss your corporate requirements, rental contracts, or e-waste disposal needs.</p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600/20 p-3 rounded-lg backdrop-blur-sm text-blue-500">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Jee Technologies HQ</h4>
                <p className="text-gray-400">123 Innovation Drive, Tech District<br/>New York, NY 10011</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-green-600/20 p-3 rounded-lg backdrop-blur-sm text-green-500">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">B2B & Sales</h4>
                <p className="text-gray-400">+1 (555) 123-4567</p>
                <p className="text-xs text-gray-500 mt-1">Mon-Fri: 9am - 8pm</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-600/20 p-3 rounded-lg backdrop-blur-sm text-purple-500">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Contracts & Support</h4>
                <p className="text-gray-400">contracts@jeetech.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 min-h-[400px] relative bg-gray-700">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1645564756836!5m2!1sen!2sin" 
             width="100%" 
             height="100%" 
             style={{border:0}} 
            //  allowFullScreen="" 
             loading="lazy"
             className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
           ></iframe>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black text-gray-400 py-16 border-t border-gray-900">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-2 font-bold text-2xl text-white mb-6">
            <Laptop size={24} className="text-blue-600" />
            <span>Jee Technologies.</span>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Empowering businesses with premium technology. Authorized Green E-Waste Recycler.
          </p>
          <div className="flex items-center gap-2 text-green-500 text-xs font-bold uppercase tracking-wider">
            <Leaf size={14} /> Eco-Certified
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Corporate</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-blue-500 transition-colors">Server Contracts</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Laptop Leasing</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">E-Waste Recycling</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Green License</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Support</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-blue-500 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">SLA Agreements</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Warranty Policy</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Contact Sales</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Stay Updated</h4>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Business email" 
              className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 w-full text-white focus:ring-2 focus:ring-blue-600 outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; 2024 Jee Technologies. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const Catalog = ({ products, activeTab, setActiveTab, navigateTo }: any) => {
  const [filterCategory, setFilterCategory] = useState('All');
  
  const filteredProducts = filterCategory === 'All' 
    ? products 
    : products.filter((p: any) => p.category === filterCategory);

  return (
    <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-8">
          <button 
            onClick={() => navigateTo('home')}
            className="flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-4 transition-colors"
          >
            <ArrowLeft size={20} /> Back to Home
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Complete Product Catalog</h1>
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {['All', 'Laptops', 'Servers'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${filterCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
                {/* Toggle Switch Small */}
              <div className="bg-gray-100 p-1 rounded-full inline-flex ml-auto">
                <button 
                  onClick={() => setActiveTab('buy')}
                  className={`px-4 py-1.5 rounded-full font-semibold text-xs transition-all duration-300 ${activeTab === 'buy' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}
                >
                  Buy
                </button>
                <button 
                  onClick={() => setActiveTab('rent')}
                  className={`px-4 py-1.5 rounded-full font-semibold text-xs transition-all duration-300 ${activeTab === 'rent' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}
                >
                  Rent
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product : any) => (
            <ProductCard key={product.id} product={product} activeTab={activeTab} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main App Component ---

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('buy'); // 'buy' or 'rent'
  const [currentView, setCurrentView] = useState('home'); // 'home' or 'catalog'
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigateTo = (view: 'home' | 'catalog') => {
    setCurrentView(view);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="font-sans text-gray-900 bg-gray-50 min-h-screen flex flex-col">
      <Navbar 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu} 
        navigateTo={navigateTo} 
        currentView={currentView} 
        scrolled={scrolled} 
      />

      {currentView === 'home' ? (
        <>
          <Hero navigateTo={navigateTo} />
          <CorporateSolutions />
          <FeaturedInventory 
            products={PRODUCTS} 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            navigateTo={navigateTo} 
          />
        </>
      ) : (
        <Catalog 
          products={PRODUCTS} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          navigateTo={navigateTo} 
        />
      )}

      <Reviews reviews={REVIEWS} />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;