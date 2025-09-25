import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Plus, Minus, Trash2, CreditCard, User, Mail, MapPin, CheckCircle } from 'lucide-react';

const ShoppingCartComponent = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems, isCartOpen, setIsCartOpen, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleQuantityChange = (id: string, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order processing
    setTimeout(() => {
      setOrderComplete(true);
      clearCart();
      setShowCheckout(false);
    }, 2000);
  };

  const CartContent = () => {
    if (orderComplete) {
      return (
        <div className="p-8 text-center space-y-6">
          <div className="animate-scale-in">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-2">Order Confirmed!</h3>
            <p className="text-muted-foreground mb-4">
              Thank you for your demo pre-order! This was a test transaction.
            </p>
            <Badge variant="outline" className="border-green-500/30 text-green-400">
              Demo Order #VB-2024-{Math.floor(Math.random() * 10000)}
            </Badge>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>✓ Confirmation email sent (simulated)</p>
            <p>✓ Pre-order benefits activated (simulated)</p>
            <p>✓ Early access reserved (simulated)</p>
          </div>
          <Button 
            className="btn-veilbound"
            onClick={() => {
              setOrderComplete(false);
              setIsCartOpen(false);
            }}
          >
            Continue Browsing
          </Button>
        </div>
      );
    }

    if (showCheckout) {
      return (
        <div className="p-6 space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-primary mb-2">Demo Checkout</h3>
            <Badge variant="outline" className="border-yellow-500/30 text-yellow-400">
              Test Mode - No Real Payment
            </Badge>
          </div>

          <form onSubmit={handleCheckout} className="space-y-6">
            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <User className="w-4 h-4" />
                Contact Information
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <Separator />

            {/* Billing Address */}
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Billing Address
              </h4>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="123 Main St"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="New York"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input
                    id="zipCode"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange('zipCode', e.target.value)}
                    placeholder="10001"
                    required
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Payment Information */}
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                Payment Information
              </h4>
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  value={formData.cardNumber}
                  onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                  placeholder="4242 4242 4242 4242"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input
                    id="expiryDate"
                    value={formData.expiryDate}
                    onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    value={formData.cvv}
                    onChange={(e) => handleInputChange('cvv', e.target.value)}
                    placeholder="123"
                    required
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Order Summary */}
            <div className="space-y-2">
              <h4 className="font-semibold">Order Summary</h4>
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.name} x{item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between font-bold text-primary">
                <span>Total</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setShowCheckout(false)}
                className="flex-1"
              >
                Back to Cart
              </Button>
              <Button type="submit" className="btn-veilbound flex-1">
                Complete Demo Order
              </Button>
            </div>
          </form>
        </div>
      );
    }

    if (items.length === 0) {
      return (
        <div className="p-8 text-center space-y-4">
          <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto" />
          <h3 className="text-xl font-semibold text-muted-foreground">Your cart is empty</h3>
          <p className="text-sm text-muted-foreground">Add some items to get started!</p>
          <Button 
            className="btn-veilbound"
            onClick={() => setIsCartOpen(false)}
          >
            Continue Shopping
          </Button>
        </div>
      );
    }

    return (
      <div className="p-6 space-y-6">
        <div className="space-y-4">
          {items.map((item) => (
            <Card key={item.id} className="card-neural">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <p className="text-primary font-bold">${item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="w-8 h-8 p-0"
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="w-8 h-8 p-0"
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                      className="w-8 h-8 p-0 text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal ({getTotalItems()} items)</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-green-400">
            <span>Pre-order Discount (25%)</span>
            <span>-${(getTotalPrice() * 0.25).toFixed(2)}</span>
          </div>
          <Separator />
          <div className="flex justify-between font-bold text-lg text-primary">
            <span>Total</span>
            <span>${(getTotalPrice() * 0.75).toFixed(2)}</span>
          </div>
        </div>

        <Button 
          className="w-full btn-veilbound"
          onClick={() => setShowCheckout(true)}
        >
          Proceed to Demo Checkout
        </Button>

        <div className="text-center">
          <Badge variant="outline" className="border-yellow-500/30 text-yellow-400">
            Demo Mode - No Real Payment Required
          </Badge>
        </div>
      </div>
    );
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <ShoppingCart className="w-4 h-4" />
          {getTotalItems() > 0 && (
            <Badge 
              className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full p-0 flex items-center justify-center"
            >
              {getTotalItems()}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg bg-card/95 backdrop-blur-lg">
        <SheetHeader>
          <SheetTitle className="text-primary">Shopping Cart</SheetTitle>
        </SheetHeader>
        <CartContent />
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartComponent;