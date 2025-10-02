import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    image_url: string;
    sizes: string[];
    colors: string[];
  };
  onAddToCart: (productId: string, size: string, color: string) => void;
}

const ProductDetailModal = ({ isOpen, onClose, product, onAddToCart }: ProductDetailModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  // For demo purposes, we'll show front and back views
  // In production, you'd have actual front/back image URLs
  const images = [
    { url: product.image_url, label: 'Front View' },
    { url: product.image_url, label: 'Back View' }, // Replace with actual back image URL
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleAddToCart = () => {
    onAddToCart(product.id, selectedSize, selectedColor);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-dyson bg-clip-text text-transparent">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Carousel */}
          <div className="relative">
            <div className="relative aspect-square rounded-lg overflow-hidden border border-border/50 bg-gradient-void/20">
              <img
                src={images[currentImageIndex].url}
                alt={`${product.name} - ${images[currentImageIndex].label}`}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
                onClick={prevImage}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
                onClick={nextImage}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Image Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                <p className="text-sm font-medium">{images[currentImageIndex].label}</p>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-2 mt-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-1 aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    idx === currentImageIndex
                      ? 'border-primary'
                      : 'border-border/50 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.label}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-3xl font-bold text-primary mb-2">${product.price.toFixed(2)}</p>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium mb-3">Select Size</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? 'default' : 'outline'}
                    onClick={() => setSelectedSize(size)}
                    className="min-w-[60px]"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-medium mb-3">Select Color</label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? 'default' : 'outline'}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            {/* Product Features */}
            <div className="bg-gradient-neural/10 rounded-lg p-4 border border-accent/20">
              <p className="font-semibold mb-2">Product Features:</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Premium quality fabric</li>
                <li>• High-resolution print design</li>
                <li>• Comfortable fit</li>
                <li>• Machine washable</li>
              </ul>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              className="w-full btn-veilbound hover-scale"
              size="lg"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart - ${product.price.toFixed(2)}
            </Button>

            <div className="flex gap-2 text-xs text-muted-foreground">
              <Badge variant="outline">Free Shipping</Badge>
              <Badge variant="outline">30-Day Returns</Badge>
              <Badge variant="outline">Secure Checkout</Badge>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
