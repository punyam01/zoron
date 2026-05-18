import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link , useLocation} from 'react-router-dom'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Platform', href: '/platform' },
    { label: 'Solutions', href: '/solutions' },
   { label: 'Use Cases', href: '/usecases' },
    { label: 'Contact', href: '/contact' },
    { label: 'About Us', href: '/aboutus' },
   
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 cursor-pointer group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">Z</span>
            </div>
            <span className="text-xl font-bold text-foreground">ZORON.AI</span>
          </motion.div>
          </Link>

          {/* Desktop Navigation */}
         <div className="hidden md:flex items-center space-x-8">
  {navItems.map((item) => {
    const MotionLink = motion.create(Link); 
    const isActive = location.pathname === item.href;
    return (
      <MotionLink
        key={item.label}
        to={item.href}
        whileHover={{ color: '#00d9ff' }}
        animate={{ color: isActive ? '#00d9ff' : 'rgba(156, 163, 175, 1)' }}
        // 3. UPDATED THIS LINE: Added conditional template styling for the text color
        className={`text-sm font-medium transition-colors ${
          isActive ? 'text-[#00d9ff]' : 'text-muted-foreground'
        }`}
      >
        
      
        {item.label}
      </MotionLink>
    );
  })}
</div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-secondary text-sm">Login</button>
            <button className="btn-primary text-sm">Get Started</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary rounded-lg hover:bg-secondary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2 border-t border-border">
              <button className="btn-secondary w-full text-sm">Login</button>
              <button className="btn-primary w-full text-sm">Get Started</button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
