import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Zap, 
  Eye, 
  Users, 
  Compass, 
  MapPin, 
  Brain,
  Waves,
  Shield
} from 'lucide-react';
import gameplayImage from '@/assets/gameplay-traversal.jpg';

const GameplayFeatures = () => {
  const features = [
    {
      icon: Zap,
      title: "Fluid Traversal System",
      description: "Master magnetic hooks for dynamic swinging, anti-gravity wall-running for vertical exploration, and void-shift dashing to phase through matter.",
      color: "text-primary"
    },
    {
      icon: Brain,
      title: "Neural Ghosting",
      description: "Merge with broken AI husks to gain strategic advantages, infiltrate secure areas, and access hidden pathways through innovative stealth gameplay.",
      color: "text-accent"
    },
    {
      icon: Compass,
      title: "Adaptive AI Compass",
      description: "Experience a revolutionary HUD-free interface with a holographic AI companion that learns your playstyle and guides you to secrets and narrative threads.",
      color: "text-primary"
    },
    {
      icon: Eye,
      title: "Temporal Echo Diving",
      description: "Dive into echoes of the past to uncover lost memories, witness ancient events, and use temporal insights to reshape the present world.",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Deep Social Systems",
      description: "Build complex relationships with NPC factions, forge alliances or rivalries, and influence the evolving story through meaningful social interactions.",
      color: "text-primary"
    },
    {
      icon: MapPin,
      title: "Environmental Storytelling",
      description: "Discover the tragic history of extinct alien civilizations through cryptic glyphs, decayed murals, and scattered data echoes throughout the Dyson ring.",
      color: "text-accent"
    }
  ];

  return (
    <section id="features" className="py-24 section-space">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-dyson bg-clip-text text-transparent">
            Revolutionary Gameplay
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience unprecedented freedom in exploration, stealth, and social interaction 
            on a vast ancient megastructure orbiting a dying star.
          </p>
        </div>

        {/* Gameplay Screenshot */}
        <div className="mb-16 relative">
          <div className="relative overflow-hidden rounded-2xl border border-primary/20">
            <img
              src={gameplayImage}
              alt="Veilbound Gameplay - Anti-gravity wall-running with holographic AI compass"
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
          
          {/* Floating Feature Cards */}
          <div className="absolute top-4 left-4 card-neural p-3 rounded-lg max-w-xs">
            <div className="flex items-center mb-2">
              <Waves className="w-5 h-5 text-primary mr-2" />
              <span className="font-semibold text-sm">Anti-Gravity Movement</span>
            </div>
            <p className="text-xs text-muted-foreground">Run on walls and ceilings with fluid physics</p>
          </div>
          
          <div className="absolute bottom-4 right-4 card-neural p-3 rounded-lg max-w-xs">
            <div className="flex items-center mb-2">
              <Shield className="w-5 h-5 text-accent mr-2" />
              <span className="font-semibold text-sm">HUD-Free Interface</span>
            </div>
            <p className="text-xs text-muted-foreground">Immersive experience with adaptive AI guidance</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-neural">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-neural/10 ${feature.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Platform Availability */}
        <div className="mt-16 bg-gradient-neural/20 rounded-2xl p-8 border border-accent/20">
          <h3 className="text-2xl font-bold text-center mb-8 text-accent">
            Available Platforms
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-center group hover-scale">
              <div className="w-24 h-24 mx-auto mb-3 rounded-xl bg-gradient-void/40 border border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors">
                <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v14h16V5H4m8 2l6 5-6 5V7Z"/>
                </svg>
              </div>
              <p className="font-semibold">Xbox</p>
            </div>
            <div className="text-center group hover-scale">
              <div className="w-24 h-24 mx-auto mb-3 rounded-xl bg-gradient-void/40 border border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors">
                <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
              </div>
              <p className="font-semibold">PlayStation</p>
            </div>
            <div className="text-center group hover-scale">
              <div className="w-24 h-24 mx-auto mb-3 rounded-xl bg-gradient-void/40 border border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors">
                <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 17.17V4c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v13.17l4-4 4 4 4-4 4 4zM6 20h12v2H6v-2z"/>
                </svg>
              </div>
              <p className="font-semibold">PC</p>
            </div>
          </div>
        </div>

        {/* Additional Features Highlight */}
        <div className="mt-16 bg-gradient-void/30 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            Immersive World Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-accent">Dynamic Biomes</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Flooded data temples with flowing information streams</li>
                <li>• Gravity-warped jungles defying physics</li>
                <li>• Glass deserts haunted by rogue AI phantoms</li>
                <li>• Crystalline formations hiding ancient secrets</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-accent">Emergent Gameplay</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Player choices reshape faction relationships</li>
                <li>• Environmental changes based on temporal discoveries</li>
                <li>• Evolving AI companion personality</li>
                <li>• Community-driven narrative branches</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div id="gallery" className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            Game Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 transition-colors group">
              <img
                src={gameplayImage}
                alt="Veilbound Screenshot 1"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 transition-colors group bg-gradient-void/40 flex items-center justify-center">
              <p className="text-muted-foreground text-center p-8">More screenshots coming soon...</p>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 transition-colors group bg-gradient-neural/20 flex items-center justify-center">
              <p className="text-muted-foreground text-center p-8">Upload your captures here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameplayFeatures;