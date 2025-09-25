import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Download, Sparkles } from 'lucide-react';

const AboutVeilbound = () => {
  return (
    <section id="about" className="py-24 bg-gradient-void/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-5xl mx-auto">
          {/* Coming Soon Badge */}
          <div className="flex justify-center mb-8">
            <Badge className="bg-gradient-neural text-foreground px-6 py-2 text-lg font-semibold animate-pulse">
              <Sparkles className="w-5 h-5 mr-2" />
              Coming Soon
            </Badge>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-dyson bg-clip-text text-transparent animate-fade-in">
            About Veilbound
          </h2>

          {/* Main Description */}
          <div className="bg-gradient-neural/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 mb-12 shadow-neural">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
              Veilbound is a sci-fi open-world exploration game where players use advanced traversal abilities 
              to uncover lost memories, engage with complex factions, and reshape a mysterious Dyson ring's 
              fractured past and present.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="card-neural p-6 rounded-xl text-center hover-scale transition-all duration-300">
              <h3 className="text-xl font-bold text-primary mb-3">Open-World Exploration</h3>
              <p className="text-muted-foreground">
                Traverse a vast ancient Dyson ring with complete freedom of movement
              </p>
            </div>
            <div className="card-neural p-6 rounded-xl text-center hover-scale transition-all duration-300">
              <h3 className="text-xl font-bold text-primary mb-3">Advanced Traversal</h3>
              <p className="text-muted-foreground">
                Master unique abilities like void-shift dashing and anti-gravity movement
              </p>
            </div>
            <div className="card-neural p-6 rounded-xl text-center hover-scale transition-all duration-300">
              <h3 className="text-xl font-bold text-primary mb-3">Complex Factions</h3>
              <p className="text-muted-foreground">
                Build relationships and alliances that shape the world around you
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="btn-veilbound text-lg px-8 py-6 hover-scale"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="w-5 h-5 mr-3" />
              Explore Features
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/50 hover:border-primary text-lg px-8 py-6 hover-scale"
              onClick={() => window.open('https://placeholder-newsletter-signup.com', '_blank')}
            >
              <Download className="w-5 h-5 mr-3" />
              Get Updates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVeilbound;