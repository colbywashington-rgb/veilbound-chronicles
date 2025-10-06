import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Heart, 
  Lightbulb, 
  Target, 
  Twitter, 
  Github, 
  Mail,
  Calendar
} from 'lucide-react';
import veilDiverCharacter from '@/assets/veil-diver-character.jpg';

const DeveloperSection = () => {
  return (
    <section id="developer" className="py-24 bg-gradient-void/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-dyson bg-clip-text text-transparent">
            Meet the Developer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The creative vision and passion behind Veilbound's immersive world
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Developer Image & Bio */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-primary/20">
              <img
                src={veilDiverCharacter}
                alt="Veil Diver character concept art representing the developer's vision"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-primary mb-2">Independent Game Developer</h3>
                <p className="text-muted-foreground">
                  Crafting immersive experiences that push the boundaries of storytelling and gameplay
                </p>
              </div>
            </div>
          </div>

          {/* Developer Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">Creative Vision</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As an indie developer, I'm passionate about creating games that offer players meaningful 
                choices and deep immersion. Veilbound represents years of dreaming about what sci-fi 
                exploration could become when combined with innovative social systems and temporal mechanics.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My focus is on player-driven experiences where every choice matters, every environment 
                tells a story, and every interaction shapes the world around you.
              </p>
            </div>

            {/* Key Values */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card/30 backdrop-blur-sm border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-accent" />
                    <CardTitle className="text-base">Player-Focused</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs">
                    Every design decision prioritizes player agency and meaningful choices
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card/30 backdrop-blur-sm border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    <CardTitle className="text-base">Innovation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs">
                    Pushing boundaries with unique mechanics like Neural Ghosting
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card/30 backdrop-blur-sm border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Code className="w-5 h-5 text-accent" />
                    <CardTitle className="text-base">Quality Craft</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs">
                    Attention to detail in every aspect of the game experience
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card/30 backdrop-blur-sm border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-primary" />
                    <CardTitle className="text-base">Long-term Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs">
                    Building a universe that will expand with community feedback
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Future Plans */}
            <div className="bg-gradient-neural/10 rounded-lg p-6 border border-primary/20">
              <h4 className="font-semibold text-lg mb-3 text-primary flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Future Plans
              </h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Expanding the Dyson ring with new biomes and factions</li>
                <li>• Advanced AI storytelling systems that adapt to player choices</li>
                <li>• Multiplayer exploration modes for shared discoveries</li>
                <li>• VR adaptation for ultimate immersion</li>
                <li>• Community-created content integration</li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Connect & Follow Development</h4>
              <div className="flex flex-wrap gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-primary/30 hover-scale"
                  onClick={() => window.open('https://placeholder-twitter.com', '_blank', 'noopener,noreferrer')}
                >
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-primary/30 hover-scale"
                  onClick={() => window.open('https://placeholder-github.com', '_blank', 'noopener,noreferrer')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-primary/30 hover-scale"
                  onClick={() => window.open('mailto:veilbound91@gmail.com', '_blank', 'noopener,noreferrer')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Development Philosophy */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <blockquote className="text-xl italic text-muted-foreground border-l-4 border-primary pl-6">
            "Games should be more than entertainment—they should be worlds where players 
            can discover parts of themselves they never knew existed. Veilbound is my 
            commitment to creating experiences that matter."
          </blockquote>
          <p className="text-right mt-4 text-primary font-semibold">— Veilbound Developer</p>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;