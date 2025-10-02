import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  MessageCircle, 
  Youtube, 
  Mail, 
  ExternalLink,
  Heart
} from 'lucide-react';

const VeilboundFooter = () => {
  const socialLinks = [
    { icon: MessageCircle, label: 'Discord', href: 'https://discord.gg/veilbound' },
    { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/channel/UCgw2XIxxFnPXolyAE_C3dvQ' },
  ];

  const quickLinks = [
    { label: 'Game Features', href: '#features' },
    { label: 'Developer', href: '#developer' },
    { label: 'Community', href: '#community' },
    { label: 'Gallery', href: '#gallery' },
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="bg-gradient-void/40 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-dyson bg-clip-text text-transparent mb-4">
              VEILBOUND
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              An immersive open-world sci-fi exploration game set on an ancient Dyson ring. 
              Dive into temporal echoes, master innovative traversal mechanics, and reshape a fractured future.
            </p>
            
            {/* Newsletter Signup */}
            <div className="flex flex-col sm:flex-row gap-2 max-w-md">
              <input
                type="email"
                placeholder="Enter your email for updates"
                className="flex-1 px-3 py-2 bg-input border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button 
                size="sm" 
                className="btn-veilbound whitespace-nowrap hover-scale"
                onClick={() => window.open('https://placeholder-newsletter-signup.com', '_blank')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm cursor-pointer hover:underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-primary">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleLinkClick(social.href)}
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200 text-sm group cursor-pointer hover-scale w-full text-left"
                  >
                    <IconComponent className="w-4 h-4 mr-3" />
                    {social.label}
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Veilbound. All rights reserved. Made with{' '}
            <Heart className="inline w-4 h-4 text-accent mx-1" />
            by an indie developer passionate about immersive storytelling.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a 
              href="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer hover:underline"
            >
              Privacy Policy
            </a>
            <a 
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer hover:underline"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Developer Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground/70 italic">
            "Every great journey begins with a single step into the unknown." — Dive into Veilbound
          </p>
        </div>
      </div>
    </footer>
  );
};

export default VeilboundFooter;