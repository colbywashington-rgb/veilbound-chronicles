import VeilboundNavigation from '@/components/VeilboundNavigation';
import VeilboundHero from '@/components/VeilboundHero';
import AboutVeilbound from '@/components/AboutVeilbound';
import GameplayFeatures from '@/components/GameplayFeatures';
import VeilboundShop from '@/components/VeilboundShop';
import DeveloperSection from '@/components/DeveloperSection';
import CommunitySection from '@/components/CommunitySection';
import VeilboundFooter from '@/components/VeilboundFooter';
import { CartProvider } from '@/contexts/CartContext';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <VeilboundNavigation />
        <main>
          <VeilboundHero />
          <AboutVeilbound />
          <GameplayFeatures />
          <VeilboundShop />
          <DeveloperSection />
          <CommunitySection />
        </main>
        <VeilboundFooter />
      </div>
    </CartProvider>
  );
};

export default Index;
