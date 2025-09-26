import VeilboundNavigation from '@/components/VeilboundNavigation';
import DeveloperSection from '@/components/DeveloperSection';
import VeilboundFooter from '@/components/VeilboundFooter';
import { CartProvider } from '@/contexts/CartContext';

const Developer = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <VeilboundNavigation />
        <main className="pt-16">
          <DeveloperSection />
        </main>
        <VeilboundFooter />
      </div>
    </CartProvider>
  );
};

export default Developer;