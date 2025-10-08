import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { 
  MessageCircle, 
  Users, 
  Bell, 
  Youtube, 
  Twitter, 
  Mail,
  ExternalLink,
  Calendar,
  Gamepad2,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Send,
  UserPlus
} from 'lucide-react';

const CommunitySection = () => {
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactMethod: '',
    interests: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const communityStats = [
    { label: "Discord Members", value: "1,247", icon: MessageCircle },
    { label: "Newsletter Subscribers", value: "589", icon: Mail },
    { label: "Social Followers", value: "5,634", icon: Users },
  ];

  const communityFeatures = [
    {
      icon: MessageCircle,
      title: "Discord Community",
      description: "Join our active Discord server for real-time discussions, exclusive updates, and direct developer interaction.",
      cta: "Join Discord",
      highlight: true
    },
    {
      icon: Bell,
      title: "Development Updates",
      description: "Get weekly development blogs, behind-the-scenes content, and early access to gameplay footage.",
      cta: "Subscribe for Updates",
      highlight: false
    },
    {
      icon: Gamepad2,
      title: "Playtesting Program",
      description: "Be among the first to experience Veilbound and provide feedback that shapes the final game.",
      cta: "Apply for Alpha",
      highlight: true
    },
    {
      icon: BookOpen,
      title: "Lore & Community Wiki",
      description: "Dive deep into Veilbound's rich lore and contribute to the community-driven knowledge base.",
      cta: "Explore Lore",
      highlight: false
    }
  ];

  const upcomingEvents = [
    {
      title: "Developer Q&A Stream",
      date: "Dec 28, 2025",
      time: "7:00 PM EST",
      platform: "Twitch",
      type: "Live Stream"
    },
    {
      title: "Gameplay Reveal Trailer",
      date: "Jan 8, 2025",
      time: "12:00 PM EST",
      platform: "YouTube",
      type: "Premiere"
    },
    {
      title: "Alpha Testing Phase 1",
      date: "Feb 2025",
      time: "TBD",
      platform: "Discord",
      type: "Closed Alpha MEMBERS ONLY"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Welcome to the Community!",
        description: `Thanks ${formData.name || 'explorer'}! We'll be in touch soon.`,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        contactMethod: '',
        interests: '',
        message: ''
      });
      setShowJoinForm(false);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="community" className="py-24 section-space">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-dyson bg-clip-text text-transparent">
            Join the Veilbound Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with fellow explorers, influence development, and be part of Veilbound's journey 
            from concept to launch and beyond.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {communityStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="bg-gradient-neural/10 border-primary/20 text-center">
                <CardContent className="pt-6">
                  <IconComponent className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Join Community Form */}
        <div className="mb-16">
          <Card className="bg-gradient-neural/20 border-primary/30 shadow-neural overflow-hidden">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <UserPlus className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Join Our Community</CardTitle>
                    <CardDescription>
                      Connect with us and get exclusive updates, early access, and more!
                    </CardDescription>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowJoinForm(!showJoinForm)}
                  className="border-primary/30 hover:border-primary"
                >
                  {showJoinForm ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-2" />
                      Hide Form
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-2" />
                      Show Form
                    </>
                  )}
                </Button>
              </div>
            </CardHeader>
            
            {showJoinForm && (
              <CardContent className="animate-fade-in">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number (Optional)
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contactMethod" className="text-sm font-medium">
                        Preferred Contact Method
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('contactMethod', value)}>
                        <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary">
                          <SelectValue placeholder="Select contact method" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border z-50">
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone</SelectItem>
                          <SelectItem value="discord">Discord</SelectItem>
                          <SelectItem value="newsletter">Newsletter Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="interests" className="text-sm font-medium">
                      What interests you most about Veilbound?
                    </Label>
                    <Select onValueChange={(value) => handleInputChange('interests', value)}>
                      <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary">
                        <SelectValue placeholder="Select your primary interest" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border z-50">
                        <SelectItem value="alpha-testing">Alpha Testing</SelectItem>
                        <SelectItem value="development-updates">Development Updates</SelectItem>
                        <SelectItem value="community-events">Community Events</SelectItem>
                        <SelectItem value="lore-worldbuilding">Lore & Worldbuilding</SelectItem>
                        <SelectItem value="gameplay-mechanics">Gameplay Mechanics</SelectItem>
                        <SelectItem value="early-access">Early Access</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Additional Message (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us what excites you most about Veilbound, or ask any questions..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={4}
                      className="bg-background/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting || !formData.name || !formData.email}
                      className="btn-veilbound hover-scale min-w-32"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Joining...
                        </div>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Join Community
                        </>
                      )}
                    </Button>
                  </div>
                </form>
                
                <div className="mt-6 pt-6 border-t border-border/30">
                  <p className="text-xs text-muted-foreground text-center">
                    By joining, you agree to receive updates about Veilbound. You can unsubscribe at any time.
                    <br />
                    <span className="text-primary">This is a demo form - no real data is collected.</span>
                  </p>
                </div>
              </CardContent>
            )}
          </Card>
        </div>

        {/* Community Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {communityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className={`relative overflow-hidden ${
                feature.highlight 
                  ? 'bg-gradient-neural/20 border-primary/30 shadow-neural' 
                  : 'bg-card/50 border-border/50'
              } hover:shadow-deep transition-all duration-300`}>
                {feature.highlight && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-3 rounded-lg ${
                      feature.highlight ? 'bg-primary/20' : 'bg-accent/20'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${
                        feature.highlight ? 'text-primary' : 'text-accent'
                      }`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </CardDescription>
                  <Button 
                    className={feature.highlight ? 'btn-veilbound hover-scale' : 'border-accent/50 hover:border-accent hover-scale'} 
                    variant={feature.highlight ? 'default' : 'outline'}
                    onClick={() => {
                      const urls: Record<string, string> = {
                        'Join Discord': 'https://placeholder-discord.com',
                        'Subscribe to Updates': 'https://placeholder-newsletter.com',
                        'Apply for Alpha': 'https://placeholder-alpha-signup.com',
                        'Explore Lore': 'https://placeholder-lore-wiki.com'
                      };
                      window.open(urls[feature.cta], '_blank', 'noopener,noreferrer');
                    }}
                  >
                    {feature.cta}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Upcoming Events */}
        <div className="bg-gradient-void/30 rounded-2xl p-8 border border-primary/20 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-primary flex items-center justify-center">
            <Calendar className="w-6 h-6 mr-3" />
            Upcoming Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-xs">
                      {event.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{event.platform}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    <div className="flex items-center mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="text-xs">{event.time}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-primary">Stay Connected</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/30 hover:border-primary hover-scale"
              onClick={() => window.open('https://placeholder-discord.com', '_blank', 'noopener,noreferrer')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Discord
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/30 hover:border-primary hover-scale"
              onClick={() => window.open('https://placeholder-twitter.com', '_blank', 'noopener,noreferrer')}
            >
              <Twitter className="w-5 h-5 mr-2" />
              Twitter
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/30 hover:border-primary hover-scale"
              onClick={() => window.open('https://youtu.be/HGTUEdO7KJ8?si=Y1WpUiXTByiB3SOm', '_blank', 'noopener,noreferrer')}
            >
              <Youtube className="w-5 h-5 mr-2" />
              YouTube
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/30 hover:border-primary hover-scale"
              onClick={() => window.open('https://placeholder-newsletter.com', '_blank', 'noopener,noreferrer')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Newsletter
            </Button>
          </div>
          
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Your feedback and participation help shape Veilbound's development. 
            Join our community and be part of creating something extraordinary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;