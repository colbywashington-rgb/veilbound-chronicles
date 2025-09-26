import VeilboundNavigation from '@/components/VeilboundNavigation';
import CommunitySection from '@/components/CommunitySection';
import VeilboundFooter from '@/components/VeilboundFooter';
import { CartProvider } from '@/contexts/CartContext';

const Community = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <VeilboundNavigation />
        <main className="pt-16">
          <CommunitySection />
        </main>
        <VeilboundFooter />
      </div>
    </CartProvider>
  );
};

export default Community;