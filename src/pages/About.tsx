import VeilboundNavigation from '@/components/VeilboundNavigation';
import AboutVeilbound from '@/components/AboutVeilbound';
import VeilboundFooter from '@/components/VeilboundFooter';
import { CartProvider } from '@/contexts/CartContext';

const About = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <VeilboundNavigation />
        <main className="pt-16">
          <AboutVeilbound />
        </main>
        <VeilboundFooter />
      </div>
    </CartProvider>
  );
};

export default About;