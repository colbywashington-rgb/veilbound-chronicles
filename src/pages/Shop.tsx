import VeilboundNavigation from '@/components/VeilboundNavigation';
import VeilboundShop from '@/components/VeilboundShop';
import VeilboundFooter from '@/components/VeilboundFooter';
import { CartProvider } from '@/contexts/CartContext';

const Shop = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <VeilboundNavigation />
        <main className="pt-16">
          <VeilboundShop />
        </main>
        <VeilboundFooter />
      </div>
    </CartProvider>
  );
};

export default Shop;