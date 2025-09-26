import VeilboundNavigation from '@/components/VeilboundNavigation';
import GameplayFeatures from '@/components/GameplayFeatures';
import VeilboundFooter from '@/components/VeilboundFooter';
import { CartProvider } from '@/contexts/CartContext';

const Features = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <VeilboundNavigation />
        <main className="pt-16">
          <GameplayFeatures />
        </main>
        <VeilboundFooter />
      </div>
    </CartProvider>
  );
};

export default Features;