import { useState } from 'react';
import VeilboundNavigation from '@/components/VeilboundNavigation';
import VeilboundFooter from '@/components/VeilboundFooter';
import { CartProvider } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import veilboundCover from '@/assets/veilbound-game-cover.jpg';

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:veilbound91@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening your email client",
      description: "Thank you for reaching out! We'll get back to you soon.",
    });
    
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <VeilboundNavigation />
        <main className="pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column - Info */}
              <div>
                <div className="text-center md:text-left mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-neural/20 border border-primary/30 mb-6">
                    <MessageSquare className="w-8 h-8 text-primary" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-dyson bg-clip-text text-transparent">
                    Get in Touch
                  </h1>
                  <p className="text-muted-foreground text-lg">
                    Have questions about Veilbound? We'd love to hear from you.
                  </p>
                </div>

                <div className="glass-card p-6 mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">About Veilbound</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Veilbound is an immersive open-world sci-fi exploration game set on an ancient Dyson ring 
                    orbiting a dying star. Experience unprecedented freedom in exploration, master innovative 
                    traversal mechanics, and uncover the mysteries of extinct alien civilizations.
                  </p>
                  <div className="relative overflow-hidden rounded-lg border border-border/50 mb-4">
                    <img 
                      src={veilboundCover} 
                      alt="Veilbound Game" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Thank you for your interest in Veilbound! Whether you're a potential player, content creator, 
                    or press member, we appreciate you taking the time to reach out. Your feedback and support 
                    help shape the future of this project.
                  </p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold mb-3 text-accent">Direct Email</h3>
                  <a 
                    href="mailto:veilbound91@gmail.com"
                    className="flex items-center text-primary hover:underline group"
                  >
                    <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    veilbound91@gmail.com
                  </a>
                </div>
              </div>

              {/* Right Column - Form */}
              <div>
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-bold mb-6 text-primary">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us what's on your mind..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={6}
                        className="w-full resize-none"
                      />
                    </div>

                    <Button type="submit" className="w-full btn-veilbound hover-scale">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>

                  <div className="mt-6 p-4 bg-gradient-neural/10 rounded-lg border border-accent/20">
                    <p className="text-sm text-muted-foreground text-center">
                      By contacting us, you agree to our privacy policy. We typically respond within 24-48 hours.
                    </p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-muted-foreground italic">
                    "Thank you for visiting Veilbound. Your journey into the unknown awaits."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <VeilboundFooter />
      </div>
    </CartProvider>
  );
};

export default Contact;
