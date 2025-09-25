import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, Calendar, Gamepad2, Download, Gift } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import veilboundHero from '@/assets/veilbound-hero.jpg';

const VeilboundShop = () => {
  const { addToCart } = useCart();

  const product = {
    id: 'veilbound-preorder',
    name: 'Veilbound - Digital Deluxe Edition',
    price: 59.99,
    originalPrice: 79.99,
    image: veilboundHero,
    description: 'Pre-order Veilbound and dive into a sci-fi adventure across a mysterious Dyson ring. Use advanced traversal abilities to uncover lost memories and reshape the past.',
    features: [
      'Full Game Access on Release',
      'Digital Soundtrack by Award-Winning Composer',
      'Exclusive Digital Artbook (50+ Pages)',
      'In-Game Cosmetic Pack',
      'Early Access (3 Days Before Launch)',
      'Season Pass for Future DLCs'
    ],
    platforms: ['Windows', 'Steam Deck', 'PlayStation 5', 'Xbox Series X/S'],
    releaseDate: 'Q3 2024',
    preorderBonus: 'Quantum Traveler Skin Pack'
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description
    });
  };

  return (
    <section id="shop" className="section-space bg-gradient-space">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Pre-Order Now Available
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            Secure Your Copy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pre-order Veilbound Digital Deluxe Edition and be among the first to explore the mysteries of the Dyson ring.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="animate-fade-in">
              <div className="relative group">
                <img 
                  src={product.image} 
                  alt="Veilbound Game Cover"
                  className="w-full h-auto rounded-lg shadow-deep hover-scale transition-all duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">
                    Demo Pre-Order
                  </Badge>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="animate-fade-in">
              <Card className="card-neural">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-secondary/20">
                      <Star className="w-3 h-3 mr-1" />
                      Digital Deluxe
                    </Badge>
                    <Badge variant="outline" className="border-green-500/30 text-green-400">
                      25% Pre-Order Discount
                    </Badge>
                  </div>
                  <CardTitle className="text-3xl font-bold text-glow">{product.name}</CardTitle>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-3xl font-bold text-primary">${product.price}</span>
                    <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <CardDescription className="text-base leading-relaxed">
                    {product.description}
                  </CardDescription>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Expected Release: {product.releaseDate}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Gamepad2 className="w-4 h-4" />
                      <span>Platforms: {product.platforms.join(', ')}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Gift className="w-4 h-4" />
                      <span>Pre-Order Bonus: {product.preorderBonus}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-primary">What's Included:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="space-y-3">
                  <Button 
                    className="w-full btn-veilbound hover-scale text-lg py-6"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart - ${product.price}
                  </Button>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground justify-center">
                    <Download className="w-3 h-3" />
                    <span>This is a demo pre-order system for testing purposes</span>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VeilboundShop;