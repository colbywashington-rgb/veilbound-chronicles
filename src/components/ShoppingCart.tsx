import { useState, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Plus, Minus, Trash2, CreditCard, User, Mail, MapPin, CheckCircle, Shield, Smartphone, Wallet, Lock, Star, Truck, Gift, Percent } from 'lucide-react';

const ShoppingCartComponent = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems, isCartOpen, setIsCartOpen, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activePaymentMethod, setActivePaymentMethod] = useState('card');
  const [selectedSavedCard, setSelectedSavedCard] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    saveCard: false,
    billingAddressSame: true
  });

  // Simulated saved payment methods
  const savedCards = [
    { id: '1', last4: '4242', brand: 'Visa', expiryMonth: '12', expiryYear: '25', isDefault: true },
    { id: '2', last4: '5555', brand: 'Mastercard', expiryMonth: '06', expiryYear: '26', isDefault: false },
  ];

  const paymentMethods = [
    { id: 'card', name: 'Credit Card', icon: CreditCard, available: true },
    { id: 'paypal', name: 'PayPal', icon: Wallet, available: true },
    { id: 'applepay', name: 'Apple Pay', icon: Smartphone, available: true },
    { id: 'googlepay', name: 'Google Pay', icon: Smartphone, available: true },
  ];

  const subtotal = getTotalPrice();
  const discount = subtotal * 0.25; // 25% pre-order discount
  const tax = (subtotal - discount) * 0.08; // 8% tax
  const shipping = subtotal > 50 ? 0 : 9.99; // Free shipping over $50
  const total = subtotal - discount + tax + shipping;

  const handleQuantityChange = useCallback((id: string, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  }, [updateQuantity]);

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleCheckout = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate realistic payment processing time
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
      clearCart();
      setShowCheckout(false);
    }, 3000);
  }, [clearCart]);

  const CartContent = useMemo(() => {
    if (orderComplete) {
      return (
        <div className="p-8 text-center space-y-6">
          <div className="animate-scale-in">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">Order Confirmed!</h3>
            <p className="text-muted-foreground mb-6">
              Your demo pre-order has been processed successfully. This was a demonstration transaction.
            </p>
            <div className="bg-card/50 rounded-lg p-4 space-y-2 mb-6">
              <Badge variant="outline" className="border-green-500/30 text-green-400 mb-2">
                Demo Order #VB-{new Date().getFullYear()}-{String(Math.floor(Math.random() * 10000)).padStart(4, '0')}
              </Badge>
              <div className="text-sm space-y-1">
                <div className="flex items-center justify-center gap-2 text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>Confirmation email sent</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-green-400">
                  <Gift className="w-4 h-4" />
                  <span>Pre-order benefits activated</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-green-400">
                  <Star className="w-4 h-4" />
                  <span>Early access reserved</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-primary">What happens next?</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>• You'll receive updates about development progress</p>
              <p>• Beta access will be granted 30 days before launch</p>
              <p>• Exclusive in-game content will be added to your account</p>
            </div>
          </div>
          
          <Button 
            className="btn-veilbound"
            onClick={() => {
              setOrderComplete(false);
              setIsCartOpen(false);
            }}
          >
            Continue Exploring
          </Button>
        </div>
      );
    }

    if (showCheckout) {
      return (
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-primary mb-2">Secure Checkout</h3>
            <div className="flex items-center justify-center gap-2 mb-3">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">256-bit SSL Encrypted</span>
            </div>
            <Badge variant="outline" className="border-yellow-500/30 text-yellow-400">
              Demo Mode - No Real Payment Processing
            </Badge>
          </div>

          <form onSubmit={handleCheckout} className="space-y-6">
            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2 text-primary">
                <User className="w-4 h-4" />
                Contact Information
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="John"
                    className="bg-input/50"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Doe"
                    className="bg-input/50"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="john@example.com"
                  className="bg-input/50"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="bg-input/50"
                />
              </div>
            </div>

            <Separator />

            {/* Shipping Address */}
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2 text-primary">
                <MapPin className="w-4 h-4" />
                Shipping Address
              </h4>
              <div>
                <Label htmlFor="address">Street Address *</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="123 Main Street"
                  className="bg-input/50"
                  required
                />
              </div>
              <div>
                <Label htmlFor="address2">Apartment, Suite, etc.</Label>
                <Input
                  id="address2"
                  value={formData.address2}
                  onChange={(e) => handleInputChange('address2', e.target.value)}
                  placeholder="Apt 4B"
                  className="bg-input/50"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="New York"
                    className="bg-input/50"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="state">State *</Label>
                  <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
                    <SelectTrigger className="bg-input/50">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CA">California</SelectItem>
                      <SelectItem value="NY">New York</SelectItem>
                      <SelectItem value="TX">Texas</SelectItem>
                      <SelectItem value="FL">Florida</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="zipCode">ZIP Code *</Label>
                  <Input
                    id="zipCode"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange('zipCode', e.target.value)}
                    placeholder="10001"
                    className="bg-input/50"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="country">Country *</Label>
                  <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                    <SelectTrigger className="bg-input/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="US">United States</SelectItem>
                      <SelectItem value="CA">Canada</SelectItem>
                      <SelectItem value="UK">United Kingdom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Separator />

            {/* Payment Method */}
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2 text-primary">
                <Lock className="w-4 h-4" />
                Payment Method
              </h4>
              
              <Tabs value={activePaymentMethod} onValueChange={setActivePaymentMethod}>
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                  {paymentMethods.map((method) => (
                    <TabsTrigger 
                      key={method.id} 
                      value={method.id}
                      className="flex items-center gap-2"
                      disabled={!method.available}
                    >
                      <method.icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{method.name}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value="card" className="space-y-4">
                  {/* Saved Cards */}
                  {savedCards.length > 0 && (
                    <div className="space-y-3">
                      <Label>Saved Payment Methods</Label>
                      {savedCards.map((card) => (
                        <Card 
                          key={card.id}
                          className={`cursor-pointer transition-all ${
                            selectedSavedCard === card.id ? 'ring-2 ring-primary' : ''
                          }`}
                          onClick={() => setSelectedSavedCard(selectedSavedCard === card.id ? '' : card.id)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <CreditCard className="w-6 h-6 text-muted-foreground" />
                                <div>
                                  <div className="font-medium">•••• •••• •••• {card.last4}</div>
                                  <div className="text-sm text-muted-foreground">
                                    {card.brand} • Expires {card.expiryMonth}/{card.expiryYear}
                                  </div>
                                </div>
                              </div>
                              {card.isDefault && (
                                <Badge variant="secondary">Default</Badge>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedSavedCard('')}
                      >
                        + Use a different card
                      </Button>
                    </div>
                  )}

                  {/* New Card Form */}
                  {!selectedSavedCard && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="nameOnCard">Name on Card *</Label>
                        <Input
                          id="nameOnCard"
                          value={formData.nameOnCard}
                          onChange={(e) => handleInputChange('nameOnCard', e.target.value)}
                          placeholder="John Doe"
                          className="bg-input/50"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardNumber">Card Number *</Label>
                        <Input
                          id="cardNumber"
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                          placeholder="4242 4242 4242 4242"
                          className="bg-input/50"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date *</Label>
                          <Input
                            id="expiryDate"
                            value={formData.expiryDate}
                            onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                            placeholder="MM/YY"
                            className="bg-input/50"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input
                            id="cvv"
                            value={formData.cvv}
                            onChange={(e) => handleInputChange('cvv', e.target.value)}
                            placeholder="123"
                            className="bg-input/50"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="paypal" className="space-y-4">
                  <div className="text-center py-8">
                    <Wallet className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">You'll be redirected to PayPal to complete your payment securely.</p>
                  </div>
                </TabsContent>

                <TabsContent value="applepay" className="space-y-4">
                  <div className="text-center py-8">
                    <Smartphone className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Use Touch ID or Face ID to pay with Apple Pay.</p>
                  </div>
                </TabsContent>

                <TabsContent value="googlepay" className="space-y-4">
                  <div className="text-center py-8">
                    <Smartphone className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Pay quickly and securely with Google Pay.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <Separator />

            {/* Order Summary */}
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Order Summary</h4>
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <div className="flex-1">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-muted-foreground"> × {item.quantity}</span>
                    </div>
                    <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                
                <Separator />
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-green-400">
                    <span className="flex items-center gap-1">
                      <Percent className="w-3 h-3" />
                      Pre-order Discount (25%)
                    </span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1">
                      <Truck className="w-3 h-3" />
                      Shipping
                    </span>
                    <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg text-primary">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setShowCheckout(false)}
                className="flex-1"
                disabled={isProcessing}
              >
                Back to Cart
              </Button>
              <Button 
                type="submit" 
                className="btn-veilbound flex-1 relative"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </div>
                ) : (
                  <>Complete Demo Order</>
                )}
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
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-green-400">
            <span className="flex items-center gap-1">
              <Percent className="w-3 h-3" />
              Pre-order Discount (25%)
            </span>
            <span>-${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="flex items-center gap-1">
              <Truck className="w-3 h-3" />
              Shipping
            </span>
            <span className="text-green-400">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Estimated Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <Separator />
          <div className="flex justify-between font-bold text-lg text-primary">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
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
  }, [orderComplete, showCheckout, items, formData, handleInputChange, handleCheckout, handleQuantityChange, getTotalPrice, getTotalItems, clearCart, removeFromCart, setIsCartOpen]);

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
        {CartContent}
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartComponent;