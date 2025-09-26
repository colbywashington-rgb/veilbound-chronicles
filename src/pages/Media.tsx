import VeilboundNavigation from '@/components/VeilboundNavigation';
import VeilboundFooter from '@/components/VeilboundFooter';
import { CartProvider } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { PlayCircle, Image, Music, Download } from 'lucide-react';

const Media = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <VeilboundNavigation />
        <main className="pt-16">
          <section className="py-20 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-dyson bg-clip-text text-transparent">
                  Media & Press
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Download high-quality assets, watch trailers, and explore the world of Veilbound
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Trailer Section */}
                <div className="glass-card p-6 hover-scale">
                  <div className="flex items-center mb-4">
                    <PlayCircle className="w-6 h-6 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">Official Trailer</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Watch the official gameplay trailer showcasing Veilbound's immersive world.
                  </p>
                  <Button className="w-full btn-veilbound">
                    Watch Trailer
                  </Button>
                </div>

                {/* Screenshots */}
                <div className="glass-card p-6 hover-scale">
                  <div className="flex items-center mb-4">
                    <Image className="w-6 h-6 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">Screenshots</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    High-resolution screenshots and artwork from the game.
                  </p>
                  <Button variant="outline" className="w-full">
                    View Gallery
                  </Button>
                </div>

                {/* Soundtrack */}
                <div className="glass-card p-6 hover-scale">
                  <div className="flex items-center mb-4">
                    <Music className="w-6 h-6 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">Soundtrack</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Listen to the atmospheric soundtrack composed for Veilbound.
                  </p>
                  <Button variant="outline" className="w-full">
                    Listen Now
                  </Button>
                </div>

                {/* Press Kit */}
                <div className="glass-card p-6 hover-scale lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <Download className="w-6 h-6 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">Press Kit</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Download our complete press kit including logos, screenshots, and official descriptions.
                  </p>
                  <Button className="btn-veilbound">
                    Download Press Kit
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <VeilboundFooter />
      </div>
    </CartProvider>
  );
};

export default Media;