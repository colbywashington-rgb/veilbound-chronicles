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
                {/* Trailer Section - Full Width */}
                <div className="lg:col-span-3 glass-card p-6">
                  <div className="flex items-center mb-4">
                    <PlayCircle className="w-6 h-6 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">Official Trailer</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Watch the official gameplay trailer showcasing Veilbound's immersive world.
                  </p>
                  <div className="relative aspect-video rounded-lg overflow-hidden border border-border/50">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Veilbound Official Trailer"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
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