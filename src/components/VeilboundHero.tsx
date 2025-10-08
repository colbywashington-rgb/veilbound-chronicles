import { Button } from '@/components/ui/button';
import { Play, Download, ArrowDown } from 'lucide-react';
import veilboundHero from '@/assets/veilbound-hero.jpg';

const VeilboundHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={veilboundHero}
          alt="Veilbound - Ancient Dyson Ring in Deep Space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/40" />
      </div>

      {/* Atmospheric Particles Effect */}
      <div className="absolute inset-0 z-10">
        <div className="section-space" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Game Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-dyson bg-clip-text text-transparent">
            VEILBOUND
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 text-glow">
            Dive into echoes of the past. Reshape the future.
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore a vast, ancient Dyson ring orbiting a dying star. As a Veil Diver, 
            use extraordinary abilities to dive into temporal echoes, uncover lost memories, 
            and reshape a fractured future through immersive exploration and social interaction.
          </p>

          {/* Key Features Highlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
            <div className="card-neural p-4 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Neural Ghosting</h3>
              <p className="text-sm text-muted-foreground">Merge with AI husks for strategic stealth</p>
            </div>
            <div className="card-neural p-4 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Fluid Traversal</h3>
              <p className="text-sm text-muted-foreground">Magnetic hooks, anti-gravity, void-shift</p>
            </div>
            <div className="card-neural p-4 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">HUD-Free Interface</h3>
              <p className="text-sm text-muted-foreground">Adaptive AI compass learns your style</p>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="btn-veilbound text-lg px-8 py-6 hover-scale"
              onClick={() => window.open('https://youtu.be/HGTUEdO7KJ8?si=Y1WpUiXTByiB3SOm', '_blank', 'noopener,noreferrer')}
            >
              <Play className="w-5 h-5 mr-3" />
              Watch Gameplay Trailer
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/50 hover:border-primary text-lg px-8 py-6 hover-scale"
              onClick={() => window.open('https://www.youtube.com/channel/UCgw2XIxxFnPXolyAE_C3dvQ', '_blank', 'noopener,noreferrer')}
            >
              <Download className="w-5 h-5 mr-3" />
              Get Updates
            </Button>
          </div>

          {/* Release Status */}
          <div className="bg-gradient-neural/20 border border-primary/30 rounded-lg p-4 max-w-md mx-auto mb-8">
            <p className="text-primary font-semibold">In Development</p>
            <p className="text-sm text-muted-foreground">
              Join our community for exclusive updates and early access opportunities
            </p>
          </div>
        </div>

          {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="animate-bounce hover:text-accent transition-colors cursor-pointer"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="w-6 h-6 text-primary hover:text-accent" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VeilboundHero;