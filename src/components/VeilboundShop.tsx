import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShoppingCart, Star, Calendar, Gamepad2, Download, Gift, ShirtIcon, CreditCard, Sparkles } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import veilboundHero from '@/assets/veilbound-hero.jpg';

const VeilboundShop = () => {
  const { addToCart } = useCart();
  const [selectedTshirtSize, setSelectedTshirtSize] = useState<{ [key: string]: string }>({});
  const [selectedTshirtColor, setSelectedTshirtColor] = useState<{ [key: string]: string }>({});

  const gameProduct = {
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

  const merchProducts = [
    {
      id: 'tshirt-logo',
      name: 'Veilbound Logo T-Shirt',
      price: 29.99,
      image: veilboundHero,
      description: 'Premium quality cotton t-shirt featuring the iconic Veilbound logo.',
      colors: ['Black', 'Navy', 'Charcoal', 'White'],
      sizes: ['S', 'M', 'L', 'XL', '2XL']
    },
    {
      id: 'tshirt-diver',
      name: 'Veil Diver Character Tee',
      price: 32.99,
      image: veilboundHero,
      description: 'Show your love for the game with this exclusive character design t-shirt.',
      colors: ['Black', 'Navy', 'Dark Green'],
      sizes: ['S', 'M', 'L', 'XL', '2XL']
    },
    {
      id: 'tshirt-dyson',
      name: 'Dyson Ring Explorer Shirt',
      price: 34.99,
      image: veilboundHero,
      description: 'Explore the mysteries in style with this premium explorer-themed shirt.',
      colors: ['Black', 'Slate Gray', 'Deep Blue'],
      sizes: ['S', 'M', 'L', 'XL', '2XL']
    }
  ];

  const giftCards = [
    {
      id: 'giftcard-25',
      name: 'Veilbound Gift Card - $25',
      price: 25.00,
      image: veilboundHero,
      description: 'Perfect for any Veilbound fan. Can be used for games, DLC, or merchandise.'
    },
    {
      id: 'giftcard-50',
      name: 'Veilbound Gift Card - $50',
      price: 50.00,
      image: veilboundHero,
      description: 'Give the gift of adventure. Redeemable for all Veilbound content.'
    },
    {
      id: 'giftcard-100',
      name: 'Veilbound Gift Card - $100',
      price: 100.00,
      image: veilboundHero,
      description: 'The ultimate gift for the ultimate fan. Access to everything Veilbound.'
    }
  ];

  const handleAddGameToCart = () => {
    addToCart({
      id: gameProduct.id,
      name: gameProduct.name,
      price: gameProduct.price,
      image: gameProduct.image,
      description: gameProduct.description
    });
  };

  const handleAddMerchToCart = (merch: typeof merchProducts[0]) => {
    const size = selectedTshirtSize[merch.id] || merch.sizes[0];
    const color = selectedTshirtColor[merch.id] || merch.colors[0];
    
    addToCart({
      id: `${merch.id}-${size}-${color}`,
      name: `${merch.name} (${size}, ${color})`,
      price: merch.price,
      image: merch.image,
      description: merch.description
    });
  };

  const handleAddGiftCardToCart = (giftCard: typeof giftCards[0]) => {
    addToCart({
      id: giftCard.id,
      name: giftCard.name,
      price: giftCard.price,
      image: giftCard.image,
      description: giftCard.description
    });
  };

  return (
    <section id="shop" className="section-space bg-gradient-space">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Game Pre-Order Section */}
        <div>
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
              <div className="animate-fade-in">
                <div className="relative group">
                  <img 
                    src={gameProduct.image} 
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
                    <CardTitle className="text-3xl font-bold text-glow">{gameProduct.name}</CardTitle>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-3xl font-bold text-primary">${gameProduct.price}</span>
                      <span className="text-lg text-muted-foreground line-through">${gameProduct.originalPrice}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <CardDescription className="text-base leading-relaxed">
                      {gameProduct.description}
                    </CardDescription>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>Expected Release: {gameProduct.releaseDate}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Gamepad2 className="w-4 h-4" />
                        <span>Platforms: {gameProduct.platforms.join(', ')}</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-primary">
                        <Gift className="w-4 h-4" />
                        <span>Pre-Order Bonus: {gameProduct.preorderBonus}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-primary">What's Included:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {gameProduct.features.map((feature, index) => (
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
                      onClick={handleAddGameToCart}
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Add to Cart - ${gameProduct.price}
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

        {/* Merchandise Section */}
        <div>
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              <ShirtIcon className="w-3 h-3 mr-1" />
              Official Merch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
              Veilbound Merchandise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wear your passion for Veilbound with our exclusive collection of premium apparel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {merchProducts.map((merch) => (
              <Card key={merch.id} className="card-neural hover-scale animate-fade-in">
                <CardHeader>
                  <div className="relative mb-4">
                    <img 
                      src={merch.image} 
                      alt={merch.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <Badge className="absolute top-2 right-2 bg-primary/90">
                      New
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{merch.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">${merch.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>{merch.description}</CardDescription>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Size</label>
                      <Select 
                        value={selectedTshirtSize[merch.id] || merch.sizes[0]}
                        onValueChange={(value) => setSelectedTshirtSize(prev => ({ ...prev, [merch.id]: value }))}
                      >
                        <SelectTrigger className="bg-input/50">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {merch.sizes.map((size) => (
                            <SelectItem key={size} value={size}>{size}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Color</label>
                      <Select 
                        value={selectedTshirtColor[merch.id] || merch.colors[0]}
                        onValueChange={(value) => setSelectedTshirtColor(prev => ({ ...prev, [merch.id]: value }))}
                      >
                        <SelectTrigger className="bg-input/50">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {merch.colors.map((color) => (
                            <SelectItem key={color} value={color}>{color}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full btn-veilbound"
                    onClick={() => handleAddMerchToCart(merch)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Gift Cards Section */}
        <div>
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              <Gift className="w-3 h-3 mr-1" />
              Perfect Gift
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
              Veilbound Gift Cards
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Give the gift of adventure. Redeemable for games, DLC, and merchandise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {giftCards.map((giftCard) => (
              <Card key={giftCard.id} className="card-neural hover-scale animate-fade-in">
                <CardHeader>
                  <div className="relative mb-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg p-8 h-40 flex items-center justify-center">
                    <div className="text-center">
                      <CreditCard className="w-12 h-12 text-primary mx-auto mb-2" />
                      <Sparkles className="w-6 h-6 text-primary/60 absolute top-4 right-4" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-center">
                    ${giftCard.price}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {giftCard.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full btn-veilbound"
                    onClick={() => handleAddGiftCardToCart(giftCard)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default VeilboundShop;