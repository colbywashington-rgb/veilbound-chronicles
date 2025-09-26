import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, PlayCircle, Users, MessageCircle } from 'lucide-react';
import ShoppingCartComponent from './ShoppingCart';

const VeilboundNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Shop', href: '/shop' },
    { name: 'Developer', href: '/developer' },
    { name: 'Community', href: '/community' },
    { name: 'Media', href: '/media' },
  ];

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold bg-gradient-dyson bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              VEILBOUND
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:text-glow cursor-pointer hover-scale"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <ShoppingCartComponent />
            <Button 
              variant="outline" 
              size="sm" 
              className="border-primary/30 hover:border-primary hover-scale"
              onClick={() => navigate('/media')}
            >
              <PlayCircle className="w-4 h-4 mr-2" />
              Watch Trailer
            </Button>
            <Button 
              className="btn-veilbound hover-scale"
              onClick={() => navigate('/community')}
            >
              <Users className="w-4 h-4 mr-2" />
              Join Community
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/95 backdrop-blur-lg rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer hover:bg-accent/10 rounded-md"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 pb-2 space-y-2">
                <div className="flex justify-center mb-2">
                  <ShoppingCartComponent />
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full hover-scale"
                  onClick={() => {
                    navigate('/media');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Watch Trailer
                </Button>
                <Button 
                  className="w-full btn-veilbound hover-scale"
                  onClick={() => {
                    navigate('/community');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default VeilboundNavigation;